import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { FitLifeHeader } from '../dashboard/FitLifeHeader';
import { useFitness } from '../../context/FitnessContext';

export const AppHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { profile } = useFitness();

  const isHome = location.pathname === '/';

  if (isHome) {
    return <FitLifeHeader />;
  }

  const titles = {
    '/workouts': 'Workout Planner',
    '/diet': 'Diet Planner',
    '/library': 'Exercise Library',
    '/journey': '12-Week Journey',
    '/progress': 'Progress Tracker',
    '/period': 'Period Tracker',
    '/weight-tracker': 'Weekly Weight Log',
    '/wellness': 'Face Massage & Wellness',
    '/todo': 'To-Do List',
    '/notes': 'Important Notes',
    '/settings': 'Profile & Settings',
  };

  const pageTitle = titles[location.pathname] || 'FitLife';

  const defaultAvatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80";

  return (
    <div className="w-full bg-white/95 backdrop-blur-md border-b border-pink-100/70 sticky top-0 z-30">
      {/* Clean Navigation Bar (No fake status bar) */}
      <div className="flex items-center justify-between px-4 py-3 max-w-md mx-auto">
        <button
          onClick={() => navigate('/')}
          className="w-9 h-9 rounded-full bg-white border border-pink-100 flex items-center justify-center text-[#554766] hover:text-[#FF4D8D] active:scale-95 transition-all shadow-2xs"
          title="Back to Home"
        >
          <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
        </button>

        <h1 className="font-extrabold text-base text-[#2D2335]">{pageTitle}</h1>

        <button
          onClick={() => navigate('/settings')}
          className="w-9 h-9 rounded-full ring-2 ring-pink-100 shadow-2xs overflow-hidden active:scale-95 transition-transform bg-white"
          title="Profile Settings"
        >
          <img
            src={profile.avatar || defaultAvatar}
            alt={profile.name || "User"}
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </div>
  );
};
