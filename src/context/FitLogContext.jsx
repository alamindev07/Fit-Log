"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FitLogContext = createContext();

export function FitLogProvider({ children }) {
  const [todayPlan, setTodayPlan] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");

    if (storedPlan) {
      setTodayPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSavedWorkouts(JSON.parse(storedSaved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(todayPlan));
  }, [todayPlan]);

  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(savedWorkouts));
  }, [savedWorkouts]);

  function addToPlan(workout) {
    if (todayPlan.length >= 5) {
      return false;
    }

    const alreadyAdded = todayPlan.some(
      (item) => item.id === workout.id
    );

    if (alreadyAdded) {
      return false;
    }

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

    if (alreadySaved) {
      return false;
    }

    setSavedWorkouts((previous) => [...previous, workout]);

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