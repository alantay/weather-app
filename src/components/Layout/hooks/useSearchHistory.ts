import { useEffect } from "react";
import { Geo, SearchItem } from "../../../types";
import useArrayLocalStorage from "../../../hooks/useArrayLocalStorage";
import { LOCAL_STORAGE_SEARCH_HISTORY } from "../../../constants";
import { useSelectedCityStore } from "../../../store";

const useSearchHistory = () => {
  const {
    getItem: getSearchHistory,
    pushItem: pushSearchIntoHistory,
    deleteItem,
  } = useArrayLocalStorage<SearchItem>(LOCAL_STORAGE_SEARCH_HISTORY);

  const selectedCity = useSelectedCityStore((state) => state.selectedCity);
  const setSelectedCity = useSelectedCityStore(
    (state) => state.setSelectedCity
  );

  const history: SearchItem[] = getSearchHistory();

  useEffect(() => {
    // select the last selected city when no city is selected
    if (!selectedCity && history.length > 0) {
      const latestSearchedCity = history[history.length - 1];
      setSelectedCity(latestSearchedCity);
    }
  }, [history, selectedCity]);

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

  return {
    setSelectedCityAndPushToLocalStorage,
    deleteItem,
    history,
  };
};

export default useSearchHistory;
