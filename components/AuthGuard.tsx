'use client';

import { useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebaseConfig';
import { getUserData, UserData } from '@/lib/auth';

interface AuthGuardProps {
  children: ReactNode;
  requiredRole?: 'user' | 'admin';
  redirectTo?: string;
}

export default function AuthGuard({ children, requiredRole, redirectTo }: AuthGuardProps) {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      router.push(redirectTo || '/login');
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser || !currentUser.emailVerified) {
        setLoading(false);
        router.push(redirectTo || '/login');
        return;
      }

      setUser(currentUser);

      // Fetch user data from Firestore
      const data = await getUserData(currentUser.uid);
      setUserData(data);

      // Check role if required
      if (requiredRole && data?.role !== requiredRole) {
        // Redirect based on actual role
        if (data?.role === 'admin') {
          router.push('/dashboard/admin');
        } else {
          router.push('/dashboard/user');
        }
        setLoading(false);
        return;
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [router, requiredRole, redirectTo]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user || !userData) {
    return null;
  }

  return <>{children}</>;
}

