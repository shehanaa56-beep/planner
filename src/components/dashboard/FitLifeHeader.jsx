import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, X } from 'lucide-react';
import { FitLifeLogo } from '../common/FitLifeLogo';
import { useFitness } from '../../context/FitnessContext';

export const FitLifeHeader = () => {
  const { profile } = useFitness();
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, title: "Welcome to FitLife! ✨", desc: "Week 1 started — let's build healthy habits!", time: "Now" },
    { id: 2, title: "Hydration Reminder 💧", desc: "Drink water regularly through the day", time: "1h ago" },
    { id: 3, title: "Today's Plan 🌸", desc: "Check your workout and meals when ready", time: "Today" },
  ];

  return (
    <div className="w-full bg-white/95 backdrop-blur-md border-b border-pink-100/70 sticky top-0 z-30">
      {/* Brand Row & Header Icons (Clean, No Fake Status Bar) */}
      <div className="flex items-center justify-between px-4 py-3 max-w-md mx-auto">
        {/* Left: Brand Logo */}
        <FitLifeLogo showSubtitle={true} />

        {/* Right: Notification Bell & Profile Avatar */}
        <div className="flex items-center gap-2.5">
          {/* Bell Button */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="w-9 h-9 rounded-full bg-white border border-pink-100 flex items-center justify-center text-[#554766] hover:text-[#FF4D8D] hover:border-pink-200 transition-all shadow-2xs active:scale-95"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              {/* Red Badge Dot */}
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#FF3B69] ring-2 ring-white" />
            </button>

            {/* Notification Popover Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 top-11 w-64 bg-white rounded-2xl shadow-xl border border-pink-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100 mb-2">
                  <span className="font-bold text-xs text-[#2D2335]">Notifications</span>
                  <button
                    onClick={() => setShowNotifications(false)}
                    className="p-1 rounded-full hover:bg-gray-100 text-gray-400"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="space-y-1.5">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className="p-2 rounded-xl hover:bg-pink-50/50 transition-colors text-left"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#2D2335]">{n.title}</span>
                        <span className="text-[10px] text-gray-400">{n.time}</span>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-0.5">{n.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile Avatar */}
          <button
            onClick={() => navigate('/settings')}
            className="w-9 h-9 rounded-full ring-2 ring-pink-100 shadow-2xs overflow-hidden active:scale-95 transition-transform bg-white"
            title="Settings & Profile"
          >
            <img
              src={profile.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"}
              alt={profile.name || "User"}
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
