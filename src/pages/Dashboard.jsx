import React from 'react';
import { FitLifeHeroBanner } from '../components/dashboard/FitLifeHeroBanner';
import { FitLifeMetricCards } from '../components/dashboard/FitLifeMetricCards';
import { FitLifeActivityCards } from '../components/dashboard/FitLifeActivityCards';
import { FitLifeProgressChart } from '../components/dashboard/FitLifeProgressChart';
import { FitLifeTodayPlan } from '../components/dashboard/FitLifeTodayPlan';
import { FitLifeQuickActions } from '../components/dashboard/FitLifeQuickActions';
import { FitLifeMotivationalBanner } from '../components/dashboard/FitLifeMotivationalBanner';

export const Dashboard = () => {
  return (
    <div className="space-y-4 sm:space-y-5 animate-in fade-in duration-300 pb-2">
      {/* 1. Motivational Hero Banner with Athlete & Cursive Headline */}
      <FitLifeHeroBanner />

      {/* 2. Four Key Metric Cards (Weight, Height, Goal, Duration) */}
      <FitLifeMetricCards />

      {/* 3. Two Activity Cards (Weekly Workout & Diet Plan Progress) */}
      <FitLifeActivityCards />

      {/* 4. Your Progress Line Area Chart (W1-W4 with 56.4 kg callout) */}
      <FitLifeProgressChart />

      {/* 5. Today's Plan (Gym Workout & Meal Plan) */}
      <FitLifeTodayPlan />

      {/* 6. Eight Quick Action Pastel Buttons Grid */}
      <FitLifeQuickActions />

      {/* 7. Motivational Quote Banner */}
      <FitLifeMotivationalBanner />
    </div>
  );
};
