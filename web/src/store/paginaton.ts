import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface State {
  page: number;
  next: () => void;
  previous: () => void;
}

const usePagination = create<State>()(
  devtools(
    persist(
      (set) => ({
        page: 1,
        next: () => set((state) => ({ page: state.page + 1 })),
        previous: () => set((state) => ({ page: state.page - 1 })),
      }),
      {
        name: "pagination-store",
      }
    )
  )
);

export default usePagination;
