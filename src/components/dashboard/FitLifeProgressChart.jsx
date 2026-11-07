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
import { BarChart2, ChevronDown, Sparkles } from 'lucide-react';

export const FitLifeProgressChart = () => {
  const [timeRange, setTimeRange] = useState('Last 4 Weeks');
  const [showRangeDropdown, setShowRangeDropdown] = useState(false);

  // Data matching the exact screenshot:
  // W1 (~54.8kg), W2 (~56.2kg), W3 (~56.6kg), W4 (56.4kg)
  const chartData = [
    { week: 'W1', weight: 54.8 },
    { week: 'W2', weight: 56.2 },
    { week: 'W3', weight: 56.6 },
    { week: 'W4', weight: 56.4 },
  ];

  const ranges = ['Last 4 Weeks', 'Last 8 Weeks', '12-Week Journey'];

  // Custom Dot renderer to highlight W4 with the exact pink pill callout "56.4 kg"
  const renderCustomizedDot = (props) => {
    const { cx, cy, index, payload } = props;

    // Is the last point (W4)
    if (index === chartData.length - 1) {
      return (
        <g key={`dot-${index}`}>
          {/* Subtle outer pulsing ring */}
          <circle cx={cx} cy={cy} r={6.5} fill="#FF4D8D" opacity={0.3} />
          {/* Solid Hot-Pink Dot */}
          <circle cx={cx} cy={cy} r={4.5} fill="#FF4D8D" stroke="#FFFFFF" strokeWidth={2} />

          {/* Floating Pink Pill Badge "56.4 kg" matching screenshot */}
          <g transform={`translate(${cx - 36}, ${cy - 28})`}>
            {/* Pill Container */}
            <rect
              width="72"
              height="22"
              rx="11"
              fill="#FF4D8D"
              className="drop-shadow-xs"
            />
            {/* Text inside badge */}
            <text
              x="36"
              y="14"
              fill="#FFFFFF"
              fontSize="11"
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              56.4 kg
            </text>
          </g>
        </g>
      );
    }

    // Intermediate points W1, W2, W3
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

      {/* Chart Area */}
      <div className="h-44 sm:h-48 w-full -ml-3 sm:-ml-2 pt-2 relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 25, right: 28, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id="pinkGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF4D8D" stopOpacity={0.22} />
                <stop offset="90%" stopColor="#FF4D8D" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            {/* Subtle horizontal grid lines at 58, 56, 54, 52 */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F5EEF8" />

            <XAxis
              dataKey="week"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#7D7087', fontSize: 11, fontWeight: 500 }}
              dy={6}
            />

            <YAxis
              domain={[51, 59]}
              ticks={[52, 54, 56, 58]}
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

        {/* Golden Sparkles Doodle ✨ on bottom-right matching screenshot */}
        <div className="absolute bottom-6 right-2 flex flex-col items-center pointer-events-none select-none text-amber-400">
          <span className="text-sm">✦</span>
          <span className="text-[10px] -mt-1 ml-2">✧</span>
        </div>
      </div>
    </div>
  );
};
