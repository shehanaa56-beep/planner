import React, { useState } from 'react';
import { Target, Calendar } from 'lucide-react';
import { useFitness } from '../../context/FitnessContext';

export const FitLifeMetricCards = () => {
  const { profile, updateProfile } = useFitness();
  const [editingCard, setEditingCard] = useState(null);
  const [tempVal, setTempVal] = useState('');

  const handleEdit = (field, currentVal) => {
    setEditingCard(field);
    setTempVal(currentVal.toString());
  };

  const handleSave = (field) => {
    if (!tempVal) return setEditingCard(null);
    const num = parseFloat(tempVal);
    if (!isNaN(num)) {
      updateProfile({ [field]: num });
    }
    setEditingCard(null);
  };

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3">
      {/* 1. Current Weight Card (Pastel Pink) */}
      <div
        onClick={() => handleEdit('currentWeight', profile.currentWeight)}
        className="cursor-pointer bg-[#FFEBF2] border border-[#FFD7E6] rounded-2xl p-2.5 sm:p-3.5 flex flex-col items-center justify-center text-center shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all group relative"
      >
        {/* Scale Icon */}
        <div className="w-8 h-8 rounded-xl bg-white/70 flex items-center justify-center text-[#FF4D8D] mb-1.5 shadow-2xs group-hover:scale-105 transition-transform">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
            <rect x="3" y="4" width="18" height="16" rx="4" />
            <path d="M9 8h6" />
            <circle cx="12" cy="8" r="2" />
            <path d="M12 8l1-1" />
          </svg>
        </div>

        {/* Value */}
        {editingCard === 'currentWeight' ? (
          <input
            type="number"
            step="0.1"
            value={tempVal}
            onChange={(e) => setTempVal(e.target.value)}
            onBlur={() => handleSave('currentWeight')}
            onKeyDown={(e) => e.key === 'Enter' && handleSave('currentWeight')}
            autoFocus
            className="w-16 text-center text-xs sm:text-sm font-bold bg-white rounded border border-[#FF4D8D] py-0.5"
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <div className="flex items-baseline gap-0.5">
            <span className="font-extrabold text-sm sm:text-base text-[#2D2335] leading-tight">
              {profile.currentWeight}
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-[#2D2335]">kg</span>
          </div>
        )}

        {/* Label */}
        <span className="text-[10px] sm:text-[11px] font-medium text-[#7D6F85] mt-0.5 truncate max-w-full">
          Current Weight
        </span>
      </div>

      {/* 2. Height Card (Pastel Lavender) */}
      <div
        onClick={() => handleEdit('height', profile.height)}
        className="cursor-pointer bg-[#ECE6FF] border border-[#DFD5FF] rounded-2xl p-2.5 sm:p-3.5 flex flex-col items-center justify-center text-center shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all group relative"
      >
        {/* Measuring Tape Icon */}
        <div className="w-8 h-8 rounded-xl bg-white/70 flex items-center justify-center text-[#8B5CF6] mb-1.5 shadow-2xs group-hover:scale-105 transition-transform">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
            <path d="M5 19L19 5" />
            <path d="M8 16l1.5 1.5" />
            <path d="M11 13l2 2" />
            <path d="M14 10l1.5 1.5" />
            <path d="M17 7l2 2" />
            <rect x="3" y="15" width="6" height="6" rx="1.5" />
          </svg>
        </div>

        {/* Value */}
        {editingCard === 'height' ? (
          <input
            type="number"
            value={tempVal}
            onChange={(e) => setTempVal(e.target.value)}
            onBlur={() => handleSave('height')}
            onKeyDown={(e) => e.key === 'Enter' && handleSave('height')}
            autoFocus
            className="w-16 text-center text-xs sm:text-sm font-bold bg-white rounded border border-[#8B5CF6] py-0.5"
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <div className="flex items-baseline gap-0.5">
            <span className="font-extrabold text-sm sm:text-base text-[#2D2335] leading-tight">
              {profile.height}
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-[#8B5CF6]">cm</span>
          </div>
        )}

        {/* Label */}
        <span className="text-[10px] sm:text-[11px] font-medium text-[#7D6F85] mt-0.5 truncate max-w-full">
          Height
        </span>
      </div>

      {/* 3. Goal Weight Card (Pastel Mint) */}
      <div
        onClick={() => handleEdit('goalWeight', profile.goalWeight)}
        className="cursor-pointer bg-[#E2F8EE] border border-[#C9F4DF] rounded-2xl p-2.5 sm:p-3.5 flex flex-col items-center justify-center text-center shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all group relative"
      >
        {/* Target Icon */}
        <div className="w-8 h-8 rounded-xl bg-white/70 flex items-center justify-center text-[#10B981] mb-1.5 shadow-2xs group-hover:scale-105 transition-transform">
          <Target className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
        </div>

        {/* Value */}
        {editingCard === 'goalWeight' ? (
          <input
            type="number"
            value={tempVal}
            onChange={(e) => setTempVal(e.target.value)}
            onBlur={() => handleSave('goalWeight')}
            onKeyDown={(e) => e.key === 'Enter' && handleSave('goalWeight')}
            autoFocus
            className="w-16 text-center text-xs sm:text-sm font-bold bg-white rounded border border-[#10B981] py-0.5"
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <div className="flex items-baseline gap-0.5">
            <span className="font-extrabold text-sm sm:text-base text-[#1D543B] leading-tight">
              {profile.goalWeight}
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-[#1D543B]">kg</span>
          </div>
        )}

        {/* Label */}
        <span className="text-[10px] sm:text-[11px] font-medium text-[#7D6F85] mt-0.5 truncate max-w-full">
          Goal Weight
        </span>
      </div>

      {/* 4. Plan Duration Card (Pastel Peach/Amber) */}
      <div
        onClick={() => handleEdit('planDurationWeeks', profile.planDurationWeeks)}
        className="cursor-pointer bg-[#FFF1DE] border border-[#FFE3BF] rounded-2xl p-2.5 sm:p-3.5 flex flex-col items-center justify-center text-center shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all group relative"
      >
        {/* Calendar Icon */}
        <div className="w-8 h-8 rounded-xl bg-white/70 flex items-center justify-center text-[#F59E0B] mb-1.5 shadow-2xs group-hover:scale-105 transition-transform">
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
        </div>

        {/* Value */}
        {editingCard === 'planDurationWeeks' ? (
          <input
            type="number"
            value={tempVal}
            onChange={(e) => setTempVal(e.target.value)}
            onBlur={() => handleSave('planDurationWeeks')}
            onKeyDown={(e) => e.key === 'Enter' && handleSave('planDurationWeeks')}
            autoFocus
            className="w-16 text-center text-xs sm:text-sm font-bold bg-white rounded border border-[#F59E0B] py-0.5"
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <div className="flex items-baseline gap-1">
            <span className="font-extrabold text-sm sm:text-base text-[#644117] leading-tight">
              {profile.planDurationWeeks}
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-[#644117]">Weeks</span>
          </div>
        )}

        {/* Label */}
        <span className="text-[10px] sm:text-[11px] font-medium text-[#7D6F85] mt-0.5 truncate max-w-full">
          Plan Duration
        </span>
      </div>
    </div>
  );
};
