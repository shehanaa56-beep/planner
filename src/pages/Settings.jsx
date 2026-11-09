import React, { useState, useRef } from 'react';
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
  Sparkles,
  Camera,
  Trash2,
  FileDown,
  Download
} from 'lucide-react';
import { useFitness } from '../context/FitnessContext';
import { generatePdfReport } from '../utils/generatePdfReport';

export const Settings = () => {
  const {
    profile,
    updateProfile,
    resetAllData,
    triggerCelebration,
    weightHistory,
    wellnessLogs,
    workoutCompletion,
    dietDayTicks,
    periodData,
    dailyHabits
  } = useFitness();

  const fileInputRef = useRef(null);
  const [downloadingPdf, setDownloadingPdf] = useState(false);

  const [formData, setFormData] = useState({
    name: profile.name || 'Ananya',
    currentWeight: profile.currentWeight || 56.4,
    height: profile.height || 160,
    goalWeight: profile.goalWeight || 52,
    planDurationWeeks: profile.planDurationWeeks || 12,
    currentWeek: profile.currentWeek || 1,
    dietaryPreference: profile.dietaryPreference || 'all',
    targetWaterMl: profile.targetWaterMl || 2500,
    targetSleepHours: profile.targetSleepHours || 8,
    avatar: profile.avatar || null,
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

  // Convert uploaded image to compressed Base64
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        // Draw onto a canvas to resize to 240x240 max
        const canvas = document.createElement('canvas');
        const MAX_SIZE = 240;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_SIZE) {
            height = Math.round((height * MAX_SIZE) / width);
            width = MAX_SIZE;
          }
        } else {
          if (height > MAX_SIZE) {
            width = Math.round((width * MAX_SIZE) / height);
            height = MAX_SIZE;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const base64Data = canvas.toDataURL('image/jpeg', 0.85);
        setFormData(prev => ({ ...prev, avatar: base64Data }));
        updateProfile({ avatar: base64Data });
        triggerCelebration();
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveAvatar = () => {
    setFormData(prev => ({ ...prev, avatar: null }));
    updateProfile({ avatar: null });
  };

  const handleDownloadPdf = () => {
    try {
      setDownloadingPdf(true);
      generatePdfReport({
        profile: { ...profile, ...formData },
        weightHistory,
        wellnessLogs,
        workoutCompletion,
        dietDayTicks,
        periodData,
        dailyHabits
      });
      triggerCelebration();
    } catch (err) {
      console.error('Failed to generate PDF', err);
      alert('Could not generate PDF report. Please try again.');
    } finally {
      setTimeout(() => setDownloadingPdf(false), 1500);
    }
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
      currentWeek: 1,
      dietaryPreference: 'all',
      targetWaterMl: 2500,
      targetSleepHours: 8,
      avatar: null,
    });
  };

  const defaultAvatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80";

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
              Upload your photo, configure targets, and download your complete report.
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

      {/* PDF Export Action Card */}
      <div className="bg-gradient-to-r from-[#FFF0F6] via-[#FAF5FF] to-[#E8F8EE] rounded-3xl p-5 sm:p-6 border border-pink-200/80 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold text-[#FF4D8D]">
            <Sparkles className="w-4 h-4" />
            <span>Official Progress Report</span>
          </div>
          <h2 className="font-extrabold text-base sm:text-lg text-[#2D2335]">
            Download Health &amp; Progress Report (PDF)
          </h2>
          <p className="text-xs text-charcoal-600 max-w-md leading-relaxed">
            Includes your photo, starting vs current weight, 12-week weight progression, workouts completed, diet followed, and face massage history with dates.
          </p>
        </div>

        <button
          type="button"
          onClick={handleDownloadPdf}
          disabled={downloadingPdf}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#FF4D8D] to-[#F43F5E] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg active:scale-95 transition-all shrink-0 disabled:opacity-75"
        >
          <FileDown className="w-4 h-4 stroke-[2.5]" />
          <span>{downloadingPdf ? 'Generating PDF...' : 'Download PDF Report'}</span>
        </button>
      </div>

      {/* Main Settings Form */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white shadow-soft">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Photo Upload */}
          <div>
            <h3 className="font-display font-bold text-base text-charcoal-900 mb-3 flex items-center gap-2">
              <Camera className="w-4 h-4 text-pastel-pink-deep" />
              <span>Profile Image (Base64)</span>
            </h3>

            <div className="flex items-center gap-4 p-3 rounded-2xl bg-gray-50/80 border border-gray-100">
              {/* Avatar Preview */}
              <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border-2 border-pink-200 shadow-2xs relative bg-white">
                <img
                  src={formData.avatar || defaultAvatar}
                  alt={formData.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Upload & Remove Buttons */}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-[#2D2335]">
                  {formData.avatar ? 'Custom Photo Uploaded ✓' : 'Add Your Photo'}
                </p>
                <p className="text-[11px] text-gray-500 mb-2">
                  Photo is saved as Base64 and included in your report.
                </p>

                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3 py-1.5 rounded-xl bg-charcoal-900 text-white font-bold text-xs hover:bg-black transition-all flex items-center gap-1.5 shadow-2xs"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Upload Photo</span>
                  </button>

                  {formData.avatar && (
                    <button
                      type="button"
                      onClick={handleRemoveAvatar}
                      className="px-2.5 py-1.5 rounded-xl border border-gray-200 text-gray-500 hover:text-red-500 hover:bg-red-50 font-semibold text-xs transition-colors flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Personal Info */}
          <div className="border-t border-gray-100 pt-6">
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
                <label className="block text-xs font-semibold text-charcoal-700 mb-1">Goal Weight (kg)</label>
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
