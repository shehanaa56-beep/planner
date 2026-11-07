import React, { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';
import { BarChart2, ChevronDown, Sparkles, Scale, TrendingDown } from 'lucide-react';
import { useFitness } from '../../context/FitnessContext';

export const FitLifeProgressChart = () => {
  const { profile, weightHistory } = useFitness();
  const [timeRange, setTimeRange] = useState('12-Week Journey');
  const [showRangeDropdown, setShowRangeDropdown] = useState(false);

  const currentWeight = profile.currentWeight || 56.4;
  const goalWeight = profile.goalWeight || 52;

  // Actual logged history or initial Week 1 baseline
  const chartData = (weightHistory && weightHistory.length > 0)
    ? weightHistory.map(entry => ({
        week: entry.week || 'W1',
        weight: Number(entry.weight)
      }))
    : [{ week: 'W1', weight: currentWeight }];

  const ranges = ['12-Week Journey', 'Last 4 Weeks', 'Last 8 Weeks'];

  // Custom Dot renderer to highlight the latest point with the pink pill callout
  const renderCustomizedDot = (props) => {
    const { cx, cy, index, payload } = props;

    // Is the last point
    if (index === chartData.length - 1) {
      const displayVal = `${payload.weight || currentWeight} kg`;
      return (
        <g key={`dot-${index}`}>
          {/* Subtle outer pulsing ring */}
          <circle cx={cx} cy={cy} r={6.5} fill="#FF4D8D" opacity={0.3} />
          {/* Solid Hot-Pink Dot */}
          <circle cx={cx} cy={cy} r={4.5} fill="#FF4D8D" stroke="#FFFFFF" strokeWidth={2} />

          {/* Floating Pink Pill Badge matching screenshot */}
          <g transform={`translate(${cx - 36}, ${cy - 28})`}>
            <rect
              width="72"
              height="22"
              rx="11"
              fill="#FF4D8D"
              className="drop-shadow-xs"
            />
            <text
              x="36"
              y="14"
              fill="#FFFFFF"
              fontSize="11"
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {displayVal}
            </text>
          </g>
        </g>
      );
    }

    // Intermediate points
    return (
      <circle
        key={`dot-${index}`}
        cx={cx}
        cy={cy}
        r={3.5}
        fill="#FF4D8D"
        stroke="#FFFFFF"
        strokeWidth={1.5}
      />
    );
  };

  return (
    <div className="bg-white/95 rounded-[26px] p-4 sm:p-5 border border-pink-100/70 shadow-2xs relative">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-2">
        {/* Left: Bar Chart Icon + Title */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center text-[#8B5CF6]">
            <BarChart2 className="w-5 h-5 stroke-[2.4]" />
          </div>
          <h3 className="font-bold text-sm sm:text-base text-[#2D2335]">
            Your Progress
          </h3>
        </div>

        {/* Right: Dropdown Button */}
        <div className="relative">
          <button
            onClick={() => setShowRangeDropdown(!showRangeDropdown)}
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-gray-200 text-[11px] sm:text-xs text-[#6B5E75] font-semibold hover:border-pink-200 transition-colors shadow-2xs"
          >
            <span>{timeRange}</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
          </button>

          {showRangeDropdown && (
            <div className="absolute right-0 top-8 bg-white rounded-xl shadow-lg border border-pink-100 py-1 w-36 z-20 animate-in fade-in duration-100">
              {ranges.map((r) => (
                <button
                  key={r}
                  onClick={() => {
                    setTimeRange(r);
                    setShowRangeDropdown(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs ${
                    timeRange === r
                      ? 'text-[#FF4D8D] font-bold bg-pink-50'
                      : 'text-charcoal-700 hover:bg-gray-50'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chart Area or Week 1 Starting Card */}
      {chartData.length === 1 ? (
        <div className="py-4 px-3 rounded-2xl bg-gradient-to-br from-[#FFF5F8] to-[#F8F2FF] border border-pink-100/80 my-2 text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#FF4D8D]">
            <Sparkles className="w-4 h-4" />
            <span>Week 1 Started • Baseline Logged</span>
          </div>
          <div className="flex items-center justify-center gap-6 py-1">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#7A6B80] block">Current</span>
              <span className="text-xl font-extrabold text-[#2D2335]">{currentWeight} kg</span>
            </div>
            <div className="w-px h-8 bg-pink-200" />
            <div>
              <span className="text-[10px] uppercase font-bold text-[#7A6B80] block">Target Goal</span>
              <span className="text-xl font-extrabold text-emerald-600">{goalWeight} kg</span>
            </div>
          </div>
          <p className="text-[11px] text-[#7A6B80] max-w-xs mx-auto">
            Log your weekly weight check-ins in the <strong>Progress</strong> tab to watch your real curve appear here.
          </p>
        </div>
      ) : (
        <div className="h-44 sm:h-48 w-full -ml-3 sm:-ml-2 pt-2 relative">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 25, right: 28, left: 0, bottom: 5 }}>
              <defs>
                <linearGradient id="pinkGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF4D8D" stopOpacity={0.22} />
                  <stop offset="90%" stopColor="#FF4D8D" stopOpacity={0.02} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F5EEF8" />

              <XAxis
                dataKey="week"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#7D7087', fontSize: 11, fontWeight: 500 }}
                dy={6}
              />

              <YAxis
                domain={['auto', 'auto']}
                unit="kg"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9E94A8', fontSize: 11 }}
                width={42}
              />

              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white/95 backdrop-blur-xs px-2.5 py-1.5 rounded-xl border border-pink-100 shadow-md text-xs font-bold text-[#FF4D8D]">
                        {payload[0].payload.week}: {payload[0].value} kg
                      </div>
                    );
                  }
                  return null;
                }}
              />

              <Area
                type="monotone"
                dataKey="weight"
                stroke="#FF4D8D"
                strokeWidth={2.4}
                fill="url(#pinkGradient)"
                dot={renderCustomizedDot}
                activeDot={{ r: 5, fill: '#FF4D8D', stroke: '#FFFFFF', strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>

          {/* Golden Sparkles Doodle ✨ on bottom-right */}
          <div className="absolute bottom-6 right-2 flex flex-col items-center pointer-events-none select-none text-amber-400">
            <span className="text-sm">✦</span>
            <span className="text-[10px] -mt-1 ml-2">✧</span>
          </div>
        </div>
      )}
    </div>
  );
};
