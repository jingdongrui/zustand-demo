import { create } from "zustand";

type State = {
  str: string;
  updateStr: (count: string) => void;
};

export const useCounterStore = create<State>((set) => ({
  str: "",
  updateStr: (data) => set(() => ({ str: data }))
}));
