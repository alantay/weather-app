import { useState } from "react";
import { Geo } from "../../../types";

const useSelectInputCity = () => {
  const [selectedCity, setSelectedCity] = useState<Geo | null>(null);
  const [searchInput, setSearchInput] = useState<string>("");

  return { selectedCity, setSelectedCity, setSearchInput, searchInput };
};

export default useSelectInputCity;
