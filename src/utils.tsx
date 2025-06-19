// src/utils/initialItems.ts
export const initialItems = new Array(10_000_000).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 9_999_999,
  };
});
