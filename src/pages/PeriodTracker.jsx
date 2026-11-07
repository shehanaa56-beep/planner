import React, { useState } from 'react';
import {
  HeartHandshake,
  Calendar,
  Sparkles,
  AlertCircle,
  Plus,
  Heart,
  Droplet,
  Activity,
  ShieldCheck,
  Check
} from 'lucide-react';
import { useFitness } from '../context/FitnessContext';

export const PeriodTracker = () => {
  const { periodData, addPeriodLog } = useFitness();

  const [showLogModal, setShowLogModal] = useState(false);
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
  const [flow, setFlow] = useState('Medium');
  const [cycleLength, setCycleLength] = useState(28);
  const [selectedSymptoms, setSelectedSymptoms] = useState(['Mild Cramps']);
  const [logNotes, setLogNotes] = useState('');

  const toggleSymptom = (sym) => {
    setSelectedSymptoms(prev =>
      prev.includes(sym) ? prev.filter(s => s !== sym) : [...prev, sym]
    );
  };

  const handleSavePeriod = (e) => {
    e.preventDefault();
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const durationDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1);

    addPeriodLog({
      startDate,
      endDate,
      flow,
      cycleLength: Number(cycleLength),
      duration: durationDays,
      symptoms: selectedSymptoms,
      notes: logNotes || 'Hydrated well & listened to my body.'
    });

    setShowLogModal(false);
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="rounded-3xl gradient-pastel-banner p-6 sm:p-8 border border-white/80 shadow-soft">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-pastel-pink/30 text-pastel-pink-deep text-xs font-semibold mb-2">
              <Heart className="w-3.5 h-3.5 fill-pastel-pink" />
              <span>Cycle Awareness & Hormone Care</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight">
              Menstrual Health Tracker
            </h1>
            <p className="text-sm text-charcoal-600 mt-1 max-w-2xl leading-relaxed">
              Track your natural cycle rhythms, log symptoms gently, and tailor your workouts to honor your body's energy phases.
            </p>
          </div>

          <button
            onClick={() => setShowLogModal(true)}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-charcoal-900 text-white text-xs sm:text-sm font-semibold hover:bg-charcoal-800 transition-all shadow-md active:scale-95 self-start md:self-auto"
          >
            <Plus className="w-4 h-4 text-pastel-pink" />
            <span>Log Period Cycle</span>
          </button>
        </div>

        {/* REQUIRED EXACT MEDICAL DISCLAIMER */}
        <div className="mt-6 p-4 rounded-2xl bg-white/90 border border-pastel-pink/40 shadow-xs flex items-start gap-3.5">
          <HeartHandshake className="w-6 h-6 text-pastel-pink-deep shrink-0 mt-0.5" />
          <div className="text-xs text-charcoal-700 leading-relaxed space-y-1">
            <p className="font-bold text-charcoal-900">Important Medical Reminder:</p>
            <p className="italic text-charcoal-600">
              "Your health comes first. Adequate nutrition, sufficient recovery, and balanced exercise are important for menstrual health. Persistent changes in your cycle should be discussed with a healthcare professional."
            </p>
            <p className="text-[11px] text-charcoal-400">
              Note: This tool is for personal tracking only and does not diagnose conditions or guarantee that diet/exercise will regulate periods.
            </p>
          </div>
        </div>
      </div>

      {/* Cycle Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Current Cycle Phase */}
        <div className="glass-card rounded-3xl p-5 border border-white shadow-soft">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-charcoal-400 uppercase tracking-wider">Current Cycle Day</span>
            <div className="w-8 h-8 rounded-xl bg-pastel-pink-light flex items-center justify-center text-pastel-pink-deep">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-display font-extrabold text-charcoal-900">Day {periodData.currentCycleDay}</span>
            <span className="text-xs text-charcoal-500">of ~{periodData.cycleLengthDays} days</span>
          </div>
          <div className="mt-2 text-xs font-bold text-pastel-pink-deep">
            {periodData.currentPhase}
          </div>
        </div>

        {/* Last Period Dates */}
        <div className="glass-card rounded-3xl p-5 border border-white shadow-soft">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-charcoal-400 uppercase tracking-wider">Last Period Start</span>
            <div className="w-8 h-8 rounded-xl bg-pastel-lavender-light flex items-center justify-center text-pastel-lavender-deep">
              <Droplet className="w-4 h-4" />
            </div>
          </div>
          <div className="text-xl font-display font-bold text-charcoal-900">
            {periodData.lastPeriodStart}
          </div>
          <p className="text-xs text-charcoal-500 mt-1">
            Ended: <strong className="text-charcoal-700">{periodData.lastPeriodEnd}</strong> ({periodData.periodLengthDays} days)
          </p>
        </div>

        {/* Cycle Length Average */}
        <div className="glass-card rounded-3xl p-5 border border-white shadow-soft">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-charcoal-400 uppercase tracking-wider">Average Cycle</span>
            <div className="w-8 h-8 rounded-xl bg-pastel-green-light flex items-center justify-center text-emerald-600">
              <Activity className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl font-display font-extrabold text-charcoal-900">{periodData.cycleLengthDays}</span>
            <span className="text-xs font-semibold text-charcoal-500">days typical</span>
          </div>
          <p className="text-xs text-emerald-600 font-medium mt-1">Consistent rhythm</p>
        </div>
      </div>

      {/* Cycle Phase Workout Guidance */}
      <div className="glass-card rounded-3xl p-6 sm:p-7 border border-white shadow-soft">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-pastel-yellow-light flex items-center justify-center text-amber-600">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg text-charcoal-900">
              Cycle-Aware Training Wisdom
            </h3>
            <p className="text-xs text-charcoal-500">How your natural hormonal phases interact with workouts</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
          <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100">
            <div className="font-bold text-rose-800 mb-1">1. Menstrual Phase (Days 1–5)</div>
            <p className="text-rose-950/70 leading-relaxed">
              Energy is naturally lower. Focus on gentle walking, stretching, restorative yoga, and warm turmeric milk. Prioritize sleep.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-pastel-pink-light/60 border border-pastel-pink/40 ring-1 ring-pastel-pink">
            <div className="font-bold text-pastel-pink-deep mb-1">2. Follicular Phase (Days 6–12) ★ Current</div>
            <p className="text-charcoal-700 leading-relaxed">
              Estrogen rises. Strength, energy, and muscle recovery are high. Excellent time to master squat form and increase dumbbell load.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-pastel-lavender-light/70 border border-pastel-lavender/40">
            <div className="font-bold text-pastel-lavender-deep mb-1">3. Ovulatory Phase (Days 13–16)</div>
            <p className="text-charcoal-700 leading-relaxed">
              Peak stamina and confidence. Warm up well to protect ligaments, and stay hydrated with coconut water or buttermilk.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-pastel-blue-light/70 border border-pastel-blue/40">
            <div className="font-bold text-sky-800 mb-1">4. Luteal Phase (Days 17–28)</div>
            <p className="text-charcoal-700 leading-relaxed">
              Progesterone rises; core temperature slightly higher. Eat sufficient complex carbs (Matta rice, oats), and listen if body requests extra rest.
            </p>
          </div>
        </div>
      </div>

      {/* Cycle History Logs */}
      <div className="glass-card rounded-3xl p-5 sm:p-6 border border-white shadow-soft">
        <h3 className="font-display font-bold text-base sm:text-lg text-charcoal-900 mb-4">
          Logged Cycles History
        </h3>

        <div className="space-y-3">
          {periodData.history.map((record) => (
            <div
              key={record.id}
              className="p-4 rounded-2xl bg-white/80 border border-gray-100 hover:border-pastel-pink/40 transition-all shadow-2xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-pastel-pink-deep" />
                  <span className="text-sm font-bold text-charcoal-900">
                    {record.startDate} → {record.endDate}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-pastel-pink-light text-pastel-pink-deep font-semibold">
                    {record.duration} days flow
                  </span>
                </div>

                <div className="text-xs text-charcoal-500 font-medium">
                  Flow: <strong className="text-charcoal-800">{record.flow}</strong> • Cycle: <strong className="text-charcoal-800">{record.cycleLength} days</strong>
                </div>
              </div>

              {record.symptoms && record.symptoms.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 my-2">
                  {record.symptoms.map((sym, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] px-2.5 py-0.5 rounded-full bg-pastel-lavender-light text-pastel-lavender-deep font-medium border border-pastel-lavender/30"
                    >
                      {sym}
                    </span>
                  ))}
                </div>
              )}

              {record.notes && (
                <p className="text-xs text-charcoal-500 italic mt-1 bg-gray-50/70 p-2.5 rounded-xl">
                  "{record.notes}"
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Log Period Modal */}
      {showLogModal && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowLogModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-white shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-display font-extrabold text-xl text-charcoal-900 mb-1">
              Log Menstrual Cycle
            </h3>
            <p className="text-xs text-charcoal-500 mb-5">
              Record period dates and how your body felt.
            </p>

            <form onSubmit={handleSavePeriod} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pastel-pink"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">End Date</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pastel-pink"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">Cycle Length (days)</label>
                  <input
                    type="number"
                    value={cycleLength}
                    onChange={(e) => setCycleLength(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pastel-pink"
                    min="20"
                    max="45"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">Flow</label>
                  <select
                    value={flow}
                    onChange={(e) => setFlow(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pastel-pink bg-white"
                  >
                    <option value="Light">Light</option>
                    <option value="Medium">Medium</option>
                    <option value="Heavy">Heavy</option>
                    <option value="Heavy Day 1-2, Light Day 3-5">Mixed (Heavy then light)</option>
                  </select>
                </div>
              </div>

              {/* Symptoms Pills Selector */}
              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-2">
                  Select Symptoms & Moods:
                </label>
                <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto p-1 border rounded-2xl border-gray-100">
                  {periodData.symptomOptions.map((sym) => {
                    const isSelected = selectedSymptoms.includes(sym);
                    return (
                      <button
                        type="button"
                        key={sym}
                        onClick={() => toggleSymptom(sym)}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                          isSelected
                            ? 'bg-pastel-pink-deep text-white border-pastel-pink-deep shadow-2xs'
                            : 'bg-white text-charcoal-700 border-gray-200 hover:border-pastel-pink/50'
                        }`}
                      >
                        {sym}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1">Notes / Self-Care Observations</label>
                <textarea
                  rows="2"
                  value={logNotes}
                  onChange={(e) => setLogNotes(e.target.value)}
                  placeholder="e.g. Jeera water helped cramps, slept well, did gentle walks..."
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-pastel-pink"
                />
              </div>

              <div className="flex items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowLogModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-gray-100 text-charcoal-600 font-semibold text-xs hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-charcoal-900 text-white font-semibold text-xs hover:bg-charcoal-800 transition-colors shadow-sm"
                >
                  Save Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
