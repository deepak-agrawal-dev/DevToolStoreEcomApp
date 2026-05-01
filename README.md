# DevToolStore

A modern, responsive e-commerce storefront built with **Angular 21**, focused on premium UI, performance, and scalable frontend architecture.

🔗 Live Demo: https://your-live-url.vercel.app  
🔗 Backend API (JSON Server): https://your-render-url.onrender.com  
🔗 Portfolio: https://your-portfolio-url.com
🔗 Email: agrawaldk1990@gmail.com
🔗 Mobile: +91-9130057478

---

## Demo Credentials

admin@devstore.com/Pass@123
user@devstore.com/Pass@123

## 📌 Project Overview

DevStore is a marketplace concept for selling developer-focused digital products such as:

- Angular Admin Templates
- UI Kits
- Dashboard Components
- Portfolio Templates
- SaaS Landing Pages
- Productivity Assets

This project was built to demonstrate production-grade frontend engineering skills using Angular.

---

## ✨ Features

### 🛍 Storefront

- Product Listing
- Search + Filtering
- Product Detail Page
- Trending / Featured / New Arrivals Sections
- Responsive Product Cards

### 🛒 Cart System

- Add to Cart
- Quantity Increase / Decrease
- Remove Item
- LocalStorage Persistence
- Checkout Dialog

### 🎨 UI / UX

- Light / Dark / System Theme
- Angular Material UI
- Fully Responsive Design
- Skeleton Loading States
- Toast Notifications
- Clean Micro-interactions

### 🔐 Authentication

- Mock Login System
- Role Based Menus
- Admin Dashboard UI
- Route Guards

### ⚡ Performance

- Lazy Loaded Routes
- Debounced Search
- Optimized Images
- Reusable Components

---

## 🛠 Tech Stack

### Frontend

- Angular 21
- TypeScript
- Signals
- RxJS
- SCSS
- Angular Material

### Backend (Mock API)

- JSON Server
- Render Deployment

### Hosting

- Vercel

---

## 📁 Folder Structure
src/
 ├── core/
 │   ├── services/
 │   ├── guards/
 │   └── models/
 ├── layouts/
 ├── shared/
 ├── features/
 │   ├── home/
 │   ├── products/
 │   ├── cart/
 │   ├── auth/
 │   └── admin/
 └── styles/

# Authentication

Demo auth uses mocked encoded credentials. Real systems use JWT + bcrypt.


## Development server [Run on Local Machine]

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Run Locally

npm install
ng serve

json-server --watch db.json --port 3000

## ⭐ If you liked this project, feel free to star the repo.