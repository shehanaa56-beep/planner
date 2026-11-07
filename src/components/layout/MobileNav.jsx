import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Dumbbell,
  UtensilsCrossed,
  TrendingUp,
  MoreHorizontal,
  BookOpen,
  CalendarDays,
  HeartHandshake,
  Settings,
  X
} from 'lucide-react';

export const MobileNav = () => {
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const mainTabs = [
    { to: '/', label: 'Home', icon: LayoutDashboard },
    { to: '/workouts', label: 'Workouts', icon: Dumbbell },
    { to: '/diet', label: 'Diet', icon: UtensilsCrossed },
    { to: '/progress', label: 'Progress', icon: TrendingUp },
  ];

  const moreTabs = [
    { to: '/library', label: 'Exercise Library', icon: BookOpen, desc: 'Form guides & instructions' },
    { to: '/journey', label: '12-Week Journey', icon: CalendarDays, desc: 'Phases & milestones' },
    { to: '/period', label: 'Period Tracker', icon: HeartHandshake, desc: 'Cycle & symptoms' },
    { to: '/settings', label: 'Settings', icon: Settings, desc: 'Profile & preferences' },
  ];

  return (
    <>
      {/* Pop-up More Sheet */}
      {showMoreMenu && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex flex-col justify-end transition-opacity duration-300"
          onClick={() => setShowMoreMenu(false)}
        >
          <div
            className="bg-white rounded-t-3xl p-5 border-t border-pastel-pink/30 shadow-2xl animate-in slide-in-from-bottom-5 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
              <span className="font-display font-bold text-base text-charcoal-800">More FitLife Sections</span>
              <button
                onClick={() => setShowMoreMenu(false)}
                className="p-1.5 rounded-full hover:bg-gray-100 text-charcoal-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5 mb-3">
              {moreTabs.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setShowMoreMenu(false)}
                    className={({ isActive }) =>
                      `flex flex-col p-3 rounded-2xl border transition-all text-left ${
                        isActive
                          ? 'bg-pastel-pink-light border-pastel-pink text-charcoal-900 font-semibold shadow-xs'
                          : 'bg-white border-gray-100 hover:border-pastel-lavender/50 text-charcoal-700'
                      }`
                    }
                  >
                    <div className="w-8 h-8 rounded-xl bg-pastel-lavender-subtle flex items-center justify-center mb-2">
                      <Icon className="w-4 h-4 text-pastel-lavender-deep" />
                    </div>
                    <span className="text-sm font-semibold">{item.label}</span>
                    <span className="text-[11px] text-charcoal-400 mt-0.5">{item.desc}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Fixed Bottom Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-pastel-pink/20 px-3 py-2 shadow-lg safe-bottom">
        <div className="flex items-center justify-around max-w-md mx-auto">
          {mainTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <NavLink
                key={tab.to}
                to={tab.to}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'text-pastel-pink-deep font-semibold scale-105'
                      : 'text-charcoal-400 hover:text-charcoal-600'
                  }`
                }
              >
                <div className="relative">
                  <Icon className="w-5 h-5 mb-0.5" />
                </div>
                <span className="text-[11px] font-medium tracking-tight">{tab.label}</span>
              </NavLink>
            );
          })}

          {/* More Button */}
          <button
            onClick={() => setShowMoreMenu(!showMoreMenu)}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 ${
              showMoreMenu ? 'text-pastel-lavender-deep font-semibold' : 'text-charcoal-400 hover:text-charcoal-600'
            }`}
          >
            <MoreHorizontal className="w-5 h-5 mb-0.5" />
            <span className="text-[11px] font-medium tracking-tight">More</span>
          </button>
        </div>
      </nav>
    </>
  );
};
