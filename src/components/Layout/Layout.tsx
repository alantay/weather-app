import { useState, useEffect } from "react";
import useArrayLocalStorage from "../../hooks/useArrayLocalStorage";
import { Geo, SearchItem } from "../../types";
import { LOCAL_STORAGE_SEARCH_HISTORY } from "../../constants";
import Styled, { MainPanel } from "./Layout.styled";
import SearchBar from "../SearchBar";
import TodayWeather from "../TodayWeather";
import SearchHistory from "../SearchHistory";
import ThemeToggle from "../ThemeToggle";

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
      setSelectedCity(latestSearchedCity);
    }
  }, [history]);

  const setSelectedCityAndPushToLocalStorage = (city: Geo | null) => {
    setSelectedCity(city);
    if (city) {
      /* 
        push city into search historylocalstorage together with timestamp
      */
      const now = Date.now();
      const si: SearchItem = {
        id: now,
        time: now,
        ...city,
      };
      pushSearchIntoHistory(si);
    }
  };

  return (
    <Styled>
      <ThemeToggle />
      <SearchBar setSelectedCity={setSelectedCityAndPushToLocalStorage} />
      {!!history.length && (
        <MainPanel>
          {selectedCity && <TodayWeather selectedCity={selectedCity} />}
          <SearchHistory
            history={history}
            deleteItem={deleteItem}
            setSelectedCity={setSelectedCity}
          />
        </MainPanel>
      )}
    </Styled>
  );
};

export default Layout;
