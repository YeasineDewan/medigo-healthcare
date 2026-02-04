import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set) => ({
      items: [],
      addItem: (item, quantity = 1) => set((state) => {
        const existing = state.items.find((i) => i.id === item.id);
        if (existing) {
          return {
            items: state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
            ),
          };
        }
        return { items: [...state.items, { ...item, quantity }] };
      }),
      removeItem: (id) => set((state) => ({
        items: state.items.filter((i) => i.id !== id),
      })),
      updateQuantity: (id, quantity) => set((state) => ({
        items: state.items.map((i) =>
          i.id === id ? { ...i, quantity: Math.max(0, quantity) } : i
        ).filter((i) => i.quantity > 0),
      })),
      clearCart: () => set({ items: [] }),
      getTotal: () => {
        const state = useCartStore.getState();
        return state.items.reduce((sum, i) => sum + (i.price || 0) * i.quantity, 0);
      },
    }),
    { name: 'medigo-cart' }
  )
);
