import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { FiActivity, FiUser, FiBarChart2, FiCalendar, FiLogOut, FiMenu, FiX } from 'react-icons/fi';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Link from 'next/link';

const getLastSevenDays = () => {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    days.push({
      date: date,
      day: date.toLocaleDateString('en-US', { weekday: 'short' })
    });
  }
  return days;
};

const calculateDailyStats = (workouts, date) => {
  const dayWorkouts = workouts.filter(workout => {
    const workoutDate = new Date(workout.date);
    return workoutDate.toDateString() === date.toDateString();
  });

  return {
    calories: dayWorkouts.reduce((sum, workout) => sum + workout.calories, 0),
    duration: dayWorkouts.reduce((sum, workout) => sum + Number(workout.duration || 0), 0)
  };
};

export default function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [recentWorkouts, setRecentWorkouts] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [weeklyStats, setWeeklyStats] = useState({
    totalWorkouts: 0,
    totalCalories: 0,
    activeMinutes: 0,
    personalRecords: 0
  });
  const router = useRouter();

  // Update both workout data and stats
  const updateWorkoutData = () => {
    const savedWorkouts = localStorage.getItem('workoutHistory');
    if (savedWorkouts) {
      const workouts = JSON.parse(savedWorkouts);
      setRecentWorkouts(workouts.slice(0, 4));

      // Calculate chart data
      const last7Days = getLastSevenDays();
      const newChartData = last7Days.map(({ date, day }) => {
        const stats = calculateDailyStats(workouts, date);
        return {
          day,
          calories: stats.calories,
          duration: stats.duration
        };
      });
      setChartData(newChartData);

      // Calculate weekly stats
      const thisWeek = workouts.filter(workout => {
        const workoutDate = new Date(workout.date);
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        return workoutDate >= weekAgo;
      });

      setWeeklyStats({
        totalWorkouts: thisWeek.length,
        totalCalories: thisWeek.reduce((sum, workout) => sum + workout.calories, 0),
        activeMinutes: thisWeek.reduce((sum, workout) => sum + Number(workout.duration || 0), 0),
        personalRecords: calculatePersonalRecords(workouts)
      });
    }
  };

  // Calculate personal records (highest weight or distance per exercise)
  const calculatePersonalRecords = (workouts) => {
    const records = new Set();
    workouts.forEach(workout => {
      if (workout.type === 'strength' && workout.weight) {
        records.add(`${workout.exercise}-weight`);
      } else if (workout.type === 'cardio' && workout.distance) {
        records.add(`${workout.exercise}-distance`);
      }
    });
    return records.size;
  };

  // Initial load
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      router.push('/login');
    }
    updateWorkoutData();
  }, []);

  // Listen for changes
  useEffect(() => {
    const handleStorageChange = () => {
      updateWorkoutData();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const getWorkoutDetails = (workout) => {
    if (workout.type === 'cardio') {
      return `${workout.duration} min | ${workout.distance || 0} km`;
    } else if (workout.type === 'strength') {
      return `${workout.sets} sets × ${workout.reps} reps | ${workout.weight || 0} kg`;
    }
    return `${workout.duration} min`;
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    router.push('/login');
  };

  const navItems = [
    { icon: FiBarChart2, text: 'Dashboard', path: '/dashboard', active: router.pathname === '/dashboard' },
    { icon: FiActivity, text: 'Workouts', path: '/dashboard/workouts', active: router.pathname === '/dashboard/workouts' },
    // { icon: FiCalendar, text: 'Schedule', path: '/dashboard/schedule', active: router.pathname === '/dashboard/schedule' },
    // { icon: FiUser, text: 'Profile', path: '/dashboard/profile', active: router.pathname === '/dashboard/profile' },
  ];

  return (
    <>
      <Head>
        <title>Dashboard | FitTrack</title>
        <meta name="description" content="Your fitness dashboard" />
      </Head>

      <div className="min-h-screen bg-gray-50 flex">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -300 }}
          animate={{ x: isSidebarOpen ? 0 : -300 }}
          className="w-64 bg-white shadow-lg fixed h-full"
        >
          <div className="p-6">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FitTrack
            </h1>
          </div>
          
          <nav className="mt-6">
            <div className="px-4 space-y-2">
              {navItems.map((item) => (
                <Link 
                  key={item.text}
                  href={item.path}
                  className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors
                    ${item.active 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.text}</span>
                </Link>
              ))}
              
              <motion.button
                whileHover={{ x: 5 }}
                onClick={handleLogout}
                className="flex items-center space-x-3 w-full p-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors mt-8"
              >
                <FiLogOut className="w-5 h-5" />
                <span>Logout</span>
              </motion.button>
            </div>
          </nav>
        </motion.aside>

        {/* Main Content */}
        <main className={`flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-0'} p-8`}>
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={() => setSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
              <h2 className="text-2xl font-bold text-gray-800">Welcome back, Team!</h2>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-gray-500 text-sm">Weekly Workouts</h3>
                <p className="text-2xl font-bold text-blue-600 mt-2">
                  {weeklyStats.totalWorkouts}/7
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-gray-500 text-sm">Total Calories</h3>
                <p className="text-2xl font-bold text-green-600 mt-2">
                  {weeklyStats.totalCalories.toLocaleString()}
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-gray-500 text-sm">Active Minutes</h3>
                <p className="text-2xl font-bold text-purple-600 mt-2">
                  {weeklyStats.activeMinutes}
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-gray-500 text-sm">Personal Records</h3>
                <p className="text-2xl font-bold text-orange-600 mt-2">
                  {weeklyStats.personalRecords}
                </p>
              </motion.div>
            </div>

            {/* Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-xl shadow-sm mb-8"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Weekly Progress</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis dataKey="day" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Area
                      yAxisId="left"
                      type="monotone"
                      dataKey="calories"
                      stroke="#3B82F6"
                      fill="url(#colorCalories)"
                      name="Calories"
                    />
                    <Area
                      yAxisId="right"
                      type="monotone"
                      dataKey="duration"
                      stroke="#8B5CF6"
                      fill="url(#colorDuration)"
                      name="Minutes"
                    />
                    <defs>
                      <linearGradient id="colorCalories" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorDuration" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Recent Workouts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Recent Workouts</h3>
                <Link 
                  href="/dashboard/workouts"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View All
                </Link>
              </div>
              
              {recentWorkouts.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No workouts recorded yet. Start by adding your first workout!
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-500">
                        <th className="pb-4">Date</th>
                        <th className="pb-4">Exercise</th>
                        <th className="pb-4">Details</th>
                        <th className="pb-4">Calories</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentWorkouts.map((workout) => (
                        <tr key={workout.id} className="border-t">
                          <td className="py-4">
                            {new Date(workout.date).toLocaleDateString()}
                          </td>
                          <td className="py-4">
                            <div className="flex items-center">
                              <span className={`
                                w-2 h-2 rounded-full mr-2
                                ${workout.type === 'cardio' ? 'bg-green-500' : 
                                  workout.type === 'strength' ? 'bg-blue-500' : 
                                  workout.type === 'hiit' ? 'bg-purple-500' : 'bg-orange-500'}
                              `}/>
                              <span className="capitalize">{workout.exercise}</span>
                            </div>
                          </td>
                          <td className="py-4 text-gray-600">
                            {getWorkoutDetails(workout)}
                          </td>
                          <td className="py-4">
                            <span className="font-medium text-green-600">
                              {workout.calories} cal
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
}
