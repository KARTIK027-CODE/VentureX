# VentureX Frontend

> A premium, AI-powered startup management platform with role-based dashboards, analytics, and comprehensive marketing pages.

## 🚀 Tech Stack

### Core Framework
- **Next.js 16.1.6** - React framework with App Router, Server Components, and API routes
- **React 19.2.3** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12.33.0** - Production-ready animation library
- **Lucide React 0.563.0** - Beautiful icon library
- **Tailwind Animate** - Pre-built animations
- **clsx & tailwind-merge** - Conditional class management

### 3D Graphics
- **Three.js 0.182.0** - WebGL 3D library
- **@react-three/fiber 9.5.0** - React renderer for Three.js
- **@react-three/drei 10.7.7** - Helpers and  abstractions for R3F

### Data Visualization
- **Recharts 3.7.0** - Composable charting library
  - Line charts, Bar charts, Pie charts
  - Area charts, Radial charts
  - Custom tooltips and animations

### Forms & Validation
- **React Hook Form 7.71.1** - Performant form library
- **Zod 4.3.6** - TypeScript-first schema validation
- **@hookform/resolvers 5.2.2** - Validation resolver for RHF

### HTTP & State
- **Axios 1.13.4** - Promise-based HTTP client
- Context API - Global state management

---

## 🤖 AI Integration

### Google Gemini AI
- **Idea Analyzer** - AI-powered startup idea validation
  - Uses Gemini Flash latest model
  - Returns structured JSON analysis
  - Scores ideas on innovation, market size, feasibility, competition, scalability
  - Generates SWOT analysis, competitor lists, MVP strategies

- **Voice Assistant** - Natural language interaction
  - Voice command processing
  - Text-to-speech responses
  - Context-aware conversations

- **Pitch Generator** - AI-generated pitch decks
  - Elevator pitches (30 seconds)
  - Investor decks (10-15 slides)
  - Email outreach templates

---

## 📦 Key Packages & Their Purpose

| Package | Purpose | Use Case |
|---------|---------|----------|
| `next` | Framework | SSR, routing, API routes, image optimization |
| `framer-motion` | Animations | Smooth page transitions, hover effects, micro-interactions |
| `recharts` | Charts | Dashboard analytics, revenue charts, task distribution |
| `three.js` | 3D Graphics | Animated background mesh on landing page |
| `lucide-react` | Icons | Consistent iconography across all pages |
| `axios` | HTTP | API calls to backend (auth, tasks, finance) |
| `react-hook-form` | Forms | Login, signup, settings forms |
| `zod` | Validation | Schema validation for forms |
| `tailwind` | Styling | Responsive design, dark theme, glass morphism |

---

## ✨ Features Implemented

### Landing Page & Marketing
- **Hero Section** - Animated gradient text, dual CTAs
- **Social Proof** - Stats (500+ startups, $50M raised), trust badges (YC, Sequoia)
- **Feature Highlights** - 6 benefits (speed, security, collaboration)
- **Bento Grid** - Department showcases (Finance, HR, Tech, Marketing)
- **Testimonials** - 3 founder quotes with 5-star ratings
- **Final CTA** - Dual buttons with trust indicators

### Marketing Pages
- `/investors` - Startup showcase with filters (industry, stage, search)
- `/product` - 6 feature categories, integration badges
- `/departments` - Role-specific features (Founders, CFO, CTO, CMO, HR, Team)
- `/pricing` - 3 tiers (Free, Pro $99, Enterprise), annual/monthly toggle, FAQ
- `/about` - Company story, team values
- `/contact` - Working form with validation
- `/privacy`, `/terms`, `/security` - Legal pages

### Dashboard (Role-Based)
#### For Founders
- Financial metrics (Revenue, Profit, Cash on Hand, Burn Rate)
- Revenue analysis chart
- Team management with salary tracking
- Pay salary button
- Cross-department analytics
- Investor-ready reports

#### For Department Heads & Team Members
- Personal performance cards (Tasks, Productivity Score, Active Streak, Rank)
- Weekly activity chart
- Task distribution pie chart
- Department-only analytics
- Goal tracking
- Team collaboration tools

### Core Features
- **Authentication** - Signup, Login, Onboarding
- **Role-Based Access Control (RBAC)**
  - Founder, Department Head, Team Member
  - Granular permissions
  - Context-aware UI
- **Task Management** - Create, assign, track tasks
- **Analytics Dashboard** - Charts, KPIs, trends
- **Finance Tracker** - Burn rate, runway, expenses
- **HR System** - Team directory, payroll
- **Marketing Hub** - Campaign tracking
- **Tech Roadmap** - Sprint planning, GitHub sync

### AI-Powered Tools
- **Idea Analyzer** - Validate startup ideas
- **Pitch Generator** - Create decks & emails
- **Voice Assistant** - Natural language commands
- **Smart Insights** - Automated recommendations

---

## 🎨 Design System

### Color Palette
- **Primary**: Indigo 500 → Purple 600 (gradients)
- **Success**: Emerald 400-600
- **Warning**: Amber 400-600
- **Danger**: Red 400-600
- **Neutral**: Slate 100-950

### Components
- **Glassmorphism** - Backdrop blur with subtle borders
- **Gradient overlays** - Multi-color backgrounds
- **Animated cards** - Hover states, scale transforms
- **3D backgrounds** - Three.js mesh gradients
- **Responsive grids** - Bento boxes, feature cards

### Typography
- **Headings**: Font-black, tracking-tighter
- **Body**: text-slate-400 for secondary text
- **Hierarchy**: text-4xl → text-6xl for stats

---

## 📱 Pages Structure

```
app/
├── page.tsx                    # Landing page
├── (auth)/
│   ├── login/page.tsx          # Login
│   ├── signup/page.tsx         # Signup
│   └── onboarding/page.tsx     # User onboarding
├── dashboard/
│   ├── page.tsx                # Main dashboard
│   ├── analytics/page.tsx      # Analytics (dept-filtered)
│   ├── tasks/page.tsx          # Task management
│   ├── finance/page.tsx        # Financial tracking
│   ├── feedback/page.tsx       # Team & salary mgmt
│   ├── pitch/page.tsx          # AI pitch generator
│   ├── ideas/page.tsx          # Idea analyzer
│   ├── settings/page.tsx       # User settings
│   └── [department]/page.tsx   # Dept-specific pages
├── investors/page.tsx          # Investor showcase
├── product/page.tsx            # Product features
├── departments/page.tsx        # Role features
├── pricing/page.tsx            # Pricing tiers
├── about/page.tsx              # About us
├── contact/page.tsx            # Contact form
├── privacy/page.tsx            # Privacy policy
├── terms/page.tsx              # Terms of service
└── security/page.tsx           # Security docs
```

---

## 🔐 Authentication & Authorization

- **JWT-based** - Token stored in localStorage
- **Context Provider** - `AuthContext` for global auth state
- **Protected Routes** - Dashboard requires authentication
- **Role Checks** - Component-level permission checks

---

## 📊 Charts & Analytics

### Chart Types Used
1. **Line Charts** - Revenue trends, task completion over time
2. **Bar Charts** - Department performance, monthly comparisons
3. **Pie Charts** - Task status distribution
4. **Area Charts** - User growth, engagement
5. **Radial Bar Charts** - Productivity scores, completion rates

### Data Sources
- Real-time API data
- Mock data for demos
- Aggregated metrics from backend

---

## 🎯 Performance Optimizations

- **Next.js Image** - Automatic optimization
- **Dynamic Imports** - Code splitting for 3D backgrounds
- **Lazy Loading** - Components load on demand
- **SSR & SSG** - Server-side rendering where beneficial
- **Debounced Search** - Efficient filtering on investor page

---

## 📐 Responsive Design

- **Mobile-first** - Works on all screen sizes
- **Breakpoints**:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

---

## 🌟 Unique Features

1. **3D Animated Backgrounds** - Three.js mesh gradients
2. **Glassmorphism UI** - Premium modern design
3. **AI-Powered Tools** - Gemini integration
4. **Role-Based Dashboards** - Personalized experiences
5. **Department Filtering** - Granular analytics
6. **Real-time Updates** - Live data sync
7. **Voice Commands** - Natural language interaction

---

## 🔗 API Integration

### Endpoints Used
- `/api/auth/signup` - User registration
- `/api/auth/login` - Authentication
- `/api/tasks` - Task CRUD
- `/api/analytics` - Dashboard data
- `/api/finance` - Financial metrics
- `/api/team` - Team management
- `/api/analyze-idea` - AI idea validation
- `/api/voice-assistant` - Voice commands

---

## 🛠 Development Tools

- **ESLint** - Code linting
- **TypeScript** - Type checking
- **Tailwind IntelliSense** - CSS autocomplete
- **React DevTools** - Component debugging

---

## 📦 Build Output

- **Static Generation** - Marketing pages
- **Server-Side Rendering** - Dashboard pages
- **Client Components** - Interactive features
- **API Routes** - Backend proxy

---

## 🎨 Animation Details

### Framer Motion Patterns
- **Fade-in on scroll** - `initial={{ opacity: 0, y: 20 }}`
- **Staggered children** - `delay: idx * 0.05`
- **Hover scale** - `whileHover={{ scale: 1.05 }}`
- **Page transitions** - Smooth route changes

---

## 📱 Mobile Features

- Hamburger menu (if implemented)
- Touch-friendly buttons
- Swipeable cards
- Responsive charts
- Optimized images

---

## 🔮 Future Enhancements

- [ ] Real-time collaboration (WebSockets)
- [ ] Mobile app (React Native)
- [ ] Offline mode (PWA)
- [ ] Advanced AI insights
- [ ] Integrations (Stripe, GitHub, Slack)

---

Built with ❤️ for IIT Jammu Hackathon
