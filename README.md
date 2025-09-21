# HireSense AI 🤖✨

**HireSense AI** is a state-of-the-art, AI-powered candidate screening and evaluation system designed to revolutionize the recruitment process. This web application provides recruiters with intelligent tools to manage job descriptions, parse resumes, score candidates, and gain deep insights into their hiring pipeline, all powered by the Google Gemini API.

![HireSense AI Dashboard](https://storage.googleapis.com/aistudio-project-assets/misc/hiresense_demo.gif)

## 🔑 Core Features

-   **📄 Smart Job Requirement Management**: Paste a job description, and the AI instantly extracts key skills, experience levels, and certifications to build a competency matrix for the role.
-   **📊 AI-Powered Screening & Scoring**: Candidates are automatically scored and ranked against the job matrix, receiving a multi-dimensional score for skills, experience, and more.
-   **📇 Dynamic Candidate Pipeline**: View all candidates in a clean, filterable dashboard. Each candidate is presented on a card with their overall score and top skills.
-   **📝 Detailed Candidate Reports**: Click on any candidate to open a detailed modal view with an in-depth analysis, including skill breakdowns, strengths, potential gaps, and AI-driven personality insights from video screenings.
-   **💬 Conversational AI Assistant**: Interact with a Gemini-powered chatbot to ask natural language questions about your candidate pool, such as "Show me the top 3 candidates" or "Who has experience with Python and AWS?".
-   **📈 Advanced Analytics Dashboard**: Visualize your hiring funnel, from application to hire. Gain AI-powered predictions on hiring difficulty and view diversity & inclusion metrics for your screened candidates.
-   **🌓 Dark/Light Mode**: A sleek, modern interface with theme toggling for user comfort.

---

## 🛠️ Tech Stack

This project is built with a modern, performant, and scalable tech stack.

-   **Frontend**:
    -   [**React 18**](https://reactjs.org/): For building a dynamic and responsive user interface.
    -   [**TypeScript**](https://www.typescriptlang.org/): For robust, type-safe code.
    -   [**Tailwind CSS**](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
    -   [**Recharts**](https://recharts.org/): For creating beautiful and interactive charts in the Analytics dashboard.
-   **AI & Machine Learning**:
    -   [**Google Gemini API (@google/genai)**](https://ai.google.dev/): Powers the conversational AI Recruiter Assistant, providing intelligent, context-aware responses. The `gemini-2.5-flash` model is used for its speed and capability.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Node.js (v18 or later)
-   npm, yarn, or pnpm
-   A Google Gemini API Key. You can get one from [Google AI Studio](https://aistudio.google.com/).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/hiresense-ai.git
    cd hiresense-ai
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    This project requires a Google Gemini API key to power the AI assistant. Create a file named `.env` in the root of your project and add your API key:

    ```env
    # .env
    API_KEY=YOUR_GEMINI_API_KEY
    ```
    > **Note**: The application has a fallback mock service, so it will still run without an API key, but the chat assistant functionality will be limited.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application should now be running on `http://localhost:5173` (or another port if 5173 is busy).

---

## 📂 Project Structure

The project follows a standard React application structure, organizing files by feature and type.

```
/
├── public/
├── src/
│   ├── components/
│   │   ├── icons/
│   │   │   └── Icons.tsx        # SVG icons as React components
│   │   ├── Analytics.tsx        # Analytics dashboard view
│   │   ├── CandidateCard.tsx    # Card for displaying a single candidate
│   │   ├── CandidateDetailModal.tsx # Modal for detailed candidate view
│   │   ├── ChatAssistant.tsx    # Floating AI chat component
│   │   ├── Dashboard.tsx        # Main dashboard view
│   │   ├── Header.tsx           # Application header and navigation
│   │   └── JobDescriptionInput.tsx # Component for job description input
│   ├── services/
│   │   └── geminiService.ts     # Service for interacting with the Gemini API
│   ├── App.tsx                  # Main application component
│   ├── constants.ts             # Mock data for candidates and jobs
│   ├── index.css                # Global styles (if any)
│   ├── index.tsx                # React app entry point
│   └── types.ts                 # Shared TypeScript types
├── .env                         # Environment variables (API Key)
├── index.html                   # Main HTML file
├── package.json
└── readme.md                    # This file
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
