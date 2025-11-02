# FlashLearn - AI-Powered E-Learning Platform

Phase 2 implementation of FlashLearn, an AI-powered e-learning platform built with Next.js 15, React 18, Tailwind CSS, Framer Motion, and Firebase.

## 📌 Phase Status

✅ **Phase 1 Complete**: Project setup, authentication, landing page  
✅ **Phase 2 Complete**: Role-based dashboards, navigation, route protection

## 🚀 Features

### Phase 1 Features
- **Landing Page** with hero section, animated buttons, and responsive design
- **Authentication System** with email/password and Google Sign-In
- **Email Verification** - Users receive verification emails after signup
- **Dark Mode Toggle** - Light/dark theme support
- **Responsive Design** - Works on all device sizes
- **Toast Notifications** - User feedback for all actions
- **Firebase Integration** - Firestore for user data, Auth for authentication, Storage ready

### Phase 2 Features
- **Role-Based Dashboards** - Separate User and Admin dashboards
- **Sidebar Navigation** - Responsive navigation with role-based menu items
- **Route Protection** - Secure routes with AuthGuard component
- **Role-Based Redirects** - Automatic redirection based on user role
- **Page Transitions** - Smooth Framer Motion animations between pages
- **User Pages**: Home, My Courses, AI Quiz, Certificates, Profile
- **Admin Pages**: Dashboard, Manage Courses, Manage Users, Analytics, Settings

## 📋 Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Firebase project (for authentication and database)

## 🛠️ Setup Instructions

1. **Clone the repository and install dependencies:**

```bash
cd flashlearn
npm install
```

2. **Set up Firebase:**

   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or use an existing one
   - Enable Authentication (Email/Password and Google)
   - Create a Firestore database
   - Copy your Firebase configuration

3. **Create `.env.local` file in the root directory:**

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. **Run the development server:**

```bash
npm run dev
```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📁 Project Structure

```
flashlearn/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx      # Login page
│   │   └── signup/
│   │       └── page.tsx      # Signup page
│   ├── dashboard/
│   │   └── page.tsx          # Dashboard page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Landing page
│   └── globals.css           # Global styles
├── components/
│   ├── Footer.tsx            # Footer component
│   └── ThemeToggle.tsx       # Dark mode toggle
├── lib/
│   ├── auth.ts               # Authentication functions
│   └── firebaseConfig.ts     # Firebase configuration
└── .env.local                # Environment variables (create this)
```

## 🔐 Authentication Flow

1. **Sign Up:**
   - User provides name, email, and password
   - Account is created in Firebase Auth
   - Email verification is sent automatically
   - User data is stored in Firestore (`users` collection) with `role: "user"` by default
   - User is redirected to login page

2. **Sign In:**
   - User enters email and password
   - System verifies email is verified
   - User role is fetched from Firestore
   - **Role-based redirect**: Users → `/dashboard/user`, Admins → `/dashboard/admin`
   - Google Sign-In is also available

3. **Email Verification:**
   - Verification email is sent after signup
   - Users must verify email before they can sign in
   - Google Sign-In users are automatically verified

4. **Role Management:**
   - Default role for new users: `"user"`
   - Admin role can be set manually in Firestore (`users/{uid}` → `role: "admin"`)
   - Route protection ensures users only access their role-appropriate pages

## 🎨 UI Features

- **Gradient Themes** - Beautiful gradient backgrounds and buttons
- **Framer Motion Animations** - Smooth hover and transition effects
- **Dark Mode** - Toggle between light and dark themes
- **Responsive Design** - Mobile-first approach
- **Toast Notifications** - User-friendly feedback messages

## 🚦 Routes

### Public Routes
- `/` - Landing page
- `/login` - Login page
- `/signup` - Signup page
- `/dashboard` - Redirects to role-based dashboard

### User Routes (protected, requires `role: "user"`)
- `/dashboard/user` - User dashboard home
- `/dashboard/user/courses` - My Courses
- `/dashboard/user/quiz` - AI Quiz
- `/dashboard/user/certificates` - My Certificates
- `/dashboard/user/profile` - User Profile

### Admin Routes (protected, requires `role: "admin"`)
- `/dashboard/admin` - Admin dashboard home
- `/dashboard/admin/courses` - Manage Courses
- `/dashboard/admin/users` - Manage Users
- `/dashboard/admin/analytics` - Analytics
- `/dashboard/admin/settings` - Platform Settings

## 📝 Notes

- All dashboard routes require email verification and authentication
- User data is stored in Firestore under the `users` collection with structure:
  ```typescript
  {
    name: string;
    email: string;
    role: "user" | "admin";
  }
  ```
- All users are assigned the `role: "user"` by default
- To make a user admin, update their Firestore document: `users/{uid}/role = "admin"`
- Route protection automatically redirects users to the correct dashboard based on role
- Sidebar navigation adapts based on user role
- Smooth page transitions using Framer Motion
- Mobile-responsive sidebar with hamburger menu

## 🔄 Next Steps (Future Phases)

- Course creation and management system
- AI-powered quiz generation and taking
- Progress tracking and analytics
- Certificate generation
- User enrollment system
- Content upload and management
- Real-time notifications

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/) - React framework
- [React 18](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Firebase](https://firebase.google.com/) - Backend services
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [React Hot Toast](https://react-hot-toast.com/) - Notifications

## 📄 License

This project is part of a CS Final Year Project.
