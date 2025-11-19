# group6 — Final Project (Track A)

This repository contains the frontend of **group6** for the CAU FinTech Final Project.  
Our team selected **Track A (Fullstack)**, which requires:

- A deployed **Next.js frontend** on Vercel  
- A deployed **backend server** on Railway  
- A full **CI/CD pipeline** (GitHub → Vercel / Railway)

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
- Live deployment on Vercel  
- Live backend deployment on Railway  
- Continuous deployment through GitHub  

---

## 🔹 Deployment Links

### ✅ Frontend (Vercel)  
https://fintech-project-one.vercel.app

### ✅ Backend (Railway)  
https://fintech-project-production.up.railway.app  

---

## 🔹 Tech Stack
- Next.js 16  
- React  
- TypeScript  
- Tailwind CSS  
- Vercel (Frontend hosting)  
- Railway (Backend hosting)  
- GitHub Actions / CI/CD  

---

## 🔹 Project Structure

```
/
├── app/                 # Next.js app directory
├── public/              # Static assets
├── backend/             # Railway backend project
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

---

## 🔹 How to Run Locally

### **Frontend**
```
cd frontend   (si el frontend está en carpeta raíz, omitir este paso)
npm install
npm run dev
```
Visit:  
http://localhost:3000

### **Backend**
```
cd backend
npm install
npm start
```
Visit:  
http://localhost:3001

---

## 🔹 Notes
This repository automatically deploys:

**Frontend:** GitHub → Vercel  
**Backend:** GitHub → Railway  

Both deployments update automatically on each push to the **main** branch.

---

