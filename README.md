# 🧠 Converso — AI Learning Platform

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/OpenAI-AI-green?style=for-the-badge&logo=openai" />
  <img src="https://img.shields.io/badge/VAPI-Voice%20AI-purple?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Clerk-Auth-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel" />
</p>

---

<p align="center">
  🚀 Real-time AI teaching platform with <b>voice + text companions</b> <br/>
  🎯 Personalized learning through interactive AI sessions
</p>

---

## 🌐 Live Demo

<p align="center">
  <a href="https://full-stack-m551fscdg-pranay-kumar-jhas-projects.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Launch%20App-Live-blue?style=for-the-badge" />
  </a>
</p>

---

## ✨ Features

* 🏠 **Dynamic Homepage** — Popular companions & recent sessions
* 📚 **Companion Library** — Search, filter, explore
* ➕ **Custom AI Companions** — Define personality & teaching style
* 🎧 **Real-Time Voice Sessions** (VAPI)
* 📊 **Progress Dashboard** — Track learning journey
* 🔐 **Authentication** — Clerk
* 💳 **Subscriptions (Planned)**
* 🛠 **Monitoring** — Sentry

---

## 🛠 Tech Stack

### ⚡ Frontend

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind](https://img.shields.io/badge/TailwindCSS-UI-38B2AC?logo=tailwind-css)
![Radix](https://img.shields.io/badge/Radix-UI-black)

### 🔧 Backend & Services

![Supabase](https://img.shields.io/badge/Supabase-DB-3ECF8E?logo=supabase)
![Clerk](https://img.shields.io/badge/Clerk-Auth-orange)
![OpenAI](https://img.shields.io/badge/OpenAI-AI-green?logo=openai)
![VAPI](https://img.shields.io/badge/VAPI-Voice-purple)

### 📊 Monitoring & Deployment

![Sentry](https://img.shields.io/badge/Sentry-Monitoring-red?logo=sentry)
![Vercel](https://img.shields.io/badge/Vercel-Hosting-black?logo=vercel)

---

## 🏗 System Architecture

```text
Client (Next.js)
   ↓
Clerk Authentication
   ↓
Supabase (DB)
   ↓
VAPI (Voice AI)
   ↓
OpenAI (LLM)
   ↓
Sentry (Monitoring)
```

---

## 📸 Preview 

<p align="center">
  <img src="https://github.com/user-attachments/assets/b4bf7be8-3d18-4548-a2e0-86c5abbe07e4" width="45%" />
  <img src="https://github.com/user-attachments/assets/f718d919-7f3b-43c2-a231-82167427127f" width="45%" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/67072d9b-be2e-421a-811f-01fb044551a6" width="45%" />
  <img src="https://github.com/user-attachments/assets/1141aa17-a670-4d3e-8821-834031763441" width="45%" />
</p>

---

## 🧠 How It Works

1. User signs in via Clerk
2. Selects or creates an AI companion
3. Starts a real-time voice/text session
4. VAPI streams responses via OpenAI
5. Data stored in Supabase
6. Progress tracked in dashboard

---

## ⚡ Challenges Solved

* ⚡ Real-time AI streaming + UI sync
* 🎙 Voice interaction handling (VAPI)
* 🔐 Dual auth system (Clerk + Supabase)
* 🎨 Smooth conversational UI/UX

---

## 🚀 Future Scope

* 💳 Stripe subscriptions
* 🧠 Persistent AI memory
* 🌍 Multi-language support
* 🎮 Gamification (XP, streaks)
* 📱 Mobile-first optimization

---

## ⚙️ Local Setup

### 1. Clone

```bash
git clone https://github.com/your-username/converso.git
cd converso
```

### 2. Install

```bash
npm install
```

### 3. Environment Variables

Create `.env.local`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# VAPI
NEXT_PUBLIC_VAPI_WEB_TOKEN=

# Sentry (optional)
SENTRY_DSN=
```

### 4. Run

```bash
npm run dev
```

➡ http://localhost:3000

---

### 🏁 Production Build

```bash
npm run build
npm start
```

---

## 💡 Quick Test Flow

* Sign in
* Explore companions
* Create your own AI tutor
* Start voice session
* Track progress

---

## ⭐ Why This Project Stands Out

* Real-time AI + Voice (not just chat UI)
* Full-stack production-ready architecture
* Strong UX focus for learning systems
* Resume-worthy SaaS with scalability potential

---

<p align="center">
  Made with ⚡ + AI
</p>
