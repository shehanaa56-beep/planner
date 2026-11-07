import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dumbbell, CheckCircle2, Circle, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { useFitness } from '../../context/FitnessContext';
import { WEEKLY_WORKOUT_SCHEDULE, DAYS_ORDER } from '../../data/workoutPlan';

export const TodayWorkoutCard = () => {
  const {
    selectedDay,
    setSelectedDay,
    workoutCompletion,
    toggleExercise,
    getDayWorkoutPercentage
  } = useFitness();
  const navigate = useNavigate();

  const currentWorkout = WEEKLY_WORKOUT_SCHEDULE[selectedDay] || WEEKLY_WORKOUT_SCHEDULE.monday;
  const dayProgress = workoutCompletion[selectedDay] || {};
  const completionPct = getDayWorkoutPercentage(selectedDay);

  return (
    <div className="glass-card rounded-3xl p-5 sm:p-6 border border-white shadow-soft flex flex-col justify-between">
      <div>
        {/* Day Selector Tabs */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-pastel-pink-light border border-pastel-pink/40 flex items-center justify-center text-pastel-pink-deep">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-charcoal-900">Workout Plan</h3>
              <p className="text-xs text-charcoal-500">Weekly Split</p>
            </div>
          </div>

          <button
            onClick={() => navigate('/workouts')}
            className="text-xs font-semibold text-pastel-pink-deep hover:text-charcoal-900 inline-flex items-center gap-1 transition-colors"
          >
            <span>Full Planner</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Days of Week Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none mb-4">
          {DAYS_ORDER.map((dayKey) => {
            const dayData = WEEKLY_WORKOUT_SCHEDULE[dayKey];
            const isSelected = selectedDay === dayKey;
            const pct = getDayWorkoutPercentage(dayKey);
            const shortName = dayData.dayName.slice(0, 3);

            return (
              <button
                key={dayKey}
                onClick={() => setSelectedDay(dayKey)}
                className={`flex-1 min-w-[48px] py-2 px-1.5 rounded-2xl text-center transition-all duration-200 border ${
                  isSelected
                    ? 'bg-charcoal-900 text-white border-charcoal-900 shadow-sm scale-102 font-bold'
                    : 'bg-white/70 hover:bg-white text-charcoal-600 border-gray-100 hover:border-pastel-pink/40'
                }`}
              >
                <div className="text-[11px] uppercase tracking-wider">{shortName}</div>
                <div className={`text-[10px] mt-0.5 font-semibold ${isSelected ? 'text-pastel-pink' : pct === 100 ? 'text-emerald-500' : 'text-charcoal-400'}`}>
                  {pct}%
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Day Info Card */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-pastel-pink-light/70 to-pastel-lavender-light/70 border border-white/80 mb-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-pastel-pink-deep">
                {currentWorkout.dayName} • {currentWorkout.category}
              </span>
              <h4 className="font-display font-bold text-base text-charcoal-900">{currentWorkout.title}</h4>
              <p className="text-xs text-charcoal-600 mt-0.5">{currentWorkout.tagline}</p>
            </div>
            <div className="text-right shrink-0">
              <span className="inline-flex items-center gap-1 text-xs text-charcoal-500 font-medium">
                <Clock className="w-3.5 h-3.5" />
                {currentWorkout.estTime}
              </span>
            </div>
          </div>
        </div>

        {/* Exercises Checklist */}
        <div className="space-y-2 mb-4">
          {currentWorkout.exercises.map((exercise) => {
            const isCompleted = !!dayProgress[exercise.id];

            return (
              <div
                key={exercise.id}
                onClick={() => toggleExercise(selectedDay, exercise.id)}
                className={`cursor-pointer flex items-center justify-between p-3 rounded-2xl border transition-all duration-200 group ${
                  isCompleted
                    ? 'bg-pastel-green-light/40 border-pastel-green text-charcoal-700'
                    : 'bg-white/80 hover:bg-white border-gray-100 hover:border-pastel-pink/40 text-charcoal-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="transition-transform group-hover:scale-110"
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-100" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-300 group-hover:text-pastel-pink" />
                    )}
                  </button>
                  <div>
                    <h5 className={`text-sm font-semibold ${isCompleted ? 'line-through text-charcoal-400' : 'text-charcoal-900'}`}>
                      {exercise.name}
                    </h5>
                    <p className="text-xs text-charcoal-500">
                      {exercise.sets} sets × {exercise.reps} • <span className="text-charcoal-400">{exercise.targetMuscle}</span>
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-pastel-pink-subtle/50 text-charcoal-600">
                  {exercise.difficulty}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Footer */}
      <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-charcoal-500">
        <span>Completion: <strong className="text-charcoal-800">{completionPct}%</strong></span>
        <button
          onClick={() => navigate('/workouts')}
          className="text-xs font-semibold text-pastel-pink-deep hover:underline"
        >
          View Form Guides & Timer →
        </button>
      </div>
    </div>
  );
};
