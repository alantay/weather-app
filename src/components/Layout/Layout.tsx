import { useState, useEffect } from "react";
import useArrayLocalStorage from "../../hooks/useArrayLocalStorage";
import { Geo, SearchItem } from "../../types";
import { LOCAL_STORAGE_SEARCH_HISTORY } from "../../constants";
import Styled, { MainPanel } from "./Layout.styled";
import SearchBar from "../SearchBar";
import TodayWeather from "../TodayWeather";
import SearchHistory from "../SearchHistory";
import ThemeToggle from "../ThemeToggle";
import useSearchHistory from "./hooks/useSearchHistory";

const Layout = () => {
  const {
    setSelectedCityAndPushToLocalStorage,
    deleteItem,
    selectedCity,
    setSelectedCity,
    history,
  } = useSearchHistory();

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
