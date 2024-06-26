import { ChangeEvent, useRef } from "react";
import SearchBarWrapper, { SearchButton } from "./SearchBar.styled";
import Suggestions from "./components/Suggestion";
import TextInput from "../ui/TextInput.styled";
import { Geo } from "../../types";
import useSearch from "./hooks/useSearch";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { useSearchInputStore } from "../../store";

interface SearchBarProps {
  setSelectedCity: (city: Geo | null) => void;
}

const SearchBar = ({ setSelectedCity }: SearchBarProps) => {
  const ref: any = useRef();
  const searchInput = useSearchInputStore((state) => state.searchInput);
  const setSearchInput = useSearchInputStore((state) => state.setSearchInput);

  // hook to close suggestion upon outside click
  useOnClickOutside(ref, () => setShowSuggestion(false));

  const {
    setShowSuggestion,
    showSuggestion,
    handleSubmit,
    geoData,
    isLoading,
  } = useSearch({ searchInput });

  const setSelectedCityAndShowSuggestion = (city: Geo | null) => {
    // get search input to reflect selected city
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
