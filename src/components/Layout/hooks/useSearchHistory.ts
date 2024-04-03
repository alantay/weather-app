import { useEffect } from "react";
import { Geo, SearchItem } from "../../../types";
import useArrayLocalStorage from "../../../hooks/useArrayLocalStorage";
import { LOCAL_STORAGE_SEARCH_HISTORY } from "../../../constants";

const useSearchHistory = ({
  setSelectedCity,
}: {
  setSelectedCity: (city: Geo | null) => void;
}) => {
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

  return {
    setSelectedCityAndPushToLocalStorage,
    deleteItem,

    history,
  };
};

export default useSearchHistory;
