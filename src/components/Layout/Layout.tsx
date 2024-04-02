import { useState, useEffect } from "react";
import useArrayLocalStorage from "../../hooks/useArrayLocalStorage";
import { Geo, SearchItem } from "../../types";
import { LOCAL_STORAGE_SEARCH_HISTORY } from "../../constants";
import Styled from "./Layout.styled";
import SearchBar from "../SearchBar";
import TodayWeather from "../TodayWeather";
import SearchHistory from "../SearchHistory";

const Layout = () => {
  const [selectedCity, setSelectedCity] = useState<Geo | null>(null);

  const {
    getItem: getSearchHistory,
    pushItem: pushSearchIntoHistory,
    deleteItem,
  } = useArrayLocalStorage<SearchItem>(LOCAL_STORAGE_SEARCH_HISTORY);
  const history: SearchItem[] = getSearchHistory();

  // Prefill selectedCity with the first item from search history on mount
  useEffect(() => {
    if (history.length > 0) {
      const latestSearchedCity = history[history.length - 1];
      setSelectedCity({
        name: latestSearchedCity.city,
        country: latestSearchedCity.country,
        lat: latestSearchedCity.lat,
        lon: latestSearchedCity.lon,
      });
    }
  }, [history]);

  const setSelectedCityAndPushToLocalStorage = (city: Geo | null) => {
    setSelectedCity(city);
    if (city) {
      // if city is selected, push it into search historylocalstorage
      const now = Date.now();
      const si: SearchItem = {
        id: now,
        city: city.name,
        country: city.country,
        time: now,
        lat: city.lat,
        lon: city.lon,
      };
      pushSearchIntoHistory(si);
    }
  };

  return (
    <Styled>
      <SearchBar setSelectedCity={setSelectedCityAndPushToLocalStorage} />
      {selectedCity && <TodayWeather selectedCity={selectedCity} />}
      <SearchHistory
        history={history}
        deleteItem={deleteItem}
        setSelectedCity={setSelectedCity}
      />
    </Styled>
  );
};

export default Layout;
