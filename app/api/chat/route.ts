import { DataAPIClient } from "@datastax/astra-db-ts";
import { VertexAIEmbeddings } from "@langchain/google-vertexai";
import {GoogleGenAI} from "@google/genai";

const { ASTRA_DB_APPLICATION_TOKEN, 
    ASTRA_DB_API_ENDPOINT, 
    ASTRA_DB_COLLECTION, 
    ASTRA_DB_NAMESPACE,
    GOOGLE_PROJECT_ID,
    GOOGLE_LOCATION} =  process.env

async function generateContent(contents:string[]) {
        const projectId = GOOGLE_PROJECT_ID;
        const location = GOOGLE_LOCATION;

        const ai = new GoogleGenAI({
            vertexai: true,
            project: projectId,
            location: location
        })

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: contents,
          });
        
          console.log(response.text);
        
          return response.text;
    
}

const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(ASTRA_DB_API_ENDPOINT!, {keyspace: ASTRA_DB_NAMESPACE});


export async function POST(req:Request) {

    try{
    
      const {messages} = await req.json();
      const latestMessage = messages[messages?.length -1]?.content;

      let docContext = "";

      const embedding  = new VertexAIEmbeddings({
        model: "gemini-embedding-001",
      });

      const embedText= await embedding.embedQuery(latestMessage)

      try{
        const collection = await db.collection(ASTRA_DB_COLLECTION!);
        const cursor = collection.find({}, {
            sort: { $vector: embedText },
            limit: 10
          });

        const documents = await cursor.toArray();

        const docs = documents?.map(doc=>doc.text);

        docContext = JSON.stringify(docs);

      } catch (err){
        console.log(err)
      }

      const template = `
        You are an AI assistant that knows evrything about Shubhankar's career and early life.
        Use the below context to augment to answer any question asked about him. 
        If asked about topics unrelated to Shubhankar's professional life, politely decline and redirect.
        Context will provide you will latest data from his resume and a small biography summary written by him.
        If the context doesn't contain specific information, provide reasonable inferences based on a Frontend developer with 6+ years of React experience
        Do not mention the source of information or what the context does and doesn't include.
        Format reponses using markdown where applicable and don't return images
        Be conversational but professional
        Keep responses concise and focused
        -----------------
        START CONTEXT
        ${docContext}
        END CONTEXT
        -----------------
        QUESTION: ${latestMessage}
        -----------------
      `

      const response  = await generateContent([template, ...messages]);

      return new Response(response, {
        status: 200,
        headers: { "Content-Type": "text/plain" },
      });
    } catch (err) {
      console.error(err);
      return new Response("Internal Server Error", { status: 500 });
    }


    
}
