# ViralPulse AI

An intelligent AI-powered social media marketing assistant that helps creators and businesses optimize their content strategy, track analytics across multiple platforms, and grow their online presence.

## Features

### Authentication
- **Google OAuth** - Seamless sign-in with Google accounts
- **Email/Password** - Traditional registration and login
- **Secure JWT tokens** - Stateless authentication with HTTP-only cookies

### Dashboard
- **Personalized Overview** - User-specific dashboard with seeded data
- **Growth Metrics** - Track followers, engagement, and reach
- **Quick Actions** - Recent activity and performance highlights
- **Platform Integration** - Instagram, YouTube, LinkedIn, Twitter support

### Analytics
- **Multi-Platform Tracking** - Unified analytics across all social platforms
- **Platform-Specific KPIs** - Custom metrics for each platform:
  - Instagram: Followers, Engagement Rate, Reach, Posts
  - YouTube: Subscribers, Watch Time, Views, Videos
  - LinkedIn: Connections, Impressions, Engagement, Posts
  - Twitter: Followers, Retweets, Mentions, Tweets
- **Visual Charts** - Interactive impressions graphs with platform comparison
- **Date Range Filtering** - View data for 7D, 30D, or 90D periods

### Trend Detection
- **Real-Time Monitoring** - Track trending topics and hashtags
- **AI-Powered Insights** - Gemini-powered trend analysis
- **Platform-Specific Trends** - Curated trends for each social network
- **Engagement Predictions** - AI-estimated viral potential

### Content Studio
- **AI Content Generation** - Create engaging captions and posts
- **Hashtag Suggestions** - Smart hashtag recommendations
- **Platform Optimization** - Tailored content for each platform
- **Content Calendar** - Schedule and organize posts

### Strategy
- **Growth Roadmaps** - Personalized growth strategies
- **Competitor Analysis** - Compare performance with industry benchmarks
- **Content Strategy** - AI-generated content recommendations
- **Performance Forecasting** - Predict future growth

### User Profile
- **Profile Management** - View and edit account details
- **Role-Based Access** - Creator, Business, Agency roles
- **Profile Image** - Custom avatar with Google OAuth integration
- **Settings** - Account preferences and configurations

## Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **React Router v7** - Client-side routing
- **Recharts** - Beautiful and customizable charts
- **Lucide React** - Icon library
- **Vite** - Fast build tool and dev server

### Backend
- **Node.js + Express** - RESTful API server
- **MongoDB + Mongoose** - NoSQL database with ODM
- **JWT** - Secure authentication
- **Google OAuth 2.0** - Social authentication
- **Google Gemini AI** - Content generation and analysis
- **Helmet + Rate Limiting** - Security middleware

### Security
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **Helmet** - HTTP security headers
- **Rate Limiting** - API abuse prevention

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB instance (local or Atlas)
- Google Cloud Console project (for OAuth)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/raunak2015/ai-marketing-assistant.git
cd ai-marketing-assistant
```

2. **Install backend dependencies**
```bash
cd backend
npm install
```

3. **Install frontend dependencies**
```bash
cd frontend
npm install
```

4. **Configure environment variables**

Create `backend/.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/viralpulse
JWT_SECRET=your-super-secret-jwt-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
CLIENT_URL=http://localhost:5173
GEMINI_API_KEY=your-gemini-api-key
```

Create `frontend/.env` file:
```env
VITE_API_URL=http://localhost:5000/api
```

5. **Start MongoDB**
```bash
# If using local MongoDB
mongod
```

6. **Run the backend**
```bash
cd backend
npm run dev
```

7. **Run the frontend**
```bash
cd frontend
npm run dev
```

8. **Open the app**
Navigate to `http://localhost:5173`

## Project Structure

```
ai-marketing-assistant/
├── backend/
│   ├── controllers/        # Route handlers
│   │   ├── analyticsController.js
│   │   ├── authController.js
│   │   └── dashboardController.js
│   ├── middleware/         # Express middleware
│   ├── models/            # MongoDB schemas
│   │   ├── AnalyticsData.js
│   │   ├── DashboardData.js
│   │   └── User.js
│   ├── routes/            # API routes
│   ├── server.js         # Express entry point
│   └── .env              # Environment variables
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   │   └── Layout.jsx
│   │   ├── pages/         # Page components
│   │   │   ├── Analytics.jsx
│   │   │   ├── Chat.jsx
│   │   │   ├── ContentStudio.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Settings.jsx
│   │   │   ├── Strategy.jsx
│   │   │   ├── TrendDetection.jsx
│   │   │   └── Trends.jsx
│   │   ├── services/      # API services
│   │   │   └── api.js
│   │   ├── utils/         # Utility functions
│   │   │   └── userDataGenerator.js
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── index.html
│   └── package.json
├── README.md
└── package.json           # Root package.json
```

## API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login with email/password |
| GET | `/api/auth/google` | Initiate Google OAuth |
| GET | `/api/auth/google/callback` | Google OAuth callback |
| GET | `/api/auth/me` | Get current user |
| POST | `/api/auth/logout` | Logout user |

### Dashboard
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/dashboard` | Get user dashboard data |

### Analytics
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/analytics` | Get platform analytics |
| GET | `/api/analytics/trending` | Get trending content |
| GET | `/api/analytics/trends` | Get trend analysis |

## Data Models

### User
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String (enum: ['Creator', 'Business', 'Agency']),
  profileImage: String,
  authProvider: String (enum: ['local', 'google']),
  createdAt: Date
}
```

### DashboardData
```javascript
{
  userId: ObjectId,
  metrics: {
    followers: Number,
    engagement: Number,
    reach: Number,
    posts: Number
  },
  recentPosts: Array,
  platformGrowth: Object
}
```

### AnalyticsData
```javascript
{
  userId: ObjectId,
  instagram: { followers, engagement, reach, posts },
  youtube: { subscribers, watchTime, views, videos },
  linkedin: { connections, impressions, engagement, posts },
  twitter: { followers, retweets, mentions, tweets },
  impressions: Array
}
```

## Features in Development

- [ ] Automation Hub page
- [ ] Real-time notifications
- [ ] Content scheduling and calendar
- [ ] Email reports
- [ ] Mobile app
- [ ] Team collaboration
- [ ] Advanced AI content generation
- [ ] Social media posting integration

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Built with love for content creators and marketers
- Powered by Google Gemini AI
- Styled with a warm, botanical-inspired design
