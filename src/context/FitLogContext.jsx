"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FitLogContext = createContext();

export function FitLogProvider({ children }) {
  const [todayPlan, setTodayPlan] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  const [isHydrated, setIsHydrated] = useState(false);

  // Load saved data from localStorage
  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("fitlog-plan");
      const storedSaved = localStorage.getItem("fitlog-saved");

      if (storedPlan) {
        setTodayPlan(JSON.parse(storedPlan));
      }

      if (storedSaved) {
        setSavedWorkouts(JSON.parse(storedSaved));
      }
    } catch (error) {
      console.error("Failed to load FitLog data:", error);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save today's plan
  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(todayPlan)
    );
  }, [todayPlan, isHydrated]);

  // Save saved workouts
  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(savedWorkouts)
    );
  }, [savedWorkouts, isHydrated]);

  function addToPlan(workout) {
    if (todayPlan.length >= 5) return false;

    const alreadyAdded = todayPlan.some(
      (item) => item.id === workout.id
    );

    if (alreadyAdded) return false;

    setTodayPlan((previous) => [...previous, workout]);

    return true;
  }

  function removeFromPlan(id) {
    setTodayPlan((previous) =>
      previous.filter((workout) => workout.id !== id)
    );
  }

  function markAsDone(id) {
    setTodayPlan((previous) =>
      previous.filter((workout) => workout.id !== id)
    );
  }

  function saveWorkout(workout) {
    const alreadySaved = savedWorkouts.some(
      (item) => item.id === workout.id
    );

    if (alreadySaved) return false;

    setSavedWorkouts((previous) => [
      ...previous,
      workout,
    ]);

    return true;
  }

  function removeSavedWorkout(id) {
    setSavedWorkouts((previous) =>
      previous.filter((workout) => workout.id !== id)
    );
  }

  const value = {
    todayPlan,
    savedWorkouts,
    addToPlan,
    removeFromPlan,
    markAsDone,
    saveWorkout,
    removeSavedWorkout,
  };

  return (
    <FitLogContext.Provider value={value}>
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  return useContext(FitLogContext);
}