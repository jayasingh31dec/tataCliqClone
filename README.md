🛍️ TataCliq Clone
A full-stack TataCliq E-commerce Clone built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
This project replicates core TataCliq features, including user authentication, product listing, cart, order management, and a robust admin dashboard.



🔗 Live Demo
🎥 Project Walkthrough Video:
Click here to watch on Google Drive

(This video demonstrates the full user flow: signup/login, browsing products, cart operations, and checkout process.)




📘 About the Project
The TataCliq Clone is a feature-rich e-commerce web application inspired by TataCliq, designed for seamless user experience and modern development best practices.

Tech Stack: React, JavaScript, HTML, CSS, Node.js, Express.js, MongoDB, JWT, Stripe API

Architecture: Built using the MERN stack with a RESTful API backend and a responsive React frontend.

Authentication: JWT-based user authentication and authorization for secure signup/login.

Product Management: Admin dashboard for adding, updating, and managing products via protected APIs.

Cart & Orders: Add-to-cart functionality and secure order placement.

Payments: Stripe API integration for processing payments in real time.

Deployment: Supports Docker-based deployment, environment variable management, and ready for cloud hosting.




🛠️ Features
Responsive e-commerce interface with product browsing and search

Secure user authentication (JWT) and protected routes

Dynamic admin dashboard for product management

REST APIs for products, orders, users, and authentication

Optimized database queries for fast performance

Real-time secure payments with Stripe integration

Automated deployment scripts for Docker and CI/CD pipelines



📂 Folder Structure

tataCliqClone/
  ├── backend/       # Node.js, Express.js, MongoDB REST API
  ├── frontend/      # React.js single-page application
  ├── README.md
  ├── docker-compose.yml
  └── .gitignore




🚀 Getting Started
Clone the Repository
git clone https://github.com/jayasingh31dec/tataCliqClone.git
cd tataCliqClone



Install Dependencies
For both frontend and backend:
cd frontend
npm install
cd ../backend
npm install


Configure Environment Variables
In backend/.env:
MONGO_URL=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
PORT=5000

Start Development Servers
# Backend
cd backend
npm start

# Frontend
cd ../frontend
npm start
