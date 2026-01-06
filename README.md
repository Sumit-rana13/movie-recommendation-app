# 🎬 AI Movie Recommendation App

An AI-powered movie recommendation web application where users can enter their preferences and receive personalized movie suggestions.  
Built using **React (Vite + Tailwind CSS)** for the frontend and **Node.js + Express** for the backend, with OpenAI integration.

---

## 🚀 Live Demo

- **Frontend (Netlify):** https://movie-recommendation-ap.netlify.app/
- **Backend (Render):** https://movie-recommendation-app-pkvi.onrender.com 


## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- JavaScript
- Fetch API

### Backend
- Node.js
- Express.js
- OpenAI API
- SQLite (better-sqlite3)
- dotenv
- cors

### Deployment
- Frontend: **Netlify**
- Backend: **Render**

---



---

## 🧑‍💻 Instructions to Run the App Locally

Follow these steps to run the project on your local machine after downloading the ZIP file or cloning the GitHub repository.

---

### 1️⃣ Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or higher)  
  👉 https://nodejs.org  
- **npm** (comes with Node.js)
- **Git** (optional, for cloning)
- **Postman** (optional, for API testing)

Check installation:
```bash
node -v
npm -v

### Option A: Clone from GitHub
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2️⃣ Backend Setup (Node.js + Express)
Step 1: Go to backend folder
cd backend

Step 2: Install dependencies
npm install

Step 3: Create .env file inside backend/
PORT=5000
OPENAI_API_KEY=your_openai_api_key_here

Step 4: Start backend server
node index.js


✅ Backend will run at:

http://localhost:5000


3️⃣ Frontend Setup (React + Vite)
Step 1: Open a new terminal
Step 2: Go to frontend folder
cd frontend

Step 3: Install dependencies
npm install

Step 4: Start frontend server
npm run dev


✅ Frontend will run at:

http://localhost:5173

