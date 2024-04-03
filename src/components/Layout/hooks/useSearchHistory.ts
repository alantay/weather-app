import { useEffect } from "react";
import { Geo, SearchHistoryItem } from "../../../types";
import useArrayLocalStorage from "../../../hooks/useArrayLocalStorage";
import { LOCAL_STORAGE_SEARCH_HISTORY } from "../../../constants";
import { useSelectedCityStore } from "../../../store";

const useSearchHistory = () => {
  const {
    getItem: getSearchHistory,
    pushItem: pushSearchIntoHistory,
    deleteItem,
  } = useArrayLocalStorage<SearchHistoryItem>(LOCAL_STORAGE_SEARCH_HISTORY);

  const selectedCity = useSelectedCityStore((state) => state.selectedCity);
  const setSelectedCity = useSelectedCityStore(
    (state) => state.setSelectedCity
  );

  const searchHistory: SearchHistoryItem[] = getSearchHistory();

  useEffect(() => {
    // select the last selected city when no city is selected
    if (!selectedCity && searchHistory.length > 0) {
      const latestSearchedCity = searchHistory[searchHistory.length - 1];
      setSelectedCity(latestSearchedCity);
    }
  }, [searchHistory, selectedCity]);

  const setSelectedCityAndPushToLocalStorage = (city: Geo | null) => {
    setSelectedCity(city);
    if (city) {
      /* 
        push city into search historylocalstorage together with timestamp
      */
      const now = Date.now();
      const si: SearchHistoryItem = {
        id: now, // use timestamp as id for easy deletion on search item later on
        time: now,
        ...city,
      };
      pushSearchIntoHistory(si);
    }
  };

  return {
    setSelectedCityAndPushToLocalStorage,
    deleteSearchHistoryItem: deleteItem,
    searchHistory,
  };
};

export default useSearchHistory;
