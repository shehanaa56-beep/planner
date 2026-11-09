import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { FitnessProvider } from './context/FitnessContext';
import { AppHeader } from './components/layout/AppHeader';
import { FitLifeBottomNav } from './components/layout/FitLifeBottomNav';
import PWAInstallPrompt from './components/common/PWAInstallPrompt';

// Pages
import { Dashboard } from './pages/Dashboard';
import { WorkoutPlanner } from './pages/WorkoutPlanner';
import { DietPlanner } from './pages/DietPlanner';
import { ExerciseLibrary } from './pages/ExerciseLibrary';
import { TwelveWeekJourney } from './pages/TwelveWeekJourney';
import { ProgressTracker } from './pages/ProgressTracker';
import { PeriodTracker } from './pages/PeriodTracker';
import { Settings } from './pages/Settings';
import { TodoList } from './pages/TodoList';
import { Notes } from './pages/Notes';
import { WeeklyWeightTracker } from './pages/WeeklyWeightTracker';
import { WellnessTracker } from './pages/WellnessTracker';

export const App = () => {
  return (
    <BrowserRouter>
      <FitnessProvider>
        {/* Clean, Simple Mobile-First App Container (No Fake Phone Borders, No Fake Status Bar) */}
        <div className="min-h-screen bg-[#FFF7FA] text-[#2D2335] font-sans antialiased flex flex-col">
          <div className="w-full max-w-md mx-auto flex-1 flex flex-col min-h-screen bg-[#FFF7FA] shadow-xs">
            {/* Clean Header */}
            <AppHeader />

            {/* Scrollable Page View */}
            <main className="flex-1 px-4 py-3 pb-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/workouts" element={<WorkoutPlanner />} />
                <Route path="/diet" element={<DietPlanner />} />
                <Route path="/library" element={<ExerciseLibrary />} />
                <Route path="/journey" element={<TwelveWeekJourney />} />
                <Route path="/progress" element={<ProgressTracker />} />
                <Route path="/period" element={<PeriodTracker />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/todo" element={<TodoList />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/weight-tracker" element={<WeeklyWeightTracker />} />
                <Route path="/wellness" element={<WellnessTracker />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            {/* Sticky Bottom Navigation Bar */}
            <div className="sticky bottom-0 z-40">
              <FitLifeBottomNav />
            </div>

            {/* PWA Install Prompt */}
            <PWAInstallPrompt />
          </div>
        </div>
      </FitnessProvider>
    </BrowserRouter>
  );
};

export default App;
