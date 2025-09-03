# BrokaZero

BrokaZero is a full-stack project currently in **active development** 🚧.  
It consists of a **FastAPI backend** and a **React (Next.js) frontend**, with plans to integrate Docker for easier deployment.

---

## 📂 Project Structure

BrokaZero/
│
├── brokazero_backend/ # FastAPI backend (Python)
├── brokazero_frontend/ # React frontend (Next.js / TypeScript)
├── .gitignore # Ignoring node_modules, venv, build files etc.
└── README.md # Project documentation
---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/AVP2011/BrokaZero.git
cd BrokaZero
2️⃣ Backend setup (FastAPI)
bash
Copy code
cd brokazero_backend
# Create & activate virtual environment (Windows example)
python -m venv .venv
.venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the server
uvicorn main:app --reload
3️⃣ Frontend setup (React/Next.js)
bash
Copy code
cd brokazero_frontend
npm install
npm run dev
Frontend → http://localhost:3000

Backend → http://127.0.0.1:8000

🛠️ Tech Stack
Backend: FastAPI (Python)

Frontend: React (Next.js + TypeScript)

Deployment: Docker (planned)

📌 Status
⚠️ This project is in development stage. Features, APIs, and UI may change frequently.
