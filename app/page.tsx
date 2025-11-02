'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Learn Smarter, Faster — with FlashLearn
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12"
          >
            AI-powered e-learning platform that adapts to your learning style
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/dashboard"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Browse Courses
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/ai-quiz"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-200 dark:border-gray-700"
              >
                Try AI Quiz
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/signup"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Join Now
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -10 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Fast Learning</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Accelerate your learning with AI-powered personalized content
            </p>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -10 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
          >
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-2">Smart Adaptation</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Content adapts to your learning pace and style
            </p>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -10 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
          >
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-2">Rich Content</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Access thousands of courses and interactive quizzes
            </p>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
