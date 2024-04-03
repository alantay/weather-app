import { ChangeEvent, useRef } from "react";
import SearchBarWrapper, { SearchButton } from "./SearchBar.styled";
import Suggestions from "./components/Suggestion";
import TextInput from "../ui/TextInput.styled";
import { Geo } from "../../types";
import useSearch from "./hooks/useSearch";
import useOnClickOutside from "../../hooks/useOnClickOutside";

interface SearchBarProps {
  setSelectedCity: (city: Geo | null) => void;
  setSearchInput: (str: string) => void;
  searchInput: string;
}

const SearchBar = ({
  setSelectedCity,
  setSearchInput,
  searchInput,
}: SearchBarProps) => {
  const ref: any = useRef();

  useOnClickOutside(ref, () => setShowSuggestion(false));

  const {
    setShowSuggestion,
    showSuggestion,
    handleSubmit,
    geoData,
    isLoading,
  } = useSearch({ searchInput });

  const setSelectedCityAndShowSuggestion = (city: Geo | null) => {
    setSearchInput(`${city?.name}, ${city?.country}`);
    setSelectedCity(city);
    setShowSuggestion(false);
  };

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <SearchBarWrapper ref={ref}>
      <form onSubmit={handleSubmit} aria-label="search form">
        <div aria-label="search place">
          <TextInput
            autoComplete="off"
            placeholder="London, GB"
            value={searchInput}
            onChange={handleSearchInputChange}
            className={showSuggestion ? "showSuggestion" : ""}
          />
          {showSuggestion && (
            <Suggestions
              data={geoData}
              setSelection={setSelectedCityAndShowSuggestion}
              isLoading={isLoading}
            />
          )}
        </div>

        <SearchButton type="submit" />
      </form>
    </SearchBarWrapper>
  );
};

export default SearchBar;
