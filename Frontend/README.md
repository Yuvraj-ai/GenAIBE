# AI Tutor Multi-Agent System

This project is an AI Tutor multi-agent system that allows users to ask questions across different subjects and receive responses from specialized agents. The frontend is built using Next.js and interacts with a FastAPI backend.

## Features

- Multi-agent system for tutoring in various subjects (Math, Physics, etc.)
- User-friendly chat interface for asking questions
- Real-time responses from specialized agents
- Responsive design using Tailwind CSS

## Project Structure

```
ai-tutor-frontend
├── public
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── ChatBox.jsx
│   │   ├── Message.jsx
│   │   └── Layout.jsx
│   ├── pages
│   │   ├── _app.js
│   │   ├── _document.js
│   │   ├── index.js
│   │   └── api
│   │       └── proxy.js
│   ├── styles
│   │   └── globals.css
│   └── utils
│       └── api.js
├── .env.local
├── .gitignore
├── jsconfig.json
├── next.config.js
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd ai-tutor-frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables (e.g., API keys, backend URLs).

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to access the application.

## Usage

- Use the chat interface to ask questions related to Math, Physics, and other subjects.
- The AI Tutor will route your questions to the appropriate specialized agent and provide detailed responses.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.