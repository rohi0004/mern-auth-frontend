
# MERN Authentication Frontend

**Backend** [Live Demo](https://mern-auth-backend-9nx9.onrender.com)

**Frontend**[Live Demo](https://mern-auth-frontend-5h4z.vercel.app/)

Welcome to the MERN Authentication system! This project implements a secure user authentication system using **JSON Web Tokens (JWT)**. The frontend leverages **React Context** for state management, **Shadcn** components for the UI, and **React Router v6** for navigation.

## Overview

This frontend application provides a user interface for authentication within the MERN stack. Key features include user registration, login, password reset, and change password functionalities.

## Features

### 1. **User Registration**
   - **Two-step Verification**: Users can register using their username or email. A One-Time Password (OTP) is sent for verification.
   
### 2. **User Login**
   - Users can log in with either their **username** or **email**.
   - After a successful login, a **JWT (JSON Web Token)** is returned for authentication.

### 3. **Password Reset**
   - Forgotten passwords can be reset using a password recovery link sent to the user's email.

### 4. **Change Password**
   - Users who are logged in can change their password from within the application.

### 5. **React Context for State Management**
   - **React Context** is used to manage global authentication state (e.g., storing JWT, user details).

### 6. **Shadcn UI Components**
   - The application uses **Shadcn** components for a clean and modern user interface.

### 7. **React Router v6**
   - **React Router v6** is used for routing. The app has protected routes that are accessible only to authenticated users.

## Prerequisites

- **Node.js** (>=14.x.x)
- **npm** (or **yarn**)
- A **MERN** backend running (local or remote) for authentication API.

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd frontend
```

### 2. Install Dependencies

Make sure **Node.js** is installed, then install the necessary packages:

```bash
npm install
```

### 3. Run the Development Server

To start the development server:

```bash
 npm run dev
```

This will run the app on `http://localhost:3000`.

## File Structure

```plaintext
frontend/
│
├── src/
│   ├── assets/                   
│   ├── components/              
│   ├── context/                  
│   ├── pages/                    )
│   ├── routes/                   
│   ├── services/                 
│   ├── App.js                   
│   └── index.js                  
│
├── public/                       
├── package.json                  
├── .env                           
└── README.md                     
```

## Environment Configuration

Make sure to set up the `.env` file in the root of your project with the backend URL:

```bash
REACT_APP_BACKEND_URL=http://localhost:5000/api
```

## API Endpoints

This frontend interacts with the backend API for various authentication-related functionalities. Here are the key endpoints:

- **POST /api/register** - Registers a new user with OTP verification.
- **POST /api/login** - Authenticates a user and returns a JWT.
- **POST /api/forgot-password** - Sends a password reset link to the user's email.
- **POST /api/reset-password** - Resets the password.
- **PUT /api/change-password** - Allows logged-in users to change their password.

## Testing the Application

1. **User Registration**: Test by registering a new user with OTP verification.
2. **User Login**: Test the login functionality using either username or email.
3. **Password Reset**: Test the "Forgot Password" functionality.
4. **Password Change**: Test changing the password while logged in.

## Tech Stack
1. **Frontend**: React, React Router v6, React Context API, Shadcn components.
2. **Styling**: Tailwind CSS.
3. **Backend**: Node.js, Express, MongoDB, JWT (for authentication).
4. **Deployment**: Vercel.

##  Features

- JWT token refresh mechanism for extended sessions.
- Multi-role support (Admin, User, etc.).
- JWT-based secure API requests for additional features like profile management.


