import { createSelector } from 'reselect';

// Исходный селектор, который выбирает все продукты из состояния
const selectProducts = (state) => state.products;

// Мемоизированный селектор для избранных товаров
export const selectFavoriteProducts = createSelector(
  [selectProducts],
  (products) => products.filter((product) => product.isLiked)
);
