# 🎨 PromptCraft-AI

![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![MERN Stack](https://img.shields.io/badge/Stack-React%20%7C%20Node.js%20%7C%20Express-blueviolet?style=for-the-badge&logo=react)

An AI-powered web application that transforms textual prompts into high-quality generated images using custom prompt engineering and AI generation APIs.

---

## 🔗 Live Demo & Links

- **Live Application:** [Deploy on Vercel / Render](https://github.com/Anchal-Gola/PromptCraft-AI)
- **GitHub Repository:** [https://github.com/Anchal-Gola/PromptCraft-AI](https://github.com/Anchal-Gola/PromptCraft-AI)

---

## ✨ Key Features

- **Text-to-Image Generation:** Convert descriptive natural language prompts into visual images instantly.
- **AI Model Integration:** Integrates API endpoints (Pollinations.ai / Hugging Face Inference API) for fast image rendering.
- **Custom Prompt Enhancer:** Assists users in refining input prompts to achieve optimal visual output quality.
- **Download & Save:** Easily save generated images directly to local storage.
- **Modern Responsive UI:** Clean dashboard interface built with React and Vite for fast performance.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React.js (Vite)
- **Styling:** CSS3
- **HTTP Client:** Axios / Fetch API

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **API Integration:** Pollinations AI API / Hugging Face API

---

## 📐 System Architecture
┌──────────────────┐        HTTP Requests        ┌──────────────────┐
│   React Client   │ ──────────────────────────> │  Express Server  │
│  (Vite Frontend) │ <────────────────────────── │   (Node.js API)  │
└──────────────────┘       Generated Image       └────────┬─────────┘
│
│ External API
▼
┌──────────────────┐
│  Pollinations /  │
│ Hugging Face API │
└──────────────────┘
---

## ⚙️ Environment Variables

Create a `.env` file in the `backend` directory and add the following keys:

```env
PORT=5000
CLIENT_URL=http://localhost:5173

🚀 Local Setup & Development
Prerequisites
Node.js installed (v18+)

Step 1: Clone the Repository
git clone [https://github.com/Anchal-Gola/PromptCraft-AI.git](https://github.com/Anchal-Gola/PromptCraft-AI.git)
cd PromptCraft-AI

Step 2: Backend Setup
cd backend
npm install
npm start

Step 3: Frontend Setup
Open a new terminal window in the root directory:
npm install
npm run dev