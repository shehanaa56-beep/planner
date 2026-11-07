import React, { useState } from 'react';
import {
  Settings as SettingsIcon,
  User,
  Scale,
  Ruler,
  Target,
  Droplets,
  Moon,
  RotateCcw,
  Save,
  CheckCircle2,
  AlertTriangle,
  Heart,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import { useFitness } from '../context/FitnessContext';

export const Settings = () => {
  const { profile, updateProfile, resetAllData, triggerCelebration } = useFitness();

  const [formData, setFormData] = useState({
    name: profile.name || 'Ananya',
    currentWeight: profile.currentWeight || 56.4,
    height: profile.height || 160,
    goalWeight: profile.goalWeight || 52,
    planDurationWeeks: profile.planDurationWeeks || 12,
    currentWeek: profile.currentWeek || 3,
    dietaryPreference: profile.dietaryPreference || 'all',
    targetWaterMl: profile.targetWaterMl || 2500,
    targetSleepHours: profile.targetSleepHours || 8,
  });

  const [savedSuccess, setSavedSuccess] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'name' || name === 'dietaryPreference' ? value : Number(value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setSavedSuccess(true);
    triggerCelebration();
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleConfirmReset = () => {
    resetAllData();
    setShowResetConfirm(false);
    setFormData({
      name: 'Ananya',
      currentWeight: 56.4,
      height: 160,
      goalWeight: 52,
      planDurationWeeks: 12,
      currentWeek: 3,
      dietaryPreference: 'all',
      targetWaterMl: 2500,
      targetSleepHours: 8,
    });
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="rounded-3xl gradient-pastel-banner p-6 sm:p-8 border border-white/80 shadow-soft">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-white/80 border border-pastel-pink/30 flex items-center justify-center text-pastel-pink-deep">
            <SettingsIcon className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight">
              Settings & Profile
            </h1>
            <p className="text-sm text-charcoal-600 mt-0.5 leading-relaxed">
              Customize your body metrics, goals, water targets, and plan configuration.
            </p>
          </div>
        </div>
      </div>

      {savedSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2.5 animate-in slide-in-from-top-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          <span>Profile changes saved successfully! Your dashboard has been updated.</span>
        </div>
      )}

      {/* Main Settings Form */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white shadow-soft">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Info */}
          <div>
            <h3 className="font-display font-bold text-base text-charcoal-900 mb-4 flex items-center gap-2">
              <User className="w-4 h-4 text-pastel-pink-deep" />
              <span>Personal Profile</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-pink bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1">Dietary Preference</label>
                <select
                  name="dietaryPreference"
                  value={formData.dietaryPreference}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-pink bg-white"
                >
                  <option value="all">Balanced (Both Veg & Non-Veg Kerala staples)</option>
                  <option value="veg">Pure Vegetarian</option>
                  <option value="non-veg">Non-Vegetarian Focused (Fish, Eggs, Chicken)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h3 className="font-display font-bold text-base text-charcoal-900 mb-4 flex items-center gap-2">
              <Scale className="w-4 h-4 text-pastel-lavender-deep" />
              <span>Body Metrics & 12-Week Targets</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1">Current Weight (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  name="currentWeight"
                  value={formData.currentWeight}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-pink bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1">Height (cm)</label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-pink bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1">Optional Goal Weight (kg)</label>
                <input
                  type="number"
                  step="0.5"
                  name="goalWeight"
                  value={formData.goalWeight}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-pink bg-white"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h3 className="font-display font-bold text-base text-charcoal-900 mb-4 flex items-center gap-2">
              <Droplets className="w-4 h-4 text-sky-500" />
              <span>Hydration & Sleep Targets</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1">Daily Water Target (ml)</label>
                <input
                  type="number"
                  step="250"
                  name="targetWaterMl"
                  value={formData.targetWaterMl}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-pink bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1">Nightly Sleep Goal (hrs)</label>
                <input
                  type="number"
                  step="0.5"
                  name="targetSleepHours"
                  value={formData.targetSleepHours}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-pink bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1">Current Active Week (1-12)</label>
                <input
                  type="number"
                  min="1"
                  max="12"
                  name="currentWeek"
                  value={formData.currentWeek}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-pink bg-white"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-charcoal-900 text-white font-semibold text-sm hover:bg-charcoal-800 transition-all shadow-md active:scale-95"
            >
              <Save className="w-4 h-4 text-pastel-pink" />
              <span>Save Profile Changes</span>
            </button>
          </div>
        </form>
      </div>

      {/* Danger Zone: Data Reset */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-rose-200/60 shadow-soft bg-rose-50/20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-display font-bold text-base text-rose-900 flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-rose-500" />
              <span>Reset Application Data</span>
            </h3>
            <p className="text-xs text-charcoal-600 mt-1 max-w-xl leading-relaxed">
              Clears all local storage including completed workouts, meals, water logs, and period records, returning to fresh initial state.
            </p>
          </div>

          <button
            onClick={() => setShowResetConfirm(true)}
            className="px-4 py-2.5 rounded-2xl bg-white border border-rose-300 text-rose-600 text-xs font-semibold hover:bg-rose-50 transition-colors shadow-2xs self-start sm:self-auto"
          >
            Reset All Data
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showResetConfirm && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowResetConfirm(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-sm w-full p-6 border border-white shadow-2xl animate-in zoom-in-95 duration-200 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-3">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <h3 className="font-display font-bold text-lg text-charcoal-900 mb-1">
              Reset All Progress?
            </h3>
            <p className="text-xs text-charcoal-600 mb-6 leading-relaxed">
              This will clear your logged workouts, meals, water entries, and restore initial defaults. This action cannot be undone.
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 py-2.5 rounded-xl bg-gray-100 text-charcoal-700 font-semibold text-xs hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmReset}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 text-white font-semibold text-xs hover:bg-rose-700 transition-colors shadow-xs"
              >
                Yes, Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
