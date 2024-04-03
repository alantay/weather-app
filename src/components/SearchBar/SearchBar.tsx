import SearchBarWrapper, { SearchButton } from "./SearchBar.styled";
import Suggestions from "./components/Suggestion";
import TextInput from "../ui/TextInput.styled";
import { Geo } from "../../types";
import useSearch from "./hooks/useSearch";

interface SearchBarProps {
  setSelectedCity: (city: Geo | null) => void;
}

const SearchBar = ({ setSelectedCity }: SearchBarProps) => {
  const {
    setSearchInput,
    searchInput,
    setShowSuggestion,
    showSuggestion,
    handleSubmit,
    handleSearchInputChange,
    geoData,
    isLoading,
  } = useSearch();

  const setSelectedCityAndShowSuggestion = (city: Geo | null) => {
    setSearchInput(`${city?.name}, ${city?.country}`);
    setSelectedCity(city);
    setShowSuggestion(false);
  };

  return (
    <SearchBarWrapper>
      <form onSubmit={handleSubmit} aria-label="search form">
        <div aria-label="search place">
          <TextInput
            label="Country"
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
