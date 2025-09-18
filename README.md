# Portfolio & RAG-based Chat Application

This repository contains my personal portfolio built with **Next.js** and **TypeScript**, along with a **RAG-based chat application** that integrates **Google Vertex AI** and **LangChain**. The project is deployed on **Vercel**.

---

## Features

### Portfolio
- Responsive and modern design showcasing projects, skills, and experience.
- Built with **Next.js** and **TypeScript** for performance and maintainability.
- SEO-friendly with dynamic metadata.
- Deployed on **Vercel** with continuous deployment.

### RAG-based Chat Application
- Retrieval-Augmented Generation (RAG) pipeline for contextual Q&A.
- **Google Vertex AI** as the language model backend.
- **LangChain** for orchestration of retrieval and prompt management.
- Extensible structure for integrating custom datasets or vector stores.

---

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, TailwindCSS  
- **AI/Backend:** Google Vertex AI, LangChain  
- **Deployment:** Vercel  

---

## Project Structure

```
portfolio/       # Portfolio pages, components, and assets
chatapp/         # RAG-based chat application code
utils/           # LangChain utilities, retrievers, and prompts
api/             # API routes for handling queries
public/          # Static assets
styles/          # Global styles
next.config.js   # Next.js configuration
tsconfig.json    # TypeScript configuration
```

---

## Getting Started

1. **Clone the repository**
   ```bash
      git clone https://github.com/<your-username>/<repo-name>.git
         cd <repo-name>
            ```

            2. **Install dependencies**
               ```bash
                  npm install
                     # or
                        yarn install
                           ```

                           3. **Set up environment variables**  
                              Create a `.env.local` file in the root directory and include the following:
                                 ```bash
                                    GOOGLE_PROJECT_ID=<your-gcp-project-id>
                                       GOOGLE_VERTEX_AI_KEY=<your-api-key>
                                          VECTOR_DB_URL=<your-vector-db-url>
                                             VECTOR_DB_KEY=<your-vector-db-key>
                                                ```

                                                4. **Run the application locally**
                                                   ```bash
                                                      npm run dev
                                                         ```

                                                         5. Access the application at [http://localhost:3000](http://localhost:3000).

                                                         ---

                                                         ## Deployment

                                                         This project is deployed on **Vercel**. Pushing changes to the `main` branch triggers automatic build and deployment.

                                                         ---

                                                         ## Roadmap

                                                         - Add a blog section to the portfolio  
                                                         - Improve chat UI with streaming responses  
                                                         - Add support for multiple vector stores  
                                                         - Implement authentication for personalized chat sessions  

                                                         ---

                                                         ## License

                                                         This project is licensed under 
This repository contains my personal portfolio built with **Next.js** and **TypeScript**, along with a **RAG-based chat application** that integrates **Google Vertex AI** and **LangChain**. The project is deployed on **Vercel**.

---

## Features

### Portfolio
- Responsive and modern design showcasing projects, skills, and experience.
- Built with **Next.js** and **TypeScript** for performance and maintainability.
- SEO-friendly with dynamic metadata.
- Deployed on **Vercel** with continuous deployment.

### RAG-based Chat Application
- Retrieval-Augmented Generation (RAG) pipeline for contextual Q&A.
- **Google Vertex AI** as the language model backend.
- **LangChain** for orchestration of retrieval and prompt management.
- Extensible structure for integrating custom datasets or vector stores.

---

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, TailwindCSS  
- **AI/Backend:** Google Vertex AI, LangChain  
- **Deployment:** Vercel  

---


## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
qà
2. Install dependencies

npm install
# or
yarn install


3. Set up environment variables
Create a .env.local file in the root directory and include the following:

GOOGLE_PROJECT_ID=<your-gcp-project-id>
GOOGLE_VERTEX_AI_KEY=<your-api-key>
VECTOR_DB_URL=<your-vector-db-url>
VECTOR_DB_KEY=<your-vector-db-key>


4. Run the application locally

npm run dev


5. Access the application at http://localhost:3000.




---

Deployment

This project is deployed on Vercel. Pushing changes to the main branch triggers automatic build and deployment.


---

Roadmap

Add a blog section to the portfolio

Improve chat UI with streaming responses

Add support for multiple vector stores

Implement authentication for personalized chat sessions



---

License

This project is licensed under the MIT License.


---

Acknowledgements

Next.js

Vercel

LangChain

Google Vertex AI
