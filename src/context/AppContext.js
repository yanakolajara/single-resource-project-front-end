import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const useAppContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [reviews, setReviews] = useState([]);

  return (
    <AppContext.Provider
      value={{
        recipes,
        setRecipes,
        isLoading,
        setIsLoading,
        selectedRecipe,
        setSelectedRecipe,
        reviews,
        setReviews,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
