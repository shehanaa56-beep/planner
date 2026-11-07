import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  Filter,
  Dumbbell,
  AlertTriangle,
  CheckCircle2,
  X,
  Sparkles,
  Info,
  Clock,
  Layers
} from 'lucide-react';
import { EXERCISE_LIBRARY, EXERCISE_CATEGORIES } from '../data/exerciseLibrary';

export const ExerciseLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModalExercise, setSelectedModalExercise] = useState(null);

  // Filter exercises
  const filteredExercises = useMemo(() => {
    return EXERCISE_LIBRARY.filter(exercise => {
      const matchesCategory = selectedCategory === 'all' || exercise.category === selectedCategory;
      const matchesSearch =
        exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exercise.muscleGroup.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="rounded-3xl gradient-pastel-banner p-6 sm:p-8 border border-white/80 shadow-soft">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-pastel-pink/30 text-pastel-pink-deep text-xs font-semibold mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Reference & Form Guide</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight">
              Exercise Library
            </h1>
            <p className="text-sm text-charcoal-600 mt-1 max-w-2xl leading-relaxed">
              Explore step-by-step technique guides, target muscle groups, and common form mistakes to avoid during your gym workouts.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white/80 px-4 py-2.5 rounded-2xl border border-white shadow-xs self-start md:self-auto text-xs font-bold text-charcoal-700">
            <Layers className="w-4 h-4 text-pastel-lavender-deep" />
            <span>{EXERCISE_LIBRARY.length} Curated Exercises</span>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search exercise by name or muscle (e.g., Lat, Glutes, Squat)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/90 border border-pastel-pink/30 text-xs sm:text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-pastel-pink shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {EXERCISE_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                isSelected
                  ? 'bg-charcoal-900 text-white border-charcoal-900 shadow-sm scale-102'
                  : 'bg-white/80 hover:bg-white text-charcoal-600 border-gray-100 hover:border-pastel-pink/30'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Exercises Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredExercises.map((exercise) => (
          <div
            key={exercise.id}
            onClick={() => setSelectedModalExercise(exercise)}
            className="glass-card rounded-3xl overflow-hidden border border-white hover:border-pastel-pink/50 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              {/* Image banner with badges */}
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <img
                  src={exercise.image}
                  alt={exercise.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />

                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-charcoal-800 shadow-xs">
                    {exercise.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-pastel-pink-deep text-white shadow-xs">
                    {exercise.difficulty}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-display font-bold text-lg leading-snug drop-shadow-sm">
                    {exercise.name}
                  </h3>
                </div>
              </div>

              {/* Body info */}
              <div className="p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between text-xs text-charcoal-500">
                  <span className="flex items-center gap-1">
                    <Dumbbell className="w-3.5 h-3.5 text-pastel-pink-deep" />
                    {exercise.setsReps}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-sky-500" />
                    Rest: {exercise.restTime}
                  </span>
                </div>

                <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed">
                  {exercise.description}
                </p>

                <div className="p-2.5 rounded-xl bg-pastel-pink-light/40 border border-pastel-pink/20 text-[11px] text-charcoal-700">
                  <strong className="text-pastel-pink-deep font-semibold">Muscles:</strong> {exercise.muscleGroup}
                </div>
              </div>
            </div>

            {/* Card Footer Button */}
            <div className="px-5 pb-5 pt-0">
              <button
                type="button"
                className="w-full py-2.5 rounded-xl bg-charcoal-900 text-white text-xs font-semibold hover:bg-charcoal-800 transition-colors shadow-2xs group-hover:bg-pastel-pink-deep"
              >
                View Instructions & Form Guide
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredExercises.length === 0 && (
        <div className="glass-card rounded-3xl p-12 text-center border border-white">
          <Dumbbell className="w-12 h-12 text-charcoal-300 mx-auto mb-3" />
          <h3 className="font-display font-bold text-lg text-charcoal-800">No exercises found</h3>
          <p className="text-xs text-charcoal-500 mt-1">Try adjusting your search keywords or clearing filters.</p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="mt-4 px-4 py-2 rounded-xl bg-pastel-pink-deep text-white text-xs font-semibold shadow-xs"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Detailed Exercise Modal */}
      {selectedModalExercise && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedModalExercise(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-100">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-pastel-pink-subtle text-pastel-pink-deep">
                    {selectedModalExercise.category}
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-pastel-lavender-subtle text-pastel-lavender-deep">
                    {selectedModalExercise.difficulty}
                  </span>
                </div>
                <h2 className="font-display font-extrabold text-2xl text-charcoal-900">
                  {selectedModalExercise.name}
                </h2>
                <p className="text-xs text-charcoal-500 mt-0.5">
                  Target: <strong className="text-charcoal-700">{selectedModalExercise.muscleGroup}</strong>
                </p>
              </div>

              <button
                onClick={() => setSelectedModalExercise(null)}
                className="p-2 rounded-full hover:bg-gray-100 text-charcoal-400 hover:text-charcoal-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Hero Image */}
            <div className="my-5 h-56 rounded-2xl overflow-hidden border border-gray-100 shadow-sm relative">
              <img
                src={selectedModalExercise.image}
                alt={selectedModalExercise.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Exercise Details Grid */}
            <div className="grid grid-cols-3 gap-2.5 mb-6 text-center">
              <div className="p-3 rounded-2xl bg-pastel-pink-light/60 border border-pastel-pink/30">
                <span className="text-[10px] text-charcoal-400 uppercase font-semibold">Sets & Reps</span>
                <p className="text-xs sm:text-sm font-bold text-charcoal-900 mt-0.5">{selectedModalExercise.setsReps}</p>
              </div>
              <div className="p-3 rounded-2xl bg-pastel-blue-light/60 border border-pastel-blue/30">
                <span className="text-[10px] text-charcoal-400 uppercase font-semibold">Rest Between Sets</span>
                <p className="text-xs sm:text-sm font-bold text-sky-700 mt-0.5">{selectedModalExercise.restTime}</p>
              </div>
              <div className="p-3 rounded-2xl bg-pastel-lavender-light/60 border border-pastel-lavender/30">
                <span className="text-[10px] text-charcoal-400 uppercase font-semibold">Equipment</span>
                <p className="text-xs sm:text-sm font-bold text-purple-700 mt-0.5">{selectedModalExercise.equipment}</p>
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="space-y-3 mb-6">
              <h4 className="font-display font-bold text-sm text-charcoal-900 flex items-center gap-2">
                <Info className="w-4 h-4 text-pastel-pink-deep" />
                <span>Step-by-Step Instructions:</span>
              </h4>
              <div className="space-y-2">
                {selectedModalExercise.instructions.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-charcoal-700">
                    <span className="w-5 h-5 rounded-full bg-pastel-pink-light flex items-center justify-center font-bold text-pastel-pink-deep shrink-0 text-[11px]">
                      {idx + 1}
                    </span>
                    <p className="leading-relaxed mt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Tips */}
            {selectedModalExercise.tips && (
              <div className="mb-5 p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 text-xs text-emerald-900">
                <strong className="font-semibold">💡 Coach's Tip: </strong>
                {selectedModalExercise.tips}
              </div>
            )}

            {/* Common Mistakes to Avoid */}
            <div className="space-y-2 mb-6">
              <h4 className="font-display font-bold text-sm text-rose-800 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-500" />
                <span>Common Mistakes to Avoid:</span>
              </h4>
              <ul className="space-y-1.5 list-disc list-inside text-xs text-rose-950/80 bg-rose-50/60 p-3.5 rounded-2xl border border-rose-100">
                {selectedModalExercise.mistakes.map((mistake, mIdx) => (
                  <li key={mIdx}>{mistake}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setSelectedModalExercise(null)}
              className="w-full py-3 rounded-2xl bg-charcoal-900 text-white font-semibold text-xs sm:text-sm hover:bg-charcoal-800 transition-colors"
            >
              Close Guide
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
