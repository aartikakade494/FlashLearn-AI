# FlashLearn - AI-Powered E-Learning Platform

FlashLearn is a modern, AI-powered e-learning platform that adapts to your learning style. Built with Next.js 16, React 19, Firebase, and featuring beautiful UI with Framer Motion animations.

## ✨ Features

- 🚀 **AI-Powered Learning** - Personalized learning experiences with AI-generated content
- 📚 **Interactive Courses** - Access to various courses with progress tracking
- 🧠 **AI Quiz Generator** - Generate quizzes from PDFs, YouTube videos, audio, or text
- 📊 **Analytics Dashboard** - Admin analytics with charts (Recharts)
- 🏆 **Leaderboard** - Compete with others and see top performers
- 🔔 **Notifications** - Firebase Cloud Messaging for daily reminders and achievements
- 📧 **Contact System** - Firestore-based contact form
- 🎨 **Modern UI** - Beautiful gradient themes with dark mode support
- 📱 **Responsive Design** - Works perfectly on all devices
- ⚡ **Performance Optimized** - Lazy loading, image optimization, and more

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Storage**: Firebase Storage
- **Messaging**: Firebase Cloud Messaging
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Notifications**: React Hot Toast
- **AI**: OpenAI / Groq SDK

## 📋 Prerequisites

- Node.js 18+ installed
- Firebase account
- npm or yarn package manager

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd flashlearn
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in your Firebase credentials in `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Set Up Firebase

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable Email/Password and Google Sign-In
3. Create Firestore Database:
   - Go to Firestore Database
   - Create database in production mode
   - Set up security rules (see DEPLOYMENT.md)
4. (Optional) Set up Firebase Cloud Messaging:
   - Go to Project Settings > Cloud Messaging
   - Generate Web Push certificate key
   - Add to `NEXT_PUBLIC_FIREBASE_VAPID_KEY`

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
flashlearn/
├── app/
│   ├── (auth)/          # Authentication routes (login, signup)
│   ├── dashboard/       # Dashboard routes (user, admin)
│   ├── contact/         # Contact page
│   ├── ai-quiz/         # AI Quiz generator
│   ├── layout.tsx        # Root layout
│   ├── page.tsx         # Landing page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── AuthGuard.tsx    # Route protection
│   ├── Sidebar.tsx      # Dashboard sidebar
│   ├── NotificationProvider.tsx  # Notification system
│   └── ...
├── lib/                 # Utilities and services
│   ├── firebaseConfig.ts  # Firebase configuration
│   ├── auth.ts          # Authentication functions
│   ├── analytics.ts     # Analytics and leaderboard
│   ├── notifications.ts # Notification system
│   └── ...
├── next.config.js       # Next.js configuration
├── vercel.json          # Vercel deployment config
└── package.json         # Dependencies
```

## 🔐 Authentication Flow

1. **Sign Up**: Users create account → Email verification sent
2. **Sign In**: Email verification required → Role-based redirect
3. **Roles**: `user` (default) or `admin` (set in Firestore)

## 📊 Admin Features

- **Analytics Dashboard**: View platform statistics with charts
- **User Management**: Manage user accounts
- **Course Management**: Create, edit, and manage courses
- **Contact Management**: View and respond to contact submissions

## 🏆 Leaderboard

Top quiz performers are ranked by:
- Total points (score × 10)
- Average score
- Best score
- Number of quizzes completed

## 🔔 Notifications

- **Daily Learning Reminders**: Reminds users to study
- **Achievement Alerts**: Notifies on quiz achievements (perfect scores, streaks)
- **Course Completion**: Alerts when courses are completed

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

## 🔒 Security

- Environment variables are not committed to git (`.gitignore`)
- Firestore security rules protect data
- Authentication required for protected routes
- Email verification required for access

## 📝 Environment Variables

Required:
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

Optional:
- `NEXT_PUBLIC_FIREBASE_VAPID_KEY` (for notifications)
- `NEXT_PUBLIC_SITE_URL` (for SEO)
- `NEXT_PUBLIC_GOOGLE_VERIFICATION` (for SEO)
- `NEXT_PUBLIC_YANDEX_VERIFICATION` (for SEO)

## 🎨 Features in Detail

### Analytics Dashboard
- Total users, courses, enrollments, quiz attempts
- Growth charts (last 6 months)
- Top courses by enrollment
- Average quiz scores
- Certificates issued

### Performance Optimizations
- Lazy loading of components
- Image optimization (Next.js Image)
- Package optimization (framer-motion, recharts)
- CSS optimization
- Standalone output mode

### SEO
- metadataBase for proper OG image URLs
- Comprehensive meta tags
- Open Graph support
- Twitter Card support
- Sitemap generation
- Robots.txt configuration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Firebase for backend services
- Recharts for beautiful charts
- Framer Motion for animations

## 📧 Support

For support, email support@flashlearn.com or use the Contact Us page.

---

Made with ❤️ by FlashLearn Team
