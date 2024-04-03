import Styled, { MainPanel } from "./Layout.styled";
import SearchBar from "../SearchBar";
import TodayWeather from "../TodayWeather";
import SearchHistory from "../SearchHistory";
import ThemeToggle from "../ThemeToggle";
import useSelectInputCity from "./hooks/useSelectInputCity";
import useSearchHistory from "./hooks/useSearchHistory";

const Layout = () => {
  const { selectedCity, setSelectedCity, setSearchInput, searchInput } =
    useSelectInputCity();

  const { setSelectedCityAndPushToLocalStorage, deleteItem, history } =
    useSearchHistory({ setSelectedCity });

  return (
    <Styled>
      <ThemeToggle />
      <SearchBar
        setSelectedCity={setSelectedCityAndPushToLocalStorage}
        setSearchInput={setSearchInput}
        searchInput={searchInput}
      />
      {!!history.length && (
        <MainPanel>
          {selectedCity && <TodayWeather selectedCity={selectedCity} />}
          <SearchHistory
            history={history}
            deleteItem={deleteItem}
            setSelectedCity={setSelectedCityAndPushToLocalStorage}
            setSearchInput={setSearchInput}
          />
        </MainPanel>
      )}
    </Styled>
  );
};

export default Layout;
