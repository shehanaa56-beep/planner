import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from 'recharts';
import { TrendingUp, BarChart3 } from 'lucide-react';
import { useFitness } from '../../context/FitnessContext';

export const ProgressOverviewChart = () => {
  const { weeklyMatrix } = useFitness();

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-pastel-pink/30 shadow-lg text-xs space-y-1">
          <p className="font-bold text-charcoal-900 border-b pb-1 mb-1">{label}'s Completion</p>
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-1.5" style={{ color: entry.color }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                {entry.name}:
              </span>
              <span className="font-bold text-charcoal-800">{entry.value}%</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="glass-card rounded-3xl p-5 sm:p-6 border border-white shadow-soft">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-pastel-pink-subtle flex items-center justify-center text-pastel-pink-deep">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-charcoal-900">Weekly Progress Overview</h3>
            <p className="text-xs text-charcoal-500">Workout, Nutrition & Hydration Consistency</p>
          </div>
        </div>

        {/* Legend pills */}
        <div className="flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1 text-charcoal-600 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-pastel-pink" />
            Workouts
          </span>
          <span className="flex items-center gap-1 text-charcoal-600 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            Meals
          </span>
          <span className="flex items-center gap-1 text-charcoal-600 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
            Water
          </span>
        </div>
      </div>

      <div className="h-64 sm:h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyMatrix} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0EAF5" />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#7B778D', fontSize: 12, fontWeight: 500 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#7B778D', fontSize: 11 }}
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              unit="%"
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="workout" name="Workouts" fill="#F4A7C3" radius={[6, 6, 0, 0]} maxBarSize={16} />
            <Bar dataKey="meals" name="Meals" fill="#34D399" radius={[6, 6, 0, 0]} maxBarSize={16} />
            <Bar dataKey="water" name="Water" fill="#38BDF8" radius={[6, 6, 0, 0]} maxBarSize={16} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
