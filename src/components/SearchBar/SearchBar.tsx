import { useState, ChangeEvent } from "react";
import SearchBarStyled, { SearchButton } from "./SearchBar.styled";
import { useGetGeoLocationByName } from "../../services/queries";
import Suggestions from "./components/Suggestion";
import TextInputStyled from "../ui/TextInput.styled";
import { Geo } from "../../types";

interface SearchBarProps {
  setSelectedCity: (city: Geo | null) => void;
}

const SearchBar = ({ setSelectedCity }: SearchBarProps) => {
  const [searchInput, setSearchInput] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);

  const { data: geoData, refetch: reFetchGeo } =
    useGetGeoLocationByName(searchInput);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await reFetchGeo();
    setShowSuggestion(true);
  };

  const setSelectedCityAndShowSuggestion = (city: Geo | null) => {
    console.log({ city });
    setSearchInput(`${city?.name}, ${city?.country}`);
    setSelectedCity(city);
    setShowSuggestion(false);
  };

  return (
    <SearchBarStyled>
      <form onSubmit={handleSubmit}>
        <div>
          <TextInputStyled
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
            />
          )}
        </div>

        <SearchButton type="submit"></SearchButton>
      </form>
    </SearchBarStyled>
  );
};

export default SearchBar;
