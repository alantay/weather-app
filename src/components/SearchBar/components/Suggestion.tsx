import SuggestionListing from "./Suggestion.styled";
import { Geo } from "../../../types";

const Suggestions = ({
  data,
  setSelection,
  isLoading,
}: {
  data: Geo[] | undefined;
  setSelection: (g: Geo) => void;
  isLoading: boolean;
}) => {
  return (
    <SuggestionListing>
      {!isLoading && !data?.length && (
        <div className="no-result">No result</div>
      )}
      {isLoading && <div className="is-loading">Result is Loading...</div>}
      {!!data?.length &&
        data.map((city: Geo, idx: number) => {
          const { name, country } = city;
          const nameCountry = `${name}, ${country}`;
          return (
            <li key={idx} onClick={() => setSelection(city)} role="button">
              {nameCountry}
            </li>
          );
        })}
    </SuggestionListing>
  );
};

export default Suggestions;
