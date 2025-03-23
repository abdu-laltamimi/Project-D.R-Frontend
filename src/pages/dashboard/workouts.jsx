import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { FiPlus, FiClock, FiRepeat, FiActivity, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

const workoutTypes = {
  cardio: ['Running', 'Cycling', 'Swimming', 'Walking', 'Rowing'],
  strength: ['Bench Press', 'Squats', 'Deadlifts', 'Shoulder Press', 'Pull-ups'],
  hiit: ['Circuit Training', 'Tabata', 'CrossFit'],
  flexibility: ['Yoga', 'Stretching', 'Pilates']
};

export default function Workouts() {
  const [showForm, setShowForm] = useState(false);
  const [workoutType, setWorkoutType] = useState('');
  const [exercise, setExercise] = useState('');
  const [workoutData, setWorkoutData] = useState({
    duration: '',
    distance: '',
    sets: '',
    reps: '',
    weight: '',
    notes: ''
  });
  const [workoutHistory, setWorkoutHistory] = useState([]);

  useEffect(() => {
    const savedWorkouts = localStorage.getItem('workoutHistory');
    if (savedWorkouts) {
      setWorkoutHistory(JSON.parse(savedWorkouts));
    }
  }, []);

  const isCardio = workoutType === 'cardio';
  const isStrength = workoutType === 'strength';

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newWorkout = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      type: workoutType,
      exercise: exercise,
      ...workoutData,
      calories: isCardio ? 
        Math.round(Number(workoutData.duration) * 8) : 
        Math.round(Number(workoutData.sets) * Number(workoutData.reps) * 2)
    };

    const updatedHistory = [newWorkout, ...workoutHistory];
    setWorkoutHistory(updatedHistory);
    
    localStorage.setItem('workoutHistory', JSON.stringify(updatedHistory));
    window.dispatchEvent(new Event('storage'));

    setShowForm(false);
    setWorkoutType('');
    setExercise('');
    setWorkoutData({
      duration: '',
      distance: '',
      sets: '',
      reps: '',
      weight: '',
      notes: ''
    });
  };

  const getWorkoutDetails = (workout) => {
    if (workout.type === 'cardio') {
      return `${workout.duration} min | ${workout.distance || 0} km`;
    } else if (workout.type === 'strength') {
      return `${workout.sets} sets × ${workout.reps} reps | ${workout.weight || 0} kg`;
    }
    return `${workout.duration} min`;
  };

  return (
    <div className="p-8">
      <Head>
        <title>Workouts | FitTrack</title>
      </Head>

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center  gap-4">
          <Link 
            href="/dashboard"
              className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
            >
              <FiArrowLeft /> Back to Dashboard
            </Link>
          </div>
        <div className="flex justify-end items-center mb-8 max-w-7xl mx-auto">
            {/* <h2 className="text-2xl font-bold text-gray-800">Workouts</h2> */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <FiPlus /> Add Workout
          </motion.button>
        </div>

        {/* Add Workout Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm p-6 mb-8 max-w-7xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Workout Type Selection */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.keys(workoutTypes).map((type) => (
                  <motion.button
                    key={type}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setWorkoutType(type)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      workoutType === type
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-200'
                    }`}
                  >
                    <FiActivity className="w-6 h-6 mb-2" />
                    <span className="capitalize">{type}</span>
                  </motion.button>
                ))}
              </div>

              {workoutType && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  {/* Exercise Selection */}
                  <select
                    value={exercise}
                    onChange={(e) => setExercise(e.target.value)}
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  >
                    <option value="">Select Exercise</option>
                    {workoutTypes[workoutType].map((ex) => (
                      <option key={ex} value={ex}>{ex}</option>
                    ))}
                  </select>

                  {/* Dynamic Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {isCardio && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Duration (minutes)
                          </label>
                          <div className="relative">
                            <FiClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                              type="number"
                              value={workoutData.duration}
                              onChange={(e) => setWorkoutData({ ...workoutData, duration: e.target.value })}
                              className="pl-10 w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Distance (km)
                          </label>
                          <input
                            type="number"
                            step="0.01"
                            value={workoutData.distance}
                            onChange={(e) => setWorkoutData({ ...workoutData, distance: e.target.value })}
                            className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          />
                        </div>
                      </>
                    )}

                    {isStrength && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Sets
                          </label>
                          <div className="relative">
                            <FiRepeat className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                              type="number"
                              value={workoutData.sets}
                              onChange={(e) => setWorkoutData({ ...workoutData, sets: e.target.value })}
                              className="pl-10 w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Reps per Set
                          </label>
                          <input
                            type="number"
                            value={workoutData.reps}
                            onChange={(e) => setWorkoutData({ ...workoutData, reps: e.target.value })}
                            className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Weight (kg)
                          </label>
                          <input
                            type="number"
                            step="0.5"
                            value={workoutData.weight}
                            onChange={(e) => setWorkoutData({ ...workoutData, weight: e.target.value })}
                            className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          />
                        </div>
                      </>
                    )}

                    {/* Notes Field */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Notes
                      </label>
                      <textarea
                        value={workoutData.notes}
                        onChange={(e) => setWorkoutData({ ...workoutData, notes: e.target.value })}
                        className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        rows="3"
                      />
                    </div>
                  </div>

                  {/* Form Actions */}
                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    >
                      Save Workout
                    </button>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        )}

        {/* Recent Workouts List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Recent Workouts</h3>
            <span className="text-sm text-gray-500">
              Total workouts: {workoutHistory.length}
            </span>
          </div>

          {workoutHistory.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No workouts recorded yet. Start by adding your first workout!
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="pb-4 pr-4">Date</th>
                    <th className="pb-4 pr-4">Exercise</th>
                    <th className="pb-4 pr-4">Details</th>
                    <th className="pb-4 pr-4">Calories</th>
                    <th className="pb-4">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {workoutHistory.map((workout) => (
                    <motion.tr
                      key={workout.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="border-b last:border-0"
                    >
                      <td className="py-4 pr-4">
                        <span className="font-medium text-gray-800">
                          {new Date(workout.date).toLocaleDateString()}
                        </span>
                      </td>
                      <td className="py-4 pr-4">
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
                      <td className="py-4 pr-4 text-gray-600">
                        {getWorkoutDetails(workout)}
                      </td>
                      <td className="py-4 pr-4">
                        <span className="font-medium text-green-600">
                          {workout.calories} cal
                        </span>
                      </td>
                      <td className="py-4 max-w-xs truncate">
                        {workout.notes && (
                          <span className="text-gray-500 text-sm">
                            {workout.notes}
                          </span>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
} 