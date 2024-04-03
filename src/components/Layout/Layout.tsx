import Styled, { MainPanel } from "./Layout.styled";
import SearchBar from "../SearchBar";
import TodayWeather from "../TodayWeather";
import SearchHistory from "../SearchHistory";
import ThemeToggle from "../ThemeToggle";
import useSearchHistory from "./hooks/useSearchHistory";
import { useSelectedCityStore } from "../../store";

const Layout = () => {
  const { setSelectedCityAndPushToLocalStorage, deleteItem, history } =
    useSearchHistory();

  const selectedCity = useSelectedCityStore((state) => state.selectedCity);

  return (
    <Styled>
      <ThemeToggle />
      <SearchBar setSelectedCity={setSelectedCityAndPushToLocalStorage} />
      {!!history.length && (
        <MainPanel>
          {selectedCity && <TodayWeather />}
          <SearchHistory
            history={history}
            deleteItem={deleteItem}
            setSelectedCity={setSelectedCityAndPushToLocalStorage}
          />
        </MainPanel>
      )}
    </Styled>
  );
};

export default Layout;
