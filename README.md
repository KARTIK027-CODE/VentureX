# VentureX - The Operating System for Startups 🚀

VentureX is a comprehensive platform designed to streamline startup management. From tracking financial burn rates to managing team tasks and fundraising, VentureX provides a unified workspace for founders and their teams.

## 🏗️ Project Structure

This repository is organized into two main parts:

-   **`frontend/`**: The Next.js web application (React, Tailwind CSS, Framer Motion).
-   **`backend/`**: The Express.js API server (Node.js, MongoDB).

## ✨ Key Features

-   **Unified Dashboard**: Manage Tech, Finance, Marketing, and HR in one place.
-   **Role-Based Access**: Granular permissions for Founders and Team Members.
-   **Task Management**: Kanban-style task tracking with departmental filters.
-   **Startup Profile**: Manage your company identity, vision, and team.
-   **Analytics**: Real-time insights into team performance and milestones.
-   **Premium UI**: Glassmorphism design with smooth animations and dark mode aesthetic.

## 🛠️ Tech Stack

### Frontend
-   **Framework**: Next.js 14 (App Router)
-   **Styling**: Tailwind CSS
-   **Animations**: Framer Motion
-   **Icons**: Lucide React
-   **State Management**: React Context (Auth)

### Backend
-   **Runtime**: Node.js
-   **Framework**: Express.js
-   **Database**: MongoDB (Mongoose)
-   **Authentication**: JWT (JSON Web Tokens)

## 🚀 Getting Started

### Prerequisites
-   Node.js (v18+)
-   npm or yarn
-   MongoDB instance (local or Atlas)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/KARTIK027-CODE/TechPreneur
    cd TechPreneur
    ```

2.  **Setup Backend:**
    ```bash
    cd backend
    npm install
    # Create a .env file based on .env.example
    # Update MONGODB_URI and JWT_SECRET
    npm run dev
    ```

3.  **Setup Frontend:**
    ```bash
    cd ../frontend
    npm install
    npm run dev
    ```

4.  **Access the App:**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
