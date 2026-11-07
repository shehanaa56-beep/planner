import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  DEFAULT_USER_PROFILE,
  DEFAULT_DAILY_HABITS,
  INITIAL_WEIGHT_HISTORY,
  INITIAL_PERIOD_DATA,
  INITIAL_WEEKLY_COMPLETION
} from '../data/defaultState';
import { WEEKLY_WORKOUT_SCHEDULE } from '../data/workoutPlan';
import { MEAL_PLAN_DATA } from '../data/dietPlan';

const FitnessContext = createContext();

const STORAGE_KEYS = {
  PROFILE: 'fitlife_user_profile',
  WORKOUT_COMPLETION: 'fitlife_workout_completion',
  MEAL_COMPLETION: 'fitlife_meal_completion',
  MEAL_SELECTIONS: 'fitlife_meal_selections',
  WATER_INTAKE: 'fitlife_water_intake',
  DAILY_HABITS: 'fitlife_daily_habits',
  WEIGHT_HISTORY: 'fitlife_weight_history',
  PERIOD_DATA: 'fitlife_period_data',
  CURRENT_DAY: 'fitlife_selected_day',
  WEEKLY_COMPLETION: 'fitlife_weekly_completion_matrix',
  TODO_LIST: 'fitlife_todo_list',
  NOTES: 'fitlife_notes'
};

export const FitnessProvider = ({ children }) => {
  // 1. User Profile
  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROFILE);
      return saved ? JSON.parse(saved) : DEFAULT_USER_PROFILE;
    } catch {
      return DEFAULT_USER_PROFILE;
    }
  });

  // Selected day for workout / meals view (defaults to today based on real day or 'monday')
  const getTodayDayKey = () => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const current = days[new Date().getDay()];
    return current;
  };

  const [selectedDay, setSelectedDay] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CURRENT_DAY);
      return saved || getTodayDayKey();
    } catch {
      return getTodayDayKey();
    }
  });

  // 2. Workout Completion: Object { [day]: { [exerciseId]: boolean } }
  const [workoutCompletion, setWorkoutCompletion] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WORKOUT_COMPLETION);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return {};
  });

  // 3. Meal Completion: Object { [mealId]: boolean }
  const [mealCompletion, setMealCompletion] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MEAL_COMPLETION);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return {};
  });

  // Meal selections: Object { [mealId]: optionId }
  const [mealSelections, setMealSelections] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MEAL_SELECTIONS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return {};
  });

  // 4. Water Intake (in ml)
  const [waterIntakeMl, setWaterIntakeMl] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WATER_INTAKE);
      return saved ? Number(saved) : 0;
    } catch {
      return 1750;
    }
  });

  // 5. Daily Habits Checklist
  const [dailyHabits, setDailyHabits] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.DAILY_HABITS);
      return saved ? JSON.parse(saved) : DEFAULT_DAILY_HABITS;
    } catch {
      return DEFAULT_DAILY_HABITS;
    }
  });

  // 6. Weight & Body Measurements History
  const [weightHistory, setWeightHistory] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WEIGHT_HISTORY);
      return saved ? JSON.parse(saved) : INITIAL_WEIGHT_HISTORY;
    } catch {
      return INITIAL_WEIGHT_HISTORY;
    }
  });

  // 7. Menstrual Health Data
  const [periodData, setPeriodData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PERIOD_DATA);
      return saved ? JSON.parse(saved) : INITIAL_PERIOD_DATA;
    } catch {
      return INITIAL_PERIOD_DATA;
    }
  });

  // 8. Weekly Matrix Completion
  const [weeklyMatrix, setWeeklyMatrix] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WEEKLY_COMPLETION);
      return saved ? JSON.parse(saved) : INITIAL_WEEKLY_COMPLETION;
    } catch {
      return INITIAL_WEEKLY_COMPLETION;
    }
  });

  // 9. Todo List
  const [todoList, setTodoList] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TODO_LIST);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // 10. Notes
  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.NOTES);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persistent storage synchronizer
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.WORKOUT_COMPLETION, JSON.stringify(workoutCompletion));
  }, [workoutCompletion]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MEAL_COMPLETION, JSON.stringify(mealCompletion));
  }, [mealCompletion]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MEAL_SELECTIONS, JSON.stringify(mealSelections));
  }, [mealSelections]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.WATER_INTAKE, waterIntakeMl.toString());
  }, [waterIntakeMl]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.DAILY_HABITS, JSON.stringify(dailyHabits));
  }, [dailyHabits]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.WEIGHT_HISTORY, JSON.stringify(weightHistory));
  }, [weightHistory]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PERIOD_DATA, JSON.stringify(periodData));
  }, [periodData]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CURRENT_DAY, selectedDay);
  }, [selectedDay]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.WEEKLY_COMPLETION, JSON.stringify(weeklyMatrix));
  }, [weeklyMatrix]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TODO_LIST, JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes));
  }, [notes]);

  // Confetti celebration helper
  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#F4A7C3', '#C8B6F0', '#B8E6D0', '#FEF08A', '#BAE6FD']
      });
    } catch (e) {
      console.log('Confetti trigger', e);
    }
  };

  // Workout Actions
  const toggleExercise = (day, exerciseId) => {
    setWorkoutCompletion(prev => {
      const dayExercises = prev[day] || {};
      const isCurrentlyComplete = !!dayExercises[exerciseId];
      const updatedDay = {
        ...dayExercises,
        [exerciseId]: !isCurrentlyComplete
      };

      if (!isCurrentlyComplete) {
        triggerCelebration();
      }

      return {
        ...prev,
        [day]: updatedDay
      };
    });
  };

  // Calculate day completion percentage
  const getDayWorkoutPercentage = (day) => {
    const dayData = WEEKLY_WORKOUT_SCHEDULE[day];
    if (!dayData || !dayData.exercises || dayData.exercises.length === 0) return 0;
    const dayProgress = workoutCompletion[day] || {};
    const completedCount = dayData.exercises.filter(ex => !!dayProgress[ex.id]).length;
    return Math.round((completedCount / dayData.exercises.length) * 100);
  };

  // Calculate overall weekly workout percentage
  const getWeeklyWorkoutPercentage = () => {
    let totalExercises = 0;
    let completedExercises = 0;

    Object.keys(WEEKLY_WORKOUT_SCHEDULE).forEach(day => {
      const dayData = WEEKLY_WORKOUT_SCHEDULE[day];
      if (dayData && dayData.exercises) {
        totalExercises += dayData.exercises.length;
        const dayProgress = workoutCompletion[day] || {};
        completedExercises += dayData.exercises.filter(ex => !!dayProgress[ex.id]).length;
      }
    });

    return totalExercises > 0 ? Math.round((completedExercises / totalExercises) * 100) : 0;
  };

  // Meal Actions
  const toggleMeal = (mealId) => {
    setMealCompletion(prev => {
      const updated = !prev[mealId];
      if (updated) triggerCelebration();
      return {
        ...prev,
        [mealId]: updated
      };
    });
  };

  const selectMealOption = (mealId, optionId) => {
    setMealSelections(prev => ({
      ...prev,
      [mealId]: optionId
    }));
  };

  const getDailyMealPercentage = () => {
    const totalMeals = MEAL_PLAN_DATA.length;
    const completedMeals = MEAL_PLAN_DATA.filter(m => !!mealCompletion[m.id]).length;
    return Math.round((completedMeals / totalMeals) * 100);
  };

  // Water Actions
  const addWater = (amountMl = 250) => {
    setWaterIntakeMl(prev => {
      const next = prev + amountMl;
      if (next >= profile.targetWaterMl && prev < profile.targetWaterMl) {
        triggerCelebration();
      }
      return next;
    });
  };

  const removeWater = (amountMl = 250) => {
    setWaterIntakeMl(prev => Math.max(0, prev - amountMl));
  };

  const resetWater = () => {
    setWaterIntakeMl(0);
  };

  // Habit Actions
  const toggleHabit = (habitId) => {
    setDailyHabits(prev =>
      prev.map(h => {
        if (h.id === habitId) {
          const nextCompleted = !h.completed;
          if (nextCompleted) triggerCelebration();
          return { ...h, completed: nextCompleted };
        }
        return h;
      })
    );
  };

  const getHabitsPercentage = () => {
    if (!dailyHabits.length) return 0;
    const completed = dailyHabits.filter(h => h.completed).length;
    return Math.round((completed / dailyHabits.length) * 100);
  };

  // Profile Update
  const updateProfile = (updatedFields) => {
    setProfile(prev => ({
      ...prev,
      ...updatedFields
    }));
  };

  // Measurements Log
  const addMeasurementLog = (entry) => {
    setWeightHistory(prev => [
      ...prev,
      {
        ...entry,
        date: new Date().toISOString().split('T')[0]
      }
    ]);
    if (entry.weight) {
      updateProfile({ currentWeight: Number(entry.weight) });
    }
    triggerCelebration();
  };

  // Period Log
  const addPeriodLog = (newRecord) => {
    setPeriodData(prev => ({
      ...prev,
      lastPeriodStart: newRecord.startDate || prev.lastPeriodStart,
      lastPeriodEnd: newRecord.endDate || prev.lastPeriodEnd,
      history: [
        {
          id: `p-${Date.now()}`,
          ...newRecord
        },
        ...prev.history
      ]
    }));
    triggerCelebration();
  };

  // Todo Actions
  const addTodo = (text) => {
    setTodoList(prev => [
      ...prev,
      { id: Date.now().toString(), text: text.trim(), done: false, createdAt: new Date().toISOString() }
    ]);
  };

  const toggleTodo = (id) => {
    setTodoList(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTodo = (id) => {
    setTodoList(prev => prev.filter(t => t.id !== id));
  };

  // Notes Actions
  const addNote = (title, content) => {
    setNotes(prev => [
      { id: Date.now().toString(), title: title.trim(), content: content.trim(), createdAt: new Date().toISOString() },
      ...prev
    ]);
  };

  const updateNote = (id, title, content) => {
    setNotes(prev => prev.map(n => n.id === id ? { ...n, title: title.trim(), content: content.trim() } : n));
  };

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(n => n.id !== id));
  };

  // Reset to Factory Default
  const resetAllData = () => {
    localStorage.clear();
    setProfile(DEFAULT_USER_PROFILE);
    setSelectedDay(getTodayDayKey());
    setWorkoutCompletion({});
    setMealCompletion({});
    setMealSelections({});
    setWaterIntakeMl(0);
    setDailyHabits(DEFAULT_DAILY_HABITS.map(h => ({ ...h, completed: false })));
    setWeightHistory(INITIAL_WEIGHT_HISTORY);
    setPeriodData(INITIAL_PERIOD_DATA);
    setWeeklyMatrix(INITIAL_WEEKLY_COMPLETION);
    setTodoList([]);
    setNotes([]);
  };

  return (
    <FitnessContext.Provider
      value={{
        profile,
        updateProfile,
        selectedDay,
        setSelectedDay,
        workoutCompletion,
        toggleExercise,
        getDayWorkoutPercentage,
        getWeeklyWorkoutPercentage,
        mealCompletion,
        toggleMeal,
        mealSelections,
        selectMealOption,
        getDailyMealPercentage,
        waterIntakeMl,
        addWater,
        removeWater,
        resetWater,
        dailyHabits,
        toggleHabit,
        getHabitsPercentage,
        weightHistory,
        addMeasurementLog,
        periodData,
        addPeriodLog,
        weeklyMatrix,
        todoList,
        addTodo,
        toggleTodo,
        deleteTodo,
        notes,
        addNote,
        updateNote,
        deleteNote,
        resetAllData,
        triggerCelebration
      }}
    >
      {children}
    </FitnessContext.Provider>
  );
};

export const useFitness = () => {
  const context = useContext(FitnessContext);
  if (!context) {
    throw new Error('useFitness must be used within a FitnessProvider');
  }
  return context;
};
