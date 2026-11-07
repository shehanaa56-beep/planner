import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Home,
  Dumbbell,
  UtensilsCrossed,
  BarChart2,
  User,
  X,
  CalendarDays,
  HeartHandshake,
  BookOpen,
  Settings,
  CheckSquare,
  FileText
} from 'lucide-react';

export const FitLifeBottomNav = () => {
  const [showMoreDrawer, setShowMoreDrawer] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/workouts', label: 'Workout', icon: Dumbbell },
    { to: '/diet', label: 'Diet', icon: UtensilsCrossed },
    { to: '/progress', label: 'Progress', icon: BarChart2 },
  ];

  const moreItems = [
    { to: '/library', label: 'Exercise Library', icon: BookOpen, desc: 'Form guides & muscle targets', color: 'bg-purple-50 text-purple-600' },
    { to: '/journey', label: '12-Week Journey', icon: CalendarDays, desc: '3-phase progressive roadmap', color: 'bg-blue-50 text-blue-600' },
    { to: '/period', label: 'Period Tracker', icon: HeartHandshake, desc: 'Cycle phase workout tips', color: 'bg-pink-50 text-pink-600' },
    { to: '/todo', label: 'To-Do List', icon: CheckSquare, desc: 'Add & track your tasks', color: 'bg-violet-50 text-violet-600' },
    { to: '/notes', label: 'Notes', icon: FileText, desc: 'Save emails & reminders', color: 'bg-amber-50 text-amber-600' },
    { to: '/settings', label: 'Settings', icon: Settings, desc: 'Profile, weight goals, diet', color: 'bg-gray-100 text-gray-600' },
  ];

  return (
    <>
      {/* More Options Drawer Overlay */}
      {showMoreDrawer && (
        <div
          className="fixed inset-0 z-50 bg-black/35 backdrop-blur-xs flex flex-col justify-end transition-opacity duration-200"
          onClick={() => setShowMoreDrawer(false)}
        >
          <div
            className="bg-white rounded-t-3xl p-5 border-t border-pink-100 shadow-2xl max-w-md w-full mx-auto animate-in slide-in-from-bottom-5 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
              <span className="font-bold text-sm text-[#2D2335]">More Features</span>
              <button
                onClick={() => setShowMoreDrawer(false)}
                className="p-1 rounded-full hover:bg-gray-100 text-gray-400"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-2">
              {moreItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.to}
                    onClick={() => {
                      setShowMoreDrawer(false);
                      navigate(item.to);
                    }}
                    className="flex flex-col p-3 rounded-2xl border border-gray-100 hover:border-pink-200 hover:bg-pink-50/30 text-left transition-all"
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2 ${item.color || 'bg-purple-50 text-purple-600'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-[#2D2335]">{item.label}</span>
                    <span className="text-[10px] text-gray-400 mt-0.5">{item.desc}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Sticky Tab Bar */}
      <nav className="w-full bg-white/95 backdrop-blur-md border-t border-[#FFDFEC] py-2 px-3 shadow-lg select-none">
        <div className="flex items-center justify-around max-w-md mx-auto">
          {navItems.map((tab) => {
            const Icon = tab.icon;
            return (
              <NavLink
                key={tab.to}
                to={tab.to}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center py-1 px-3 relative transition-all group ${
                    isActive ? 'text-[#FF4D8D] font-bold' : 'text-[#7D6F85] hover:text-[#2D2335]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon className={`w-5 h-5 mb-0.5 transition-transform group-hover:scale-105 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
                    <span className="text-[11px] leading-tight font-medium tracking-tight">
                      {tab.label}
                    </span>
                    {/* Active Underline Pill Indicator for Home matching screenshot */}
                    {isActive && (
                      <span className="w-5 h-0.5 bg-[#FF4D8D] rounded-full mt-1 animate-in fade-in duration-150" />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}

          {/* More Tab */}
          <button
            onClick={() => setShowMoreDrawer(true)}
            className={`flex flex-col items-center justify-center py-1 px-3 relative transition-all group ${
              showMoreDrawer ? 'text-[#FF4D8D] font-bold' : 'text-[#7D6F85] hover:text-[#2D2335]'
            }`}
          >
            <User className="w-5 h-5 mb-0.5 stroke-[1.8] transition-transform group-hover:scale-105" />
            <span className="text-[11px] leading-tight font-medium tracking-tight">
              More
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};
