import { useState, ChangeEvent } from "react";
import { useGetGeoLocationByName } from "../../../services/queries";

const useSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);

  const {
    data: geoData,
    refetch: reFetchGeo,
    isLoading,
  } = useGetGeoLocationByName(searchInput);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    reFetchGeo();
    setShowSuggestion(true);
  };

  return {
    setSearchInput,
    setShowSuggestion,
    handleSubmit,
    searchInput,
    handleSearchInputChange,
    showSuggestion,
    geoData,
    isLoading,
  };
};

export default useSearch;
