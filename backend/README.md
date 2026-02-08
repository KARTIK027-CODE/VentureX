# VentureX Backend

> RESTful API backend for VentureX startup management platform with authentication, role-based access, and database management.

## 🚀 Tech Stack

### Core Framework
- **Node.js** - JavaScript runtime
- **Express.js 4.18.2** - Fast, minimalist web framework
- **MongoDB** - NoSQL database
- **Mongoose 8.0.3** - MongoDB object modeling

### Authentication & Security
- **JSON Web Token (JWT) 9.0.2** - Secure token-based authentication
- **bcryptjs 2.4.3** - Password hashing and encryption
- **CORS 2.8.5** - Cross-Origin Resource Sharing

### Environment & Configuration
- **dotenv 16.3.1** - Environment variable management

### Development
- **Nodemon 3.1.11** - Auto-restart on file changes

---

## 📦 Package Details & Purpose

| Package | Purpose | Use Case |
|---------|---------|----------|
| `express` | Web Framework | RESTful API routes, middleware, request handling |
| `mongoose` | ODM | MongoDB schema modeling, validation, queries |
| `jsonwebtoken` | Auth | Generate & verify JWT tokens for sessions |
| `bcryptjs` | Security | Hash passwords before storing in DB |
| `cors` | Security | Allow frontend to make API requests |
| `dotenv` | Config | Load environment variables from `.env` file |
| `nodemon` | Dev Tool | Auto-reload server on code changes |

---

## 🗄️ Database Schema

### User Model
```javascript
{
  email: String (unique, required),
  password: String (hashed, required),
  name: String (required),
  role: String (enum: ['founder', 'department_head', 'team_member']),
  department: String (optional),
  onboarded: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Task Model
```javascript
{
  title: String,
  description: String,
  status: String (enum: ['todo', 'in_progress', 'completed']),
  priority: String (enum: ['low', 'medium', 'high']),
  assignedTo: ObjectId (ref: 'User'),
  createdBy: ObjectId (ref: 'User'),
  department: String,
  dueDate: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### Finance Model
```javascript
{
  type: String (enum: ['revenue', 'expense', 'salary', 'funding']),
  amount: Number,
  category: String,
  description: String,
  date: Date,
  createdBy: ObjectId (ref: 'User'),
  department: String
}
```

### Team Model
```javascript
{
  userId: ObjectId (ref: 'User'),
  salary: Number,
  joinedDate: Date,
  performance: {
    tasksCompleted: Number,
    productivityScore: Number,
    activeStreak: Number
  },
  department: String
}
```

### Analytics Model
```javascript
{
  userId: ObjectId (ref: 'User'),
  department: String,
  metrics: {
    tasksCompleted: Number,
    revenue: Number,
    expenses: Number,
    productivity: Number
  },
  date: Date
}
```

---

## 🔐 Authentication Flow

### Registration (`POST /api/auth/signup`)
1. Validate email & password
2. Check if user exists
3. Hash password with bcrypt (10 rounds)
4. Create user in database
5. Generate JWT token
6. Return token + user data

### Login (`POST /api/auth/login`)
1. Validate credentials
2. Find user by email
3. Compare password with bcrypt
4. Generate JWT token (expires in 7 days)
5. Return token + user data

### Token Verification (Middleware)
1. Extract token from `Authorization: Bearer <token>`
2. Verify token with JWT secret
3. Attach user to request
4. Continue to route handler

---

## 🛣️ API Routes

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)
- `POST /api/auth/logout` - Logout user

### Tasks
- `GET /api/tasks` - Get all tasks (filtered by role)
- `POST /api/tasks` - Create new task
- `GET /api/tasks/:id` - Get task by ID
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `GET /api/tasks/stats` - Get task statistics

### Finance
- `GET /api/finance` - Get financial records (founder only)
- `POST /api/finance` - Add financial record
- `GET /api/finance/metrics` - Get financial KPIs
- `GET /api/finance/burn-rate` - Calculate burn rate

### Team
- `GET /api/team` - Get all team members
- `GET /api/team/:id` - Get team member details
- `PUT /api/team/:id/salary` - Update salary (founder only)
- `POST /api/team/:id/pay` - Process salary payment
- `GET /api/team/performance` - Get team performance metrics

### Analytics
- `GET /api/analytics/dashboard` - Dashboard metrics (role-based)
- `GET /api/analytics/department/:dept` - Department-specific analytics
- `GET /api/analytics/revenue` - Revenue trends
- `GET /api/analytics/tasks` - Task completion trends

---

## 🔒 Role-Based Access Control

### Founder
- ✅ Full access to all data
- ✅ Financial metrics and reports
- ✅ Manage team salaries
- ✅ Cross-department analytics
- ✅ Investor-facing data

### Department Head
- ✅ Department-only data
- ✅ Team member performance
- ✅ Department tasks and metrics
- ❌ Financial data (except dept budget)
- ❌ Other departments' data

### Team Member
- ✅ Personal tasks
- ✅ Personal performance metrics
- ✅ Department collaboration
- ❌ Financial data
- ❌ Team salaries
- ❌ Cross-department data

### Implementation
```javascript
// Middleware example
const requireRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    next();
  };
};

// Usage
router.get('/finance', requireRole(['founder']), getFinance);
```

---

## 🔐 Security Features

### Password Security
- **Hashing**: bcrypt with salt rounds = 10
- **No plain text storage**
- **Auto-hashing** on user creation

### JWT Tokens
- **Expiration**: 7 days
- **Secret**: Stored in environment variable
- **Payload**: User ID, email, role

### CORS Configuration
```javascript
{
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}
```

### Environment Variables
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/venturex
JWT_SECRET=your_super_secret_key
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
GEMINI_API_KEY=your_gemini_api_key
```

---

## 📊 Data Aggregation

### Dashboard Metrics
- Total revenue (current month)
- Total expenses (current month)
- Active tasks count
- Team productivity score
- Burn rate calculation
- Runway estimation

### Analytics Queries
```javascript
// Example: Get department revenue
const deptRevenue = await Finance.aggregate([
  { $match: { department: 'marketing', type: 'revenue' } },
  { $group: { _id: null, total: { $sum: '$amount' } } }
]);
```

---

## 🔄 API Response Format

### Success Response
```json
{
  "success": true,
  "data": {...},
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error message",
  "statusCode": 400
}
```

---

## 🛡️ Middleware Stack

1. **CORS** - Handle cross-origin requests
2. **Body Parser** - Parse JSON request bodies
3. **Auth Middleware** - Verify JWT tokens
4. **Role Middleware** - Check user permissions
5. **Error Handler** - Catch and format errors

---

## 📡 Database Connection

### Mongoose Configuration
```javascript
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
```

### Connection Events
- `connected` - Successfully connected
- `error` - Connection error
- `disconnected` - Connection lost

---

## 🔍 Query Optimizations

### Indexing
```javascript
UserSchema.index({ email: 1 }, { unique: true });
TaskSchema.index({ assignedTo: 1, status: 1 });
FinanceSchema.index({ createdBy: 1, date: -1 });
```

### Pagination
```javascript
const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 20;
const skip = (page - 1) * limit;

const tasks = await Task.find()
  .limit(limit)
  .skip(skip)
  .sort({ createdAt: -1 });
```

---

## 🔔 Error Handling

### Custom Error Classes
- `ValidationError` - Invalid input
- `AuthenticationError` - Auth failed
- `AuthorizationError` - Insufficient permissions
- `NotFoundError` - Resource not found

### Global Error Handler
```javascript
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    error: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});
```

---

## 📈 Performance Features

- **Connection Pooling** - Reuse DB connections
- **Query Optimization** - Indexed fields
- **Caching** - (To be implemented)
- **Rate Limiting** - (To be implemented)

---

## 🔄 Data Validation

### Mongoose Validators
```javascript
email: {
  type: String,
  required: [true, 'Email is required'],
  unique: true,
  lowercase: true,
  match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
}
```

---

## 🧪 Testing Endpoints

### Health Check
```bash
GET /api/health
Response: { status: 'ok', timestamp: '...' }
```

### Sample cURL Commands
```bash
# Signup
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"pass123","name":"Test User"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"pass123"}'

# Get Tasks (with token)
curl -X GET http://localhost:5000/api/tasks \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## 🔐 Environment Setup

Required `.env` file:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/venturex
JWT_SECRET=your_jwt_secret_min_32_chars
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
GEMINI_API_KEY=your_gemini_api_key
```

---

## 🗂️ Project Structure

```
backend/
├── server.js              # Entry point
├── models/               
│   ├── User.js           # User schema
│   ├── Task.js           # Task schema
│   ├── Finance.js        # Finance schema
│   ├── Team.js           # Team schema
│   └── Analytics.js      # Analytics schema
├── routes/
│   ├── auth.js           # Auth routes
│   ├── tasks.js          # Task routes
│   ├── finance.js        # Finance routes
│   ├── team.js           # Team routes
│   └── analytics.js      # Analytics routes
├── middleware/
│   ├── auth.js           # JWT verification
│   ├── roleCheck.js      # RBAC middleware
│   └── errorHandler.js   # Error handling
├── controllers/
│   ├── authController.js
│   ├── taskController.js
│   └── ...
├── utils/
│   ├── generateToken.js
│   └── validators.js
├── package.json
└── .env
```

---

## 🔮 Future Enhancements

- [ ] Redis caching
- [ ] WebSocket support (real-time)
- [ ] File upload (AWS S3)
- [ ] Email notifications (SendGrid)
- [ ] Rate limiting
- [ ] API versioning
- [ ] Swagger documentation
- [ ] Unit tests (Jest)
- [ ] Integration tests (Supertest)

---

## 📊 Scalability Considerations

- Horizontal scaling with load balancer
- Database replication (read replicas)
- Microservices architecture (future)
- Message queues (RabbitMQ/Redis)

---

Built with ❤️ for IIT Jammu Hackathon
