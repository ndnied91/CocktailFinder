import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  let defaultList = [];

  if (localStorage.getItem('favorites') !== null) {
    defaultList = JSON.parse(localStorage.getItem('favorites'));
  }

  const [favorites, setFavorites] = useState(defaultList);

  const updateFavorite = ({ id, name, image }) => {
    let obj = { id, name, image };
    setFavorites([...favorites, obj]);
  };

  const removeFavorite = (name, id) => {
    console.log('remove func..');
    console.log(id);
    const newArray = favorites.filter((item) => item.id !== id);
    console.log(newArray);
    setFavorites(newArray);
  };

  localStorage.setItem('favorites', JSON.stringify(favorites));

  return (
    <AppContext.Provider value={{ favorites, updateFavorite, removeFavorite }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
