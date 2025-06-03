# AI Tutor Project

## Project Title

AI Tutor

## Description

This project is an AI-powered tutoring application designed to provide personalized assistance across various subjects. The core of the system is a sophisticated multi-agent architecture where a central **Tutor Agent** intelligently delegates user queries to specialized sub-agents, such as a **Math Agent** and a **Physics Agent**. These sub-agents are equipped with specific knowledge and tools to handle domain-specific questions effectively.

The application utilizes concepts from **Google's Agent Development Kit (ADK)** to build the agent hierarchy and interaction patterns. The natural language processing and generation capabilities are powered by the **Gemini API**, enabling the agents to understand and respond to user queries in a human-like manner.

The frontend is built with React and Next.js, providing a dynamic and responsive user interface for interaction with the AI tutor. The backend, developed in Python, houses the multi-agent system and handles the API requests.

## Project Objective and Scenario

The primary objective of this project is to create an intelligent and adaptable AI tutor that can assist students with their learning by providing explanations, answering questions, and offering guidance across different academic subjects.

**Scenario:** A student is working on their physics homework and encounters a complex problem involving projectile motion. They can ask the AI Tutor for help. The Tutor Agent receives the query, recognizes it as a physics problem, and delegates it to the Physics Agent. The Physics Agent, potentially using a calculator tool, processes the problem, provides a step-by-step explanation, and helps the student understand the concepts involved. Similarly, if the student asks a math question, the Tutor Agent would delegate to the Math Agent, which might use a calculator tool to assist with computations or explain mathematical principles.

## Features

*   Multi-agent architecture for specialized subject assistance.
*   Intelligent delegation of queries by the Tutor Agent.
*   Support for multiple subjects (Math, Physics, etc.) through specialized agents.
*   Integration with the Gemini API for natural language understanding and generation.
*   Utilizes tools (e.g., calculator) for enhanced problem-solving capabilities.
*   Interactive and responsive user interface.

## Technologies Used

### Frontend

*   React
*   Next.js
*   Tailwind CSS

### Backend

*   Python
*   Specific libraries will be listed in `requirements.txt` (e.g., Flask/FastAPI for web framework, google-generativeai for Gemini API interaction).
*   Concepts from Google's Agent Development Kit (ADK).

## Installation Guide

### Prerequisites

*   Node.js and npm or yarn (for frontend)
*   Python 3.6+ and pip (for backend)

### Backend Installation

1.  Navigate to the `Backend` directory:
    
```bash
cd Backend
```
2.  Install the required Python libraries. You can generate a `requirements.txt` file based on the imported libraries in the backend code:
    
```bash
pip freeze > requirements.txt
```
    Then install the dependencies:
    
```bash
pip install -r requirements.txt
```
3.  Set up environment variables. You will need to configure your Gemini API key. Create a `.env` file in the `Backend` directory and add:
    
```
env
    GEMINI_API_KEY=your_gemini_api_key
```
    Replace `your_gemini_api_key` with your actual API key.

### Frontend Installation

1.  Navigate to the `ai-tutor-frontend` directory:
    
```bash
cd ai-tutor-frontend
```
2.  Install the frontend dependencies:
    
```bash
npm install
```
    or
    
```bash
yarn install
```
3.  Configure the backend API endpoint. You might need to set an environment variable in a `.env.local` file in the `ai-tutor-frontend` directory if your backend is running on a different address or port than the default:
    
```
env
    NEXT_PUBLIC_BACKEND_URL=http://localhost:5000 # Or the URL of your deployed backend
```

## Usage

### Running the Backend

1.  Navigate to the `Backend` directory.
2.  Run the main backend script:
    
```bash
python main.py
```
    (Note: The actual command might vary depending on your backend framework, e.g., `flask run` or `uvicorn main:app --reload`)

### Running the Frontend

1.  Navigate to the `ai-tutor-frontend` directory.
2.  Start the Next.js development server:
    
```bash
npm run dev
```
    or
    
```bash
yarn dev
```
3.  Open your web browser and go to `http://localhost:3000` (or the address indicated by the development server).

## File Structure

```
.
├── .idx/
├── .vscode/
├── Backend/
│   ├── __pycache__/
│   ├── agents/
│   │   ├── math_agent.py
│   │   ├── other_agent.py
│   │   ├── physics_agent.py
│   │   ├── tempCodeRunnerFile.py
│   │   └── tutor_agent.py
│   ├── tools/
│   │   ├── __pycache__/
│   │   ├── calculator.py
│   │   └── gemini_api.py
│   ├── main.py
│   └── requirements.txt (Generated)
└── ai-tutor-frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── ChatBox.jsx
    │   │   ├── Layout.jsx
    │   │   ├── Message.jsx
    │   │   └── ResponseDisplay.jsx
    │   ├── pages/
    │   │   ├── _app.js
    │   │   ├── _document.js
    │   │   ├── api/
    │   │   │   └── proxy.js
    │   │   └── index.js
    │   ├── styles/
    │   │   └── globals.css
    │   └── utils/
    │       └── api.js
    ├── README.md
    ├── jsconfig.json
    ├── next.config.js
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    └── tailwind.config.js
```

## API Endpoints

The backend exposes API endpoints for the frontend to interact with the AI tutor. The primary endpoint is likely to receive user queries and return the AI tutor's response. Specific endpoints will be detailed in the backend code. The frontend uses a proxy endpoint (`/api/proxy`) to communicate with the backend.

## Deployment

This project can be deployed on platforms like Vercel (for the frontend) and Railway (for the backend) or similar services. Ensure you configure the necessary environment variables for your deployment environment, especially the `GEMINI_API_KEY` for the backend and the backend URL for the frontend.

## Contributing

Contributions are welcome! Please follow standard open-source contribution practices, including creating pull requests for any changes.

## License

[Specify your project's license here, e.g., MIT License]
