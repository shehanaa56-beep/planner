import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { WEEKLY_WORKOUT_SCHEDULE } from '../data/workoutPlan';
import { MEAL_PLAN_DATA } from '../data/dietPlan';

export const generatePdfReport = ({
  profile,
  weightHistory,
  wellnessLogs,
  workoutCompletion,
  dietDayTicks,
  periodData,
  dailyHabits
}) => {
  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const primaryColor = [255, 77, 141]; // #FF4D8D
  const darkColor = [45, 35, 53];      // #2D2335
  const charcoal = [100, 90, 110];

  let currentY = 18;

  // 1. Header Banner
  doc.setFillColor(255, 240, 246);
  doc.roundedRect(12, 10, pageWidth - 24, 28, 4, 4, 'F');

  // Title & Brand
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('FitLife Health & Progress Report', 18, 22);

  doc.setTextColor(charcoal[0], charcoal[1], charcoal[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  const printDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  doc.text(`Generated on: ${printDate} | Personalized Wellness Summary`, 18, 30);

  // Avatar Photo (if available)
  if (profile.avatar) {
    try {
      doc.addImage(profile.avatar, 'JPEG', pageWidth - 36, 12, 22, 22);
    } catch {
      // If PNG or failed JPEG fallback
      try {
        doc.addImage(profile.avatar, 'PNG', pageWidth - 36, 12, 22, 22);
      } catch (e) {
        console.warn('Avatar image could not be embedded into PDF', e);
      }
    }
  }

  currentY = 44;

  // 2. Personal Profile Card Table
  doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('1. Member Profile & Baseline Metrics', 14, currentY);
  currentY += 4;

  const startWeight = weightHistory && weightHistory[0]?.weight ? `${weightHistory[0].weight} kg` : `${profile.currentWeight || 56.4} kg`;
  const latestWeight = `${profile.currentWeight || 56.4} kg`;
  const goalWeight = `${profile.goalWeight || 52} kg`;
  const heightStr = `${profile.height || 160} cm`;
  const durationStr = `${profile.planDurationWeeks || 12} Weeks (Active: Week ${profile.currentWeek || 1})`;
  const waterStr = `${profile.targetWaterMl || 2500} ml/day`;

  autoTable(doc, {
    startY: currentY,
    theme: 'grid',
    headStyles: { fillColor: primaryColor, textColor: 255, fontStyle: 'bold', fontSize: 9 },
    bodyStyles: { textColor: darkColor, fontSize: 9 },
    alternateRowStyles: { fillColor: [255, 248, 251] },
    margin: { left: 14, right: 14 },
    head: [['Name', 'Start Weight', 'Current Weight', 'Target Goal', 'Height', 'Plan Duration', 'Daily Water Target']],
    body: [[
      profile.name || 'Member',
      startWeight,
      latestWeight,
      goalWeight,
      heightStr,
      durationStr,
      waterStr
    ]]
  });

  currentY = doc.lastAutoTable.finalY + 8;

  // 3. Weekly Weight & Measurement Progression
  doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('2. Weekly Weight & Body Measurements (12-Week Tracker)', 14, currentY);
  currentY += 4;

  const sortedWeights = [...(weightHistory || [])].sort((a, b) => {
    const numA = parseInt(String(a.week).replace(/\D/g, '')) || 0;
    const numB = parseInt(String(b.week).replace(/\D/g, '')) || 0;
    return numA - numB;
  });

  const weightRows = [];
  for (let w = 1; w <= 12; w++) {
    const weekKey = `W${w}`;
    const logged = sortedWeights.find(item => item.week === weekKey || item.week === `${weekKey} (Start)`);
    const prevLogged = sortedWeights.find(item => {
      const prevNum = parseInt(String(item.week).replace(/\D/g, '')) || 0;
      return prevNum === w - 1;
    });

    let deltaStr = '-';
    if (logged && prevLogged && logged.weight && prevLogged.weight) {
      const diff = (logged.weight - prevLogged.weight).toFixed(1);
      deltaStr = diff > 0 ? `+${diff} kg` : `${diff} kg`;
    }

    if (logged) {
      weightRows.push([
        `Week ${w}`,
        logged.date || '-',
        `${logged.weight} kg`,
        logged.waist ? `${logged.waist} cm` : '-',
        deltaStr,
        logged.notes || 'Steady progress'
      ]);
    } else if (w <= (profile.currentWeek || 1)) {
      weightRows.push([`Week ${w}`, 'Pending weigh-in', '-', '-', '-', 'Current active week']);
    }
  }

  autoTable(doc, {
    startY: currentY,
    theme: 'grid',
    headStyles: { fillColor: [139, 92, 246], textColor: 255, fontStyle: 'bold', fontSize: 8.5 },
    bodyStyles: { textColor: darkColor, fontSize: 8.5 },
    alternateRowStyles: { fillColor: [248, 245, 255] },
    margin: { left: 14, right: 14 },
    head: [['Week', 'Date Recorded', 'Weight', 'Waist (cm)', 'Change vs Prev', 'Notes & Observations']],
    body: weightRows.length > 0 ? weightRows : [['Week 1', '2026-11-01', `${profile.currentWeight || 56.4} kg`, '-', '-', 'Baseline recorded']]
  });

  currentY = doc.lastAutoTable.finalY + 8;

  // 4. Workout Completed Summary
  if (currentY > pageHeight - 45) {
    doc.addPage();
    currentY = 16;
  }

  doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('3. Workout Schedule & Routine Completion', 14, currentY);
  currentY += 4;

  const workoutDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const workoutRows = workoutDays.map(dayKey => {
    const dayData = WEEKLY_WORKOUT_SCHEDULE[dayKey];
    const dayProgress = workoutCompletion?.[dayKey] || {};
    const exercises = dayData?.exercises || [];
    const completedCount = exercises.filter(ex => !!dayProgress[ex.id]).length;
    const isRest = dayKey === 'sunday';
    const statusStr = isRest
      ? 'Rest & Active Recovery'
      : exercises.length > 0 && completedCount === exercises.length
      ? 'Completed (100%)'
      : completedCount > 0
      ? `${completedCount} / ${exercises.length} Exercises Done`
      : 'Scheduled';

    return [
      dayData?.dayName || dayKey.toUpperCase(),
      dayData?.title || 'Workout',
      isRest ? 'Gentle walk / stretching' : `${exercises.length} Exercises (3 sets x 12 reps)`,
      dayData?.estTime || '40 mins',
      statusStr
    ];
  });

  autoTable(doc, {
    startY: currentY,
    theme: 'grid',
    headStyles: { fillColor: primaryColor, textColor: 255, fontStyle: 'bold', fontSize: 8.5 },
    bodyStyles: { textColor: darkColor, fontSize: 8 },
    alternateRowStyles: { fillColor: [255, 248, 251] },
    margin: { left: 14, right: 14 },
    head: [['Day', 'Workout Category', 'Routine Details', 'Est. Time', 'Status']],
    body: workoutRows
  });

  currentY = doc.lastAutoTable.finalY + 8;

  // 5. Diet Plan & Nutrition Tracking
  if (currentY > pageHeight - 50) {
    doc.addPage();
    currentY = 16;
  }

  doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('4. Diet Plan & Daily Meal Consistency', 14, currentY);
  currentY += 4;

  const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const dietRows = dayNames.map(day => {
    const dayKey = day.toLowerCase();
    const dayMeals = dietDayTicks?.[dayKey] || {};
    const count = Object.values(dayMeals).filter(Boolean).length;
    const pct = Math.round((count / 7) * 100);
    return [
      day,
      'Balanced Kerala Staples (Matta Rice, Kadala, Fish/Eggs, Thoran, Dal)',
      '7 Scheduled Meals',
      `${count} / 7 Meals Followed`,
      `${pct}% Complete`
    ];
  });

  autoTable(doc, {
    startY: currentY,
    theme: 'grid',
    headStyles: { fillColor: [16, 185, 129], textColor: 255, fontStyle: 'bold', fontSize: 8.5 },
    bodyStyles: { textColor: darkColor, fontSize: 8 },
    alternateRowStyles: { fillColor: [240, 253, 244] },
    margin: { left: 14, right: 14 },
    head: [['Day', 'Dietary Focus', 'Plan Target', 'Ticked Meals', 'Completion Rate']],
    body: dietRows
  });

  currentY = doc.lastAutoTable.finalY + 8;

  // 6. Face Massage & Wellness Log
  if (currentY > pageHeight - 45) {
    doc.addPage();
    currentY = 16;
  }

  doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('5. Face Massage & Daily Wellness Routines', 14, currentY);
  currentY += 4;

  const wellnessRows = (wellnessLogs && wellnessLogs.length > 0)
    ? wellnessLogs.map(log => [
        log.date,
        '5-min Face Massage (Forehead, Cheeks, Jawline, Neck)',
        'Completed',
        log.notes || 'Lymphatic drainage & skin glow routine'
      ])
    : [[
        new Date().toISOString().split('T')[0],
        '5-min Face Massage Routine',
        'Available in Wellness Section',
        'Ready to mark daily in More > Face Massage'
      ]];

  autoTable(doc, {
    startY: currentY,
    theme: 'grid',
    headStyles: { fillColor: [234, 88, 12], textColor: 255, fontStyle: 'bold', fontSize: 8.5 },
    bodyStyles: { textColor: darkColor, fontSize: 8 },
    alternateRowStyles: { fillColor: [255, 247, 237] },
    margin: { left: 14, right: 14 },
    head: [['Date', 'Wellness Activity', 'Status', 'Self-Care Focus']],
    body: wellnessRows
  });

  currentY = doc.lastAutoTable.finalY + 8;

  // 7. Menstrual Cycle Awareness (Nov Onwards)
  if (periodData && periodData.history && periodData.history.length > 0) {
    if (currentY > pageHeight - 45) {
      doc.addPage();
      currentY = 16;
    }

    doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('6. Menstrual Health History (from Nov onwards)', 14, currentY);
    currentY += 4;

    const periodRows = periodData.history.map(record => [
      `${record.startDate} -> ${record.endDate}`,
      `${record.duration} days`,
      `${record.cycleLength} days`,
      record.flow || 'Medium',
      (record.symptoms || []).join(', ') || 'Mild Cramps',
      record.notes || 'Slept well & hydrated'
    ]);

    autoTable(doc, {
      startY: currentY,
      theme: 'grid',
      headStyles: { fillColor: primaryColor, textColor: 255, fontStyle: 'bold', fontSize: 8.5 },
      bodyStyles: { textColor: darkColor, fontSize: 8 },
      alternateRowStyles: { fillColor: [255, 248, 251] },
      margin: { left: 14, right: 14 },
      head: [['Cycle Dates', 'Duration', 'Cycle Length', 'Flow Intensity', 'Symptoms Noted', 'Self-Care Notes']],
      body: periodRows
    });

    currentY = doc.lastAutoTable.finalY + 8;
  }

  // Footer on all pages
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 140, 160);
    doc.text(
      `FitLife Planner - Page ${i} of ${totalPages} | Healthy Harmony & Sustainable Habits`,
      pageWidth / 2,
      pageHeight - 8,
      { align: 'center' }
    );
  }

  // Download PDF file
  const fileName = `FitLife_Report_${(profile.name || 'User').replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(fileName);
};
