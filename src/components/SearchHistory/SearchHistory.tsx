import Styled, { HistoryItem } from "./SearchHistory.styled";
import { getDateTimeFromUnix } from "../../utils";
import { Geo, SearchItem } from "../../types";
import SearchIcon from "../../assets/history-item-search.svg?react";
import TrashIcon from "../../assets/trash-icon.svg?react";
import IconBtn from "../ui/IconBtn";

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
      const cityName = `${name}, ${country}`;
      return (
        <HistoryItem key={time}>
          <div className="content-wrapper">
            <div aria-label="city-name">{cityName}</div>
            <div aria-label="time" className="time">
              {getDateTimeFromUnix(time)}
            </div>
          </div>
          <div className="actions">
            <IconBtn
              type="button"
              onClick={() => itemSearchHandler(historyItem)}
            >
              <SearchIcon />
            </IconBtn>
            <IconBtn type="button" onClick={() => deleteItem(id)}>
              <TrashIcon />
            </IconBtn>
          </div>
        </HistoryItem>
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
