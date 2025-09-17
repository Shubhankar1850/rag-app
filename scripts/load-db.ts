import { DataAPIClient } from "@datastax/astra-db-ts";
import { DocxLoader } from "@langchain/community/document_loaders/fs/docx";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { VertexAIEmbeddings } from "@langchain/google-vertexai";
import "dotenv/config"
import fs from 'fs';
import path from 'path';

const { ASTRA_DB_APPLICATION_TOKEN, 
    ASTRA_DB_API_ENDPOINT, 
    ASTRA_DB_COLLECTION, 
    ASTRA_DB_NAMESPACE,
    GOOGLE_PROJECT_ID,
    GOOGLE_LOCATION,
    GOOGLE_APPLICATION_CREDENTIALS} =  process.env

async function run() {
    const docsDir = "./documents";

    const allDocs = [];
    for (const file of fs.readdirSync(docsDir)){
        if(file.endsWith("docx")){

            const loader = new DocxLoader(path.join(docsDir, file));
            const docs = await loader.load();
            allDocs.push(...docs);

        }
    }


    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 200
    });

    const splitDocs = await splitter.splitDocuments(allDocs);

    const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN);
    const db = client.db(ASTRA_DB_API_ENDPOINT!);

    try{
        await db.createCollection(ASTRA_DB_COLLECTION!, {
            vector: {dimension: 3072, metric: "dot_product"}
        })
    }
    catch(err:any){
        if(err.message.includes("already exists")){
            console.log("collection already exists skiping")
        }
        else{
            throw err;
        }
    }

    const collection =  db.collection(ASTRA_DB_COLLECTION!, {keyspace: ASTRA_DB_NAMESPACE});

    const embeddings = new VertexAIEmbeddings({
        model: "gemini-embedding-001",
      });

    for (const [i, doc] of splitDocs.entries()){

        const embeddingArray = await embeddings.embedQuery(doc.pageContent);
        const embedding = Array.isArray(embeddingArray[0]) ? embeddingArray[0] : embeddingArray;

        console.log(embeddingArray)

        await collection.insertOne(
            {
                _id: `doc_${i}`, // unique id
                text: doc.pageContent,
                metadata: doc.metadata,
                $vector: embedding,
            }
        )
    }
}

run().catch(console.error);;