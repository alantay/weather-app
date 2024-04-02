import Styled from "./SearchHistory.styled";
import { getDateTimeFromUnix } from "../../utils";
import { Geo, SearchItem } from "../../types";
import SearchIcon from "../../assets/history-item-search.svg";
import TrashIcon from "../../assets/trash-icon.svg";

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
      name: historyItem.name,
    });
  };

  const renderHistory = () => {
    return history.map((historyItem) => {
      const { id, name, country, time } = historyItem;
      const nameCountry = `${name}, ${country}`;
      return (
        <li className="history" key={nameCountry}>
          <div>
            <div role="name-country">{nameCountry}</div>
            <div className="time">{getDateTimeFromUnix(time)}</div>
          </div>
          <div className="actions">
            <button onClick={() => itemSearchHandler(historyItem)}>
              <img src={SearchIcon} alt="Search Icon" />
            </button>
            <button onClick={() => deleteItem(id)}>
              <img src={TrashIcon} alt="Trash Icon" />
            </button>
          </div>
        </li>
      );
    });
  };

  return (
    <Styled>
      <h3>Search History</h3>
      <ul className="history-wrapper">{renderHistory()}</ul>
    </Styled>
  );
};

export default SearchHistory;
