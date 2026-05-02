# Converso 🧠✨  

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![AI](https://img.shields.io/badge/AI-VAPI%20%2B%20OpenAI-green)
![Auth](https://img.shields.io/badge/Auth-Clerk-purple)
![Database](https://img.shields.io/badge/Database-Supabase-3ECF8E)
![Monitoring](https://img.shields.io/badge/Monitoring-Sentry-red)
![Deployment](https://img.shields.io/badge/Deployed-Vercel-blue)

---

🚀 Built a real-time AI teaching platform where users learn through **interactive AI companions (voice + text)**  
🚀 Combines conversational AI, real-time streaming, and personalized learning journeys  

---

## 🔥 Key Features

- 🏠 Homepage with **Popular Companions & Recent Sessions**  
- 📚 Companion Library with **search & filters**  
- ➕ Create custom companions (topic, style, personality)  
- 🎧 Real-time AI sessions with **voice interaction (VAPI)**  
- 📊 My Journey dashboard (stats, history, progress)  
- 🔐 Secure authentication using Clerk  
- 💳 Subscription system (future feature)  
- 🛠 Error monitoring with Sentry  

---

## 🛠 Tech Stack

**Frontend**
- Next.js 16  
- React 19  
- Tailwind CSS  
- Radix UI  

**Backend / Database**
- Supabase (Auth + Database)  

**Authentication**
- Clerk  

**AI / Voice**
- VAPI AI  
- OpenAI  

**Validation**
- react-hook-form  
- zod  

**Monitoring**
- Sentry  

**Deployment**
- Vercel  

---

## 🏗 Architecture


Client (Next.js + React)
↓
Clerk Authentication
↓
Supabase (Database + Auth)
↓
VAPI AI → OpenAI
↓
Sentry Monitoring


---

## 🌐 Live Demo  

<p align="center">
  <a href="https://full-stack-m551fscdg-pranay-kumar-jhas-projects.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Launch%20App-Live%20Demo-blue?style=for-the-badge" />
  </a>
</p>

---

💡 **Test Flow**

- Sign in using Clerk  
- Explore companions on the homepage  
- Create your own AI companion  
- Start a real-time voice session  
- Track progress in **My Journey** dashboard  

---

## 📸 Preview

### 🏠 Homepage
<img width="1880" height="1206" alt="Homepage" src="https://github.com/user-attachments/assets/b4bf7be8-3d18-4548-a2e0-86c5abbe07e4" />

---

### 📚 Companion Library
<img width="1901" height="907" alt="Library" src="https://github.com/user-attachments/assets/f718d919-7f3b-43c2-a231-82167427127f" />

---

### 📊 My Journey Dashboard
<img width="1883" height="1381" alt="Dashboard" src="https://github.com/user-attachments/assets/67072d9b-be2e-421a-811f-01fb044551a6" />

---

### 🎧 Companion Session
<img width="1882" height="965" alt="Session" src="https://github.com/user-attachments/assets/1141aa17-a670-4d3e-8821-834031763441" />

---

## 🧠 How It Works

- User signs in via Clerk  
- Creates or selects an AI companion  
- Starts a real-time session (voice/text)  
- VAPI streams responses powered by OpenAI  
- Session data stored in Supabase  
- Progress tracked in dashboard  

---

## ⚡ Challenges Faced

- Real-time AI streaming + UI synchronization  
- Managing voice interactions via VAPI  
- Handling auth + DB consistency (Clerk + Supabase)  
- Optimizing UI for smooth conversational experience  

---

## 🚀 Future Improvements

- 💳 Stripe subscription system  
- 🧠 Persistent AI memory  
- 🌍 Multi-language support  
- 🎮 Gamification (XP, streaks)  
- 📱 Mobile optimization  

---

## ⚙️ How to Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/converso.git
cd converso
2️⃣ Install Dependencies
npm install
3️⃣ Setup Environment Variables

Create a .env.local file in the root directory:

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_key

# VAPI AI
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_token

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret

# Sentry (optional)
SENTRY_DSN=your_sentry_dsn
4️⃣ Configure Services
Clerk
Create an app at https://clerk.com
Enable authentication providers (Google, Email, etc.)
Add your local URL: http://localhost:3000
Supabase
Create a project at https://supabase.com
Set up required tables (users, sessions, companions)
VAPI AI
Generate a web token
Configure assistant + OpenAI provider
5️⃣ Run Development Server
npm run dev

Open in browser:

http://localhost:3000
6️⃣ Build for Production
npm run build
npm start
