import Styled from "./SearchHistory.styled";
import { getDateTimeFromUnix } from "../../utils";
import { Geo, SearchItem } from "../../types";

interface SearchHistoryProps {
  history: SearchItem[];
  deleteItem: (d: number) => void;
  setSelectedCity: (city: Geo) => void;
}

const SearchHistory = ({
  history,
  deleteItem,
  setSelectedCity,
}: SearchHistoryProps) => {
  const itemSearchHandler = (historyItem: SearchItem) => {
    setSelectedCity({
      country: historyItem.country,
      lat: historyItem.lat,
      lon: historyItem.lon,
      name: historyItem.city,
    });
  };

  const renderHistory = () => {
    return history.map((historyItem) => {
      const { id, city, country, time } = historyItem;
      const nameCountry = `${city}, ${country}`;
      return (
        <div key={nameCountry}>
          <div>
            <span>{nameCountry}</span>
            <span>{getDateTimeFromUnix(time)}</span>
          </div>
          <div>
            <button onClick={() => itemSearchHandler(historyItem)}>
              search
            </button>
            <button onClick={() => deleteItem(id)}>trash</button>
          </div>
        </div>
      );
    });
  };

  return (
    <Styled>
      <h3>Search History</h3>
      {renderHistory()}
    </Styled>
  );
};

export default SearchHistory;
