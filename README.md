# React Architect: Mastering Advanced Structures in Next.js

A practical Next.js project focusing on multi-page routing, reusable components, modals, and data fetching with TypeScript and Tailwind CSS.


## 📛 Badges

![Next.js](https://img.shields.io/badge/Next.js-13+-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0+-blue)
![ALX Project](https://img.shields.io/badge/ALX_Project-0x01-success)
![License](https://img.shields.io/badge/license-MIT-green)


## 🎯 Learning Objectives

By completing this project, you will be able to:

- Set up a Next.js application with TypeScript, Tailwind CSS, and ESLint.
- Implement multi-page navigation using file-based routing.
- Create and use reusable components (Header, Footer, PostCard, UserCard, Button).
- Handle API data fetching with `getStaticProps`.
- Dynamically add new data with modals (PostModal and UserModal).
- Manage component state using React hooks.


## 📁 Project Structure

```

alx-project-0x01/
│
├── components/
│   ├── common/
│   │   ├── Button.tsx           # Reusable button component
│   │   ├── PostCard.tsx         # Displays individual post content
│   │   ├── PostModal.tsx        # Modal form for adding new posts
│   │   ├── UserCard.tsx         # Displays individual user information
│   │   └── UserModal.tsx        # Modal form for adding new users
│   │
│   └── layout/
│       ├── Footer.tsx           # Simple page footer component
│       └── Header.tsx           # Navigation header with links
│
├── interfaces/
│   └── index.ts                 # TypeScript interfaces for posts and users
│
├── pages/
│   ├── posts/
│   │   └── index.tsx            # Posts page with data fetching and add post modal
│   ├── users/
│   │   └── index.tsx            # Users page with data fetching and add user modal
│   └── index.tsx                # Home page with header and welcome message
│
├── public/
│   └── assets/
│       └── images/              # Directory for static images (empty by default)
│
└── styles/
└── globals.css              # Tailwind CSS directives

````


## 🚀 Setup Instructions

### 1. Clone the Repository:

```bash
git clone https://github.com/AnalystYuchels/alx-project-0x01-setup.git
cd alx-project-0x01
````

### 2. Install Dependencies:

```bash
npm install
```

### 3. Start the Development Server:

```bash
npm run dev -- -p 3000
```

### 4. View the Application:

Visit in your browser:

```
http://localhost:3000
```


## 🌐 Pages Overview

* `/` — Welcome page
* `/posts` — Displays posts from API with option to add new posts via a modal
* `/users` — Displays users from API with option to add new users via a modal


## ✅ Features Summary

| Feature               | Description                                     |
| --------------------- | ----------------------------------------------- |
| ✅ Next.js             | App routing and data fetching                   |
| ✅ TypeScript          | Static typing and interface management          |
| ✅ Tailwind CSS        | Fast and responsive styling                     |
| ✅ Dynamic Modals      | Add Post and Add User functionality with modals |
| ✅ Reusable Components | Clean and modular component structure           |


## ☁️ Deployment Instructions

To deploy your project using [Vercel](https://vercel.com/):

1. Push your project to GitHub.
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import your GitHub repository.
4. Choose `Next.js` as the framework (it will auto-detect).
5. Leave all default settings and click **Deploy**.
6. After deployment, Vercel will provide you with a live URL.


## 📜 License

This project is licensed under the MIT License.

