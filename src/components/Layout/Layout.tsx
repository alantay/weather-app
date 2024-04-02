import { useState } from "react";

import { Geo } from "../../types";
import SearchBar from "../SearchBar";
import TodayWeather from "../TodayWeather";

const Layout = () => {
  const [selectedCity, setSelectedCity] = useState<Geo | null>(null);

  return (
    <>
      <SearchBar
        setSelectedCity={setSelectedCity}
        selectedCity={selectedCity}
      />
      {selectedCity && <TodayWeather selectedCity={selectedCity} />}
    </>
  );
};

export default Layout;
