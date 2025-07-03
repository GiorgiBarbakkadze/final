import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useFavorites = () => {
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  const addFavorite = useCallback((item) => {
    setFavorites(prev => {
      if (prev.find(fav => fav.id === item.id)) return prev;
      return [...prev, { ...item, addedAt: new Date().toISOString() }];
    });
  }, [setFavorites]);

  const removeFavorite = useCallback((id) => {
    setFavorites(prev => prev.filter(fav => fav.id !== id));
  }, [setFavorites]);

  const isFavorite = useCallback((id) => {
    return favorites.some(fav => fav.id === id);
  }, [favorites]);

  return { favorites, addFavorite, removeFavorite, isFavorite };
}; 