import { create } from "zustand";
import { Geo } from "./types";

type SearchInputStore = {
  searchInput: string;
  setSearchInput: (s: string) => void;
};

type SelectedCityStore = {
  selectedCity: Geo | null;
  setSelectedCity: (s: Geo | null) => void;
};

export const useSearchInputStore = create<SearchInputStore>((set) => ({
  searchInput: "",
  setSearchInput: (s) => set(() => ({ searchInput: s })),
}));

export const useSelectedCityStore = create<SelectedCityStore>((set) => ({
  selectedCity: null,
  setSelectedCity: (city) => set(() => ({ selectedCity: city })),
}));
