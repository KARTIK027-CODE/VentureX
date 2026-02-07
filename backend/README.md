# VentureX Backend

Express.js backend for the VentureX startup operations platform.

## Features

- ✅ JWT-based authentication
- ✅ Role-based access control (Founder/Team Member)
- ✅ Complete CRUD APIs for:
  - Startup profiles
  - Milestones & Tasks
  - Feedback collection
  - Analytics & insights
  - Investor pitch generation

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` and update the values:
```bash
cp .env.example .env
```

Update the following in `.env`:
- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: Your secret key for JWT tokens
- `PORT`: Server port (default: 5000)

### 3. Run the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Server will run on `http://localhost:5000`

## API Endpoints

### Authentication (`/api/auth`)
- `POST /signup` - Register new user
- `POST /login` - Login user
- `GET /me` - Get current user (Protected)

### Startup (`/api/startup`)
- `POST /create` - Create startup (Founder only)
- `GET /profile` - Get startup profile
- `PUT /update` - Update startup (Founder only)
- `POST /add-member` - Add team member (Founder only)
- `DELETE /remove-member/:userId` - Remove team member (Founder only)

### Tasks & Milestones (`/api/tasks`)
- `POST /milestone` - Create milestone (Founder only)
- `GET /milestones` - Get all milestones
- `PUT /milestone/:id` - Update milestone (Founder only)
- `DELETE /milestone/:id` - Delete milestone (Founder only)
- `POST /task` - Create task (Founder only)
- `GET /tasks` - Get all tasks (supports filters)
- `PUT /task/:id` - Update task
- `DELETE /task/:id` - Delete task (Founder only)

### Feedback (`/api/feedback`)
- `POST /submit` - Submit feedback
- `GET /all` - Get all feedback (Founder only)
- `GET /stats` - Get feedback statistics (Founder only)

### Analytics (`/api/analytics`)
- `GET /dashboard` - Get dashboard metrics (Founder only)
- `GET /tasks-trend` - Get task completion trend (Founder only)
- `GET /feedback-trend` - Get feedback trend (Founder only)
- `GET /insights` - Get AI insights (Founder only)

### Pitch (`/api/pitch`)
- `GET /generate` - Generate investor pitch outline (Founder only)

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Authentication**: JWT + bcryptjs
- **Validation**: express-validator
- **CORS**: Enabled for frontend integration

## Project Structure

```
backend/
├── config/
│   ├── db.js           # MongoDB connection
│   └── config.js       # Environment config
├── controllers/        # Business logic
├── middleware/         # Auth & role check
├── models/            # Mongoose schemas
├── routes/            # API routes
├── utils/             # Helper functions
├── server.js          # Entry point
├── .env              # Environment variables
└── package.json
```

## Database Models

1. **User**: Authentication and user profiles
2. **Startup**: Startup profile and team
3. **Milestone**: Project milestones
4. **Task**: Tasks within milestones
5. **Feedback**: Internal/external feedback

## Testing

Use Postman or Thunder Client to test the API endpoints. Health check endpoint:
```
GET http://localhost:5000/
```

## Notes

- All protected routes require `Authorization: Bearer <token>` header
- Role-based routes enforce access control (Founder vs Team Member)
- MongoDB connection uses retry logic for resilience
