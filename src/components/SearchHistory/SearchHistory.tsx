import SearchHistoryWrapper, {
  HistoryListItem,
  Time,
  City,
  HistoryListing,
} from "./SearchHistory.styled";
import { useSearchInputStore } from "../../store";
import { getDateTimeFromUnix } from "../../utils";
import { Geo, SearchHistoryItem } from "../../types";
import SearchIcon from "../../assets/history-item-search.svg?react";
import TrashIcon from "../../assets/trash-icon.svg?react";
import IconBtn from "../ui/IconBtn.styled";

interface SearchHistoryProps {
  searchHistory: SearchHistoryItem[];
  deleteSearchHistoryItem: (d: number) => void;
  setSelectedCity: (city: Geo) => void;
}

const SearchHistory = ({
  searchHistory,
  deleteSearchHistoryItem,
  setSelectedCity,
}: SearchHistoryProps) => {
  const setSearchInput = useSearchInputStore((state) => state.setSearchInput);

  const historySearchClickHandler = ({
    country,
    lat,
    lon,
    name,
  }: SearchHistoryItem) => {
    setSelectedCity({
      country,
      lat,
      lon,
      name,
    });
    setSearchInput(`${name}, ${country}`);
  };

  const renderHistory = () => {
    return [...searchHistory]
      .reverse()
      .map((historyItem: SearchHistoryItem) => {
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
                onClick={() => historySearchClickHandler(historyItem)}
              >
                <SearchIcon />
              </IconBtn>
              <IconBtn
                type="button"
                onClick={() => deleteSearchHistoryItem(id)}
              >
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
