<div align="center">

# 📚 BiblioTech — Smart Library Frontend

**SPA: smart catalog, voice AI assistant, room bookings and admin panels. React 19 + Vite 6 + MUI 7 + Router 7.**

[![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)](https://vitejs.dev/)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://bibliotechjf.vercel.app)

**[🚀 Live Demo](https://bibliotechjf.vercel.app) · [⚡ Backend API](https://repositorio-backend-bibliotecainteligente.onrender.com/api/health) · [📦 Repo](https://github.com/FelipeDiazAimar/repositoriofrontendbibliotech) · [🇪🇸 Español](README.md)**

</div>

## What is it?

Modern SPA for smart library management: advanced catalog (category/author/publisher filters), voice-input AI assistant, booking system with user invites, user panel (loans/history/settings), full admin (books/users/bookings), dark/light mode, responsive with fluid animations and realtime toasts.

## Demo mode (no backend needed)

`VITE_DEMO_MODE=true` (default even without `.env`): simulated session + `fetchConFallback` (failed fetches return local fallback instead of breaking). Protected routes (`/panel`, `/turnos`, `/admin`, `/admin-turnos`) render without login. Credentials: `demo@biblioteca.local` / `demo1234` (`src/lib/demo.js`). Real mode: `VITE_DEMO_MODE=false` + `VITE_API_URL=http://localhost:3000`.

## Quick Start

```bash
git clone https://github.com/FelipeDiazAimar/repositoriofrontendbibliotech.git
cd repositoriofrontendbibliotech/Biblioteca-Inteligente-Frontend
npm install
npm run dev
# 👉 http://localhost:5173
```

Scripts: `dev` · `build` (`vite build`, also `vercel-build`) · `preview`/`start` · `lint`. Stack: React `19.1`, Vite `6.3`, Router `7.6`, MUI `7.1` + Emotion, EmailJS `4.4` (client-side mail). Structure: `src/components` (AsistenteIA, Turnos, AdminTabs, LibroCard…), `src/pages` (Catalogo, BookDetail, AdminPanel…), `.env.example`. Deploy on Vercel with this folder as root. Backend: https://repositorio-backend-bibliotecainteligente.onrender.com.

## Author

**Felipe Diaz Aimar** — https://www.linkedin.com/in/felipe-aimar/ · felipediazaimar@gmail.com · https://github.com/FelipeDiazAimar · Collab: [@JereMicheloud](https://github.com/JereMicheloud) · MIT.
