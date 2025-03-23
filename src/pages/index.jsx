import { useState } from 'react';
import { motion } from 'framer-motion';
import { Nunito } from 'next/font/google';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FiActivity, FiUser, FiBarChart2, FiCalendar } from 'react-icons/fi';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import NavBar from '@/components/NavBar';

const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  subsets: ['latin'],
  display: 'swap',
});

const mockChartData = [
  { day: 'Mon', calories: 2100, workouts: 45 },
  { day: 'Tue', calories: 2400, workouts: 55 },
  { day: 'Wed', calories: 2200, workouts: 40 },
  { day: 'Thu', calories: 2800, workouts: 65 },
  { day: 'Fri', calories: 2300, workouts: 50 },
  { day: 'Sat', calories: 1900, workouts: 35 },
  { day: 'Sun', calories: 2600, workouts: 60 },
];

export default function Home() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };

  return (
    <>
      <Head>
        <title>FitTrack | Your All-in-One Fitness Tracking Solution</title>
        <meta name="description" content="Track workouts, nutrition, progress photos, and achieve your fitness goals with FitTrack's comprehensive dashboard" />
      </Head>

      <main className={`${nunito.className} min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-20`}>
        <NavBar />

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Track Your Fitness Journey Like Never Before
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Get detailed insights into your workouts, track your progress, and achieve your fitness goals with our comprehensive dashboard.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                onClick={handleLoginClick}
              >
                Start Tracking Now
              </motion.button>
            </motion.div>

            {/* Right Column - Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-2xl p-6"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Dashboard Preview Cards */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-blue-50 p-4 rounded-xl"
                >
                  <FiActivity className="text-blue-600 text-2xl mb-2" />
                  <h3 className="font-semibold text-gray-800">Daily Activity</h3>
                  <p className="text-sm text-gray-600">Track your daily progress</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-purple-50 p-4 rounded-xl"
                >
                  <FiBarChart2 className="text-purple-600 text-2xl mb-2" />
                  <h3 className="font-semibold text-gray-800">Statistics</h3>
                  <p className="text-sm text-gray-600">View detailed analytics</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-green-50 p-4 rounded-xl"
                >
                  <FiCalendar className="text-green-600 text-2xl mb-2" />
                  <h3 className="font-semibold text-gray-800">Workout Plans</h3>
                  <p className="text-sm text-gray-600">Schedule your routines</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-orange-50 p-4 rounded-xl"
                >
                  <FiUser className="text-orange-600 text-2xl mb-2" />
                  <h3 className="font-semibold text-gray-800">Profile</h3>
                  <p className="text-sm text-gray-600">Manage your account</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Everything You Need to Track Your Fitness Journey
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive tracking tools designed for both beginners and advanced athletes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FiActivity className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Workout Tracking</h3>
              <p className="text-gray-600">
                Log exercises, sets, reps, and weights. Track your personal records and see your progress over time.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <FiBarChart2 className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Nutrition Analysis</h3>
              <p className="text-gray-600">
                Track macros, calories, and meal plans. Get personalized nutrition recommendations.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <FiCalendar className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Progress Photos</h3>
              <p className="text-gray-600">
                Visual progress tracking with side-by-side comparisons and measurements tracking.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <section className="bg-gray-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Analytics at Your Fingertips
              </h2>
              <p className="text-gray-300 text-lg">
                Get detailed insights into your fitness journey with our intuitive dashboard
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              {/* Mock Dashboard UI */}
              <div className="grid grid-cols-4 gap-6 mb-8">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-600">Weekly Workouts</h4>
                  <p className="text-2xl font-bold text-blue-600">5/7</p>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-600">Calories Burned</h4>
                  <p className="text-2xl font-bold text-green-600">2,450</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-600">Active Minutes</h4>
                  <p className="text-2xl font-bold text-purple-600">180</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-600">Personal Records</h4>
                  <p className="text-2xl font-bold text-orange-600">3</p>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Weekly Progress</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm text-gray-600">Calories</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-sm text-gray-600">Active Minutes</span>
                    </div>
                  </div>
                </div>
                
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={mockChartData}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="calories"
                        stroke="#3B82F6"
                        fill="url(#colorCalories)"
                      />
                      <Area
                        type="monotone"
                        dataKey="workouts"
                        stroke="#8B5CF6"
                        fill="url(#colorWorkouts)"
                      />
                      <defs>
                        <linearGradient id="colorCalories" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorWorkouts" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sports & Activities Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Track Any Sport or Workout
            </h2>
            <p className="text-gray-600 text-lg">
              Whether you're into weightlifting, cardio, or sports - we've got you covered
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Weightlifting */}
            <motion.div
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10" />
              <img 
                src="/weighlifting.jpeg" 
                alt="Weightlifting" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                <h3 className="text-xl font-bold mb-2">Weightlifting</h3>
                <p className="text-sm text-gray-200">
                  Track sets, reps, and PRs
                </p>
              </div>
            </motion.div>

            {/* Running */}
            <motion.div
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10" />
              <img 
                src="/running.jpeg" 
                alt="Running" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                <h3 className="text-xl font-bold mb-2">Running</h3>
                <p className="text-sm text-gray-200">
                  Distance, pace, and routes
                </p>
              </div>
            </motion.div>

            {/* HIIT */}
            <motion.div
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10" />
              <img 
                src="/hiit.jpeg" 
                alt="HIIT" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                <h3 className="text-xl font-bold mb-2">HIIT</h3>
                <p className="text-sm text-gray-200">
                  Intervals and heart rate zones
                </p>
              </div>
            </motion.div>

            {/* Yoga */}
            <motion.div
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10" />
              <img 
                src="/ypga.jpeg" 
                alt="Yoga" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                <h3 className="text-xl font-bold mb-2">Yoga</h3>
                <p className="text-sm text-gray-200">
                  Sessions and flexibility progress
                </p>
              </div>
            </motion.div>
          </div>

          {/* Additional Sports Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {['Swimming', 'Cycling', 'Basketball', 'Tennis', 'CrossFit', 'Boxing', 'Pilates', 'Soccer'].map((sport) => (
              <motion.div
                key={sport}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 rounded-xl p-4 text-center"
              >
                <p className="font-semibold text-gray-800">{sport}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Start Your Fitness Journey?
            </h3>
            <p className="text-gray-600 mb-8">
              Join thousands of users who are already tracking their progress
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              onClick={handleLoginClick}
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </section>
      </main>
    </>
  );
}
