# VentureX - How to Run

## ✅ Current Status
- **Backend**: Running on http://localhost:5000
- **Frontend**: Running on http://localhost:3000
- **Database**: MongoDB Atlas connected successfully

## Quick Start

### Terminal 1: Backend Server
```bash
cd backend
npm run dev
```

You should see:
```
Server running on port 5000
MongoDB Connected: ac-jon35jw-shard-00-00.jmamvni.mongodb.net
```

### Terminal 2: Frontend Server
```bash
cd frontend
npm run dev
```

You should see:
```
▲ Next.js 16.1.6 (Turbopack)
- Local: http://localhost:3000
✓ Ready in ~2s
```

## Access the Application

1. **Frontend**: Open http://localhost:3000
2. **Backend API**: http://localhost:5000

## First Steps

### 1. Create an Account
- Go to http://localhost:3000
- You'll be redirected to `/login`
- Click "Sign up" 
- Fill in:
  - Name: Your name
  - Email: your@email.com
  - Password: minimum 6 characters
  - Role: Select "Founder" (to access all features)

### 2. Create Your Startup Profile
- After signup, go to Dashboard
- Click "Startup Profile" in sidebar
- Fill in your startup details

### 3. Explore Features
- **Dashboard**: View metrics and recent activity
- **Tasks & Milestones**: Create and manage tasks
- **Feedback**: Collect and view feedback
- **Analytics**: View insights and trends (Founder only)
- **Pitch Generator**: Generate investor pitch (Founder only)

## API Endpoints Available

All endpoints are available at `http://localhost:5000/api/`

### Authentication
- POST `/api/auth/signup` - Create account
- POST `/api/auth/login` - Login
- GET `/api/auth/me` - Get current user

### Startup
- POST `/api/startup/create` - Create startup profile
- GET `/api/startup/profile` - Get startup details
- PUT `/api/startup/update` - Update profile
- POST `/api/startup/add-member` - Add team member
- DELETE `/api/startup/remove-member/:userId` - Remove member

### Tasks & Milestones
- POST `/api/tasks/milestone` - Create milestone
- GET `/api/tasks/milestones` - Get all milestones
- PUT `/api/tasks/milestone/:id` - Update milestone
- POST `/api/tasks/task` - Create task
- GET `/api/tasks/tasks` - Get all tasks
- PUT `/api/tasks/task/:id` - Update task

### Feedback
- POST `/api/feedback/submit` - Submit feedback
- GET `/api/feedback/all` - Get all feedback
- GET `/api/feedback/stats` - Get statistics

### Analytics (Founder only)
- GET `/api/analytics/dashboard` - Dashboard metrics
- GET `/api/analytics/tasks-trend` - Task trends
- GET `/api/analytics/feedback-trend` - Feedback trends
- GET `/api/analytics/insights` - AI insights

### Pitch Generator (Founder only)
- GET `/api/pitch/generate` - Generate pitch outline

## Testing with Postman/Thunder Client

1. **Signup/Login** to get a token
2. **Add token** to headers: `Authorization: Bearer YOUR_TOKEN`
3. **Test endpoints** as needed

## Troubleshooting

### Backend won't start
- Check if MongoDB URI is set in `backend/.env`
- Make sure port 5000 is available
- Run `npm install` in backend folder

### Frontend won't start
- Make sure port 3000 is available
- Run `npm install` in frontend folder
- Check `.env.local` has `NEXT_PUBLIC_API_URL=http://localhost:5000`

### "Cannot connect to backend"
- Ensure backend is running on port 5000
- Check browser console for CORS errors
- Verify API_URL in frontend/.env.local

## Project Structure

```
Buildlytics/
├── backend/           # Express.js API server
│   ├── config/       # Database & env config
│   ├── controllers/  # Business logic
│   ├── middleware/   # Auth & validation
│   ├── models/       # MongoDB schemas
│   ├── routes/       # API routes
│   └── server.js     # Entry point
├── frontend/         # Next.js application
│   ├── app/          # Pages & layouts
│   ├── components/   # Reusable components
│   ├── contexts/     # React contexts
│   ├── lib/api/      # API client
│   └── types/        # TypeScript types
└── plan.txt          # Implementation plan
```

## Next Steps

### Remaining Frontend Pages to Build:
1. Tasks management page (kanban board)
2. Feedback submission page
3. Analytics page with charts
4. Pitch generator display page
5. Startup profile form page

These are needed for full functionality but the core infrastructure is complete!
