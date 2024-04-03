import SearchHistoryWrapper, {
  HistoryListItem,
  Time,
  City,
  HistoryListing,
} from "./SearchHistory.styled";
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
  const itemSearchHandler = ({ country, lat, lon, name }: SearchItem) => {
    setSelectedCity({
      country,
      lat,
      lon,
      name,
    });
  };

  const renderHistory = () => {
    return history.map((historyItem: SearchItem) => {
      const { id, name, country, time } = historyItem;
      const cityName = `${name}, ${country}`;
      return (
        <HistoryListItem key={time}>
          <div className="content-wrapper">
            <City aria-label="city-name">{cityName}</City>
            <Time aria-label="time">{getDateTimeFromUnix(time)}</Time>
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
        </HistoryListItem>
      );
    });
  };

  return (
    <SearchHistoryWrapper>
      <h3>Search History</h3>
      <HistoryListing>{renderHistory()}</HistoryListing>
    </SearchHistoryWrapper>
  );
};

export default SearchHistory;
