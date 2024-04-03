import Styled, { MainPanel, FirstVisitMsg } from "./Layout.styled";
import SearchBar from "../SearchBar";
import TodayWeather from "../TodayWeather";
import SearchHistory from "../SearchHistory";
import ThemeToggle from "../ThemeToggle";
import useSearchHistory from "./hooks/useSearchHistory";
import { useSelectedCityStore } from "../../store";

const Layout = () => {
  const {
    setSelectedCityAndPushToLocalStorage,
    deleteSearchHistoryItem,
    searchHistory,
  } = useSearchHistory();

  const selectedCity = useSelectedCityStore((state) => state.selectedCity);

  return (
    <Styled>
      <ThemeToggle />
      <SearchBar setSelectedCity={setSelectedCityAndPushToLocalStorage} />
      {!searchHistory.length && (
        <FirstVisitMsg>Get started by searching for a city.</FirstVisitMsg>
      )}
      {!!searchHistory.length && (
        <MainPanel aria-label="main content">
          {selectedCity && <TodayWeather />}
          <SearchHistory
            searchHistory={searchHistory}
            deleteSearchHistoryItem={deleteSearchHistoryItem}
            setSelectedCity={setSelectedCityAndPushToLocalStorage}
          />
        </MainPanel>
      )}
    </Styled>
  );
};

export default Layout;
