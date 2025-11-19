# group6 — Final Project (Track A)

This repository contains the **frontend** and **backend** of **group6** for the CAU FinTech Final Project.  
Our team selected **Track A (Fullstack)**, which requires:

- A deployed **Next.js frontend** on Vercel  
- A deployed **backend server** on Railway  
- A complete **CI/CD pipeline** (GitHub → Vercel / Railway)

---

## 🔹 Team Members
- 이도영  
- 김승규  
- 김주혁  
- 정사라  

---

## 🔹 Track Declaration
**Track A — Fullstack Application**

Requirements include:
- Live deployment on **Vercel**
- Live backend deployment on **Railway**
- Continuous deployment through **GitHub**

---

## 🔹 Deployment Links

### ✅ Frontend (Vercel)
https://fintech-project-one.vercel.app  

### ✅ Backend (Railway)
https://fintech-project-production.up.railway.app  

---

## 🔹 Tech Stack
- **Next.js 16**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Node.js + Express** (Backend)
- **Vercel** (Frontend hosting)
- **Railway** (Backend hosting)
- **GitHub Actions / CI/CD**

---

## 🔹 Project Structure
/
├── app/ # Next.js app directory
├── public/ # Static assets
├── backend/ # Railway backend project
│ ├── index.js
│ └── package.json
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md

yaml
Copy code

---

## 🔹 How to Run Locally

### Frontend
```bash
npm install
npm run dev
Visit:

arduino
Copy code
http://localhost:3000
Backend
bash
Copy code
cd backend
npm install
npm start
Visit:

arduino
Copy code
http://localhost:3001
🔹 Notes
This repository automatically deploys:

Frontend via GitHub → Vercel

Backend via GitHub → Railway

Both deployments update automatically on each main branch push.

yaml
Copy code

---
