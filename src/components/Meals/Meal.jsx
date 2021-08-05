import React from "react";
import { Mealavailable } from "./Meal-available";
import MealsSummary from "./Meal-summary";

const Meal = () => {
  return (
    <>
      <MealsSummary />
      <Mealavailable />
    </>
  );
};

export default Meal;
