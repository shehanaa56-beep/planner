import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Dumbbell,
  UtensilsCrossed,
  BookOpen,
  TrendingUp,
  HeartHandshake,
  CalendarDays,
  Settings,
  Sparkles,
  Heart
} from 'lucide-react';
import { useFitness } from '../../context/FitnessContext';

export const Sidebar = () => {
  const { profile, getWeeklyWorkoutPercentage, getDailyMealPercentage } = useFitness();
  const workoutPct = getWeeklyWorkoutPercentage();
  const mealPct = getDailyMealPercentage();

  const navItems = [
    { to: '/', label: 'Dashboard', icon: LayoutDashboard, color: 'text-pastel-pink-deep' },
    { to: '/workouts', label: 'Workout Planner', icon: Dumbbell, color: 'text-pastel-lavender-deep', badge: `${workoutPct}%` },
    { to: '/diet', label: 'Diet Planner', icon: UtensilsCrossed, color: 'text-emerald-500', badge: `${mealPct}%` },
    { to: '/library', label: 'Exercise Library', icon: BookOpen, color: 'text-sky-500' },
    { to: '/journey', label: '12-Week Journey', icon: CalendarDays, color: 'text-purple-500' },
    { to: '/progress', label: 'Progress Tracker', icon: TrendingUp, color: 'text-amber-500' },
    { to: '/period', label: 'Period Tracker', icon: HeartHandshake, color: 'text-rose-400' },
    { to: '/settings', label: 'Settings', icon: Settings, color: 'text-gray-500' },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-72 bg-white/80 backdrop-blur-xl border-r border-pastel-pink/20 min-h-screen sticky top-0 p-5 z-30 shadow-sm">
      {/* Brand Header */}
      <div className="flex items-center gap-3 px-2 py-3 mb-6">
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-pastel-pink via-pastel-lavender to-pastel-blue flex items-center justify-center shadow-soft">
          <Heart className="w-6 h-6 text-white fill-white" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="font-display font-bold text-xl tracking-tight text-charcoal-900">FitLife</span>
            <span className="text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded-full bg-pastel-pink/20 text-pastel-pink-deep">
              Planner
            </span>
          </div>
          <p className="text-xs text-charcoal-400 font-medium">Personal Fitness & Nutrition</p>
        </div>
      </div>

      {/* User Quick Mini Card */}
      <div className="p-3.5 mb-6 rounded-2xl bg-gradient-to-r from-pastel-pink-light via-pastel-lavender-light to-pastel-blue-light border border-white/60 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-pastel-pink-deep font-bold text-sm shadow-sm ring-2 ring-pastel-pink/30">
            {profile.name ? profile.name[0] : 'A'}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-charcoal-800 truncate">{profile.name}</h4>
            <div className="flex items-center gap-2 text-xs text-charcoal-500">
              <span>{profile.currentWeight} kg</span>
              <span>•</span>
              <span className="text-pastel-lavender-deep font-medium">Week {profile.currentWeek}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1.5">
        <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-charcoal-400">
          Menu
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 group ${
                  isActive
                    ? 'bg-gradient-to-r from-pastel-pink-light to-pastel-lavender-light text-charcoal-900 font-semibold shadow-sm border border-pastel-pink/30 translate-x-1'
                    : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-pastel-pink/10'
                }`
              }
            >
              <div className="flex items-center gap-3">
                <div className={`p-1.5 rounded-lg transition-colors group-hover:scale-110 duration-200`}>
                  <Icon className="w-5 h-5 text-charcoal-700 group-hover:text-pastel-pink-deep" />
                </div>
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/90 text-charcoal-700 font-semibold shadow-xs border border-pastel-lavender/30">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom Motivation Card */}
      <div className="mt-auto pt-4 border-t border-pastel-pink/15">
        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-pastel-yellow-light via-pastel-pink-light to-pastel-lavender-light border border-white/80 shadow-xs">
          <div className="flex items-center gap-2 mb-1.5">
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-300" />
            <span className="text-xs font-bold text-charcoal-800">Mindful Reminder</span>
          </div>
          <p className="text-[12px] text-charcoal-600 leading-relaxed">
            Listen to your body. Rest is an essential part of growing stronger.
          </p>
        </div>
      </div>
    </aside>
  );
};
