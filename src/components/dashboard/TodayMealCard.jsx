import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Utensils, CheckCircle2, Circle, Clock, ArrowRight, Sparkles, ChefHat } from 'lucide-react';
import { useFitness } from '../../context/FitnessContext';
import { MEAL_PLAN_DATA } from '../../data/dietPlan';

export const TodayMealCard = () => {
  const { mealCompletion, toggleMeal, getDailyMealPercentage } = useFitness();
  const navigate = useNavigate();
  const completionPct = getDailyMealPercentage();

  // Preview the first 4 key meals or all with clean scroll
  const displayedMeals = MEAL_PLAN_DATA.slice(0, 4);

  return (
    <div className="glass-card rounded-3xl p-5 sm:p-6 border border-white shadow-soft flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-pastel-green-light border border-pastel-green/40 flex items-center justify-center text-emerald-600">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-charcoal-900">Today's Meals</h3>
              <p className="text-xs text-charcoal-500">Affordable Kerala & Indian Diet</p>
            </div>
          </div>

          <button
            onClick={() => navigate('/diet')}
            className="text-xs font-semibold text-emerald-600 hover:text-charcoal-900 inline-flex items-center gap-1 transition-colors"
          >
            <span>All 8 Meals</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Philosophy Badge */}
        <div className="p-3 rounded-2xl bg-gradient-to-r from-pastel-green-light/70 via-pastel-yellow-light/60 to-pastel-blue-light/70 border border-white/80 mb-4">
          <div className="flex items-center gap-2">
            <ChefHat className="w-4 h-4 text-emerald-700 shrink-0" />
            <p className="text-xs text-charcoal-700 font-medium leading-relaxed">
              Wholesome Matta rice, fresh fish/eggs, thoran & dals. Sufficient nutrition without strict restriction.
            </p>
          </div>
        </div>

        {/* Meal Items */}
        <div className="space-y-2.5 mb-4">
          {displayedMeals.map((meal) => {
            const isCompleted = !!mealCompletion[meal.id];

            return (
              <div
                key={meal.id}
                onClick={() => toggleMeal(meal.id)}
                className={`cursor-pointer flex items-center justify-between p-3 rounded-2xl border transition-all duration-200 group ${
                  isCompleted
                    ? 'bg-pastel-green-light/40 border-pastel-green text-charcoal-700'
                    : 'bg-white/80 hover:bg-white border-gray-100 hover:border-pastel-green/40 text-charcoal-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="transition-transform group-hover:scale-110 shrink-0"
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-100" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-300 group-hover:text-emerald-500" />
                    )}
                  </button>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">{meal.time}</span>
                      <span className="text-[10px] text-charcoal-300">•</span>
                      <span className="text-xs font-semibold text-charcoal-700 truncate">{meal.title}</span>
                    </div>
                    <h5 className={`text-sm font-semibold truncate ${isCompleted ? 'line-through text-charcoal-400' : 'text-charcoal-900'}`}>
                      {meal.defaultMeal}
                    </h5>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[11px] font-bold text-charcoal-600 px-2 py-0.5 rounded-full bg-pastel-yellow-light border border-pastel-yellow/40">
                    {meal.calories}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Footer */}
      <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-charcoal-500">
        <span>Completion: <strong className="text-charcoal-800">{completionPct}%</strong></span>
        <button
          onClick={() => navigate('/diet')}
          className="text-xs font-semibold text-emerald-600 hover:underline"
        >
          View Recipes & Swaps →
        </button>
      </div>
    </div>
  );
};
