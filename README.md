📦 SPA with Vanilla JavaScript & Shadow DOM

A fully-functional Single Page Application built using native browser APIs — based on the Frontend Masters “Web Components & Web Apps” course.

<p align="left"> <img src="https://img.shields.io/badge/JavaScript-ESModules-yellow?style=for-the-badge" /> <img src="https://img.shields.io/badge/Web%20Components-Shadow%20DOM-blue?style=for-the-badge" /> <img src="https://img.shields.io/badge/SPA-VanillaJS-green?style=for-the-badge" /> <img src="https://img.shields.io/badge/Frontend%20Masters-Course-red?style=for-the-badge" /> </p>
📖 Overview

This project is a Single Page Application (SPA) built entirely with:

Vanilla JavaScript

Custom Elements (Web Components)

Shadow DOM encapsulation

Native ES module imports

A simple custom router

Global state management (app.store)

🧠 No frameworks. No bundlers. No React, Vue, Angular — just the web platform itself.

This project was created as part of the Frontend Masters course:
➡️ “Build Web Apps with Vanilla JavaScript” (Web Components + SPA)
It is inspired by the step-by-step approach taught in the course and adapted into a full working application.

🚀 Features
✨ SPA Architecture

Client-side routing using History API

Dynamically rendered pages via Web Components

Automatic updates using event-based reactivity (appcartchange)

📦 Encapsulated UI with Shadow DOM

Every component has its own:

HTML structure

CSS styles (scoped)

Logic

No CSS leakage between components

🛒 Cart System

Add to Cart / Remove from Cart

Total price calculation

Persistent UI updates via custom events

🧾 Order Form

Two-way data binding (Proxy based)

Validation (optional)

Submit handler placeholder for backend integration

📱 Optional PWA Ready

Includes serviceworker.js

Includes web manifest

Works offline when fully configured

📁 Project Structure
/
├── index.html # Entry point of the SPA
├── app.js # Main app controller, router, and state management
│
├── components/ # Web Components (UI + Shadow DOM)
│ ├── MenuPage.js  
│ ├── ProductDetails.js
│ ├── OrderPage.js
│ ├── CartItem.js
│ └── ... # Additional components
│
├── services/ # Business logic and utilities
│ ├── Menu.js # Product data fetching
│ ├── Order.js # Cart actions (add/remove)
│ └── ... # More service modules
│
├── data/ # Static or mock data
│ └── menu.json
│
├── images/ # Image assets
│
├── css/ # (Optional) Component-specific or global CSS
│ └── ... # Shadow DOM styles stored per component
│
├── serviceworker.js # Optional PWA features
├── app.webmanifest # Web App Manifest (PWA metadata)
└── README.md # Project documentation

🛠 Installation & Setup
▶️ Run locally

You can run the SPA in two ways:

Option 1 — Open directly

Because everything uses ES modules, it can run directly:

Double-click index.html
✔ Works
✘ Some browsers may block module imports over file://

Option 2 — Recommended: Local dev server

Using Node:

npx serve .

Using Python:

python -m http.server

Then open:

http://localhost:3000

🧰 How It Works
🧩 Custom Router

A tiny router listens to:

Anchor tag clicks (a.navlink)

Browser back/forward (popstate)

It then changes the page content without reloading.

🛍 Cart State

app.store.cart holds the cart globally.
Changing it triggers the "appcartchange" event → UI updates instantly.

🧠 Two-Way Form Binding

The OrderPage form uses a JavaScript Proxy to sync:

form inputs ⇄ user object

This keeps form UI and state always in sync.

🎯 Goals of This Project

This project demonstrates:

How to build a real SPA without frameworks

How Web Components can replace React/Vue for many apps

Clean architecture with native ES modules

Shadow DOM for component encapsulation

Handling global state in a simple app

Custom routing & event-driven rendering

📸 Screenshots
![Menu Page](./images/menu.jpg)
![Cart Page](./images/cart.jpg)
