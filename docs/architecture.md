# Capybox – Architecture & Technical Design

## 🧱 Overview

Capybox is a real-time multiplayer platform built with a web-first architecture, using a monorepo approach and leveraging Supabase for backend services.

---

## 🏗️ Architecture Style

- Monorepo (Turborepo)
- Client-server architecture
- Real-time event-driven system
- Backend-as-a-Service (Supabase)

---

## 📦 Monorepo Structure

apps/
  tv/
  mobile/
  web/

packages/
  ui/
  game-engine/
  hooks/
  utils/
  types/
  services/

infra/
  supabase/

---

## 🧪 Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- TailwindCSS
- Shadcn UI
- PWA

### Backend
- Supabase (Postgres, Realtime, Auth)

---

## 🔄 Real-Time Communication Flow

1. Host creates session
2. QR code generated
3. Players join
4. Subscribe to realtime channel
5. Events broadcasted

---

## 🧩 Core Concepts

### Session
- session_id
- players
- game_state

### Player
- temporary identity

### Host
- controls game

---

## 🗄️ Database Design

sessions
players
events

---

## 🔐 Authentication

- QR-based session auth
- optional accounts later

---

## 📡 Realtime Strategy

- session:{session_id} channels

---

## ⚙️ Game Engine

- init
- start
- update
- end

---

## 📱 Device Roles

TV = host  
Mobile = controller  

---

## 🚀 Deployment

- Vercel (frontend)
- Supabase (backend)

---

## 📈 Scalability

- Supabase handles scaling
- future: edge functions

---

## ⚠️ Risks

- latency
- sync issues
- TV compatibility

---

## ✅ Summary

Simple, scalable, social gaming platform.
