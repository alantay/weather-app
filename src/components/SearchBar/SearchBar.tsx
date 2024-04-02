import { useState, ChangeEvent } from "react";
import { useGetGeoLocationByName } from "../../services/queries";
import Suggestions from "./components/Suggestion";
import TextInputStyled from "../ui/TextInput.styled";
import { Geo } from "../../types";

const SearchBar = ({
  setSelectedCity,
  selectedCity,
}: {
  setSelectedCity: (g: Geo | null) => void;
  selectedCity: Geo | null;
}) => {
  const [searchInput, setSearchInput] = useState("");

  const { data: geoData, refetch: reFetchGeo } =
    useGetGeoLocationByName(searchInput);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    setSelectedCity(null);
    reFetchGeo();
  };

  return (
    <>
      <TextInputStyled value={searchInput} onChange={handleSearchInputChange} />
      <button onClick={handleSearch}>search</button>
      {!selectedCity && (
        <Suggestions data={geoData} setSelection={setSelectedCity} />
      )}
    </>
  );
};

export default SearchBar;
