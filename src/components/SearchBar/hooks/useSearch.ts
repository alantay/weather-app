import { useState } from "react";
import { useGetGeoLocationByName } from "../../../services/queries";

const useSearch = ({ searchInput }: { searchInput: string }) => {
  const [showSuggestion, setShowSuggestion] = useState(false);

  const {
    data: geoData,
    refetch: reFetchGeo,
    isLoading,
    error,
  } = useGetGeoLocationByName(searchInput);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    reFetchGeo();
    setShowSuggestion(true);
  };

  return {
    setShowSuggestion,
    handleSubmit,
    showSuggestion,
    geoData,
    isLoading,
    error,
  };
};

export default useSearch;
