import Styled from "./Suggestion.styled";
import { Geo } from "../../../types";

const Suggestions = ({
  data,
  setSelection,
}: {
  data: Geo[];
  setSelection: (g: Geo) => void;
}) => {
  return (
    <Styled>
      {!data?.length && <div className="no-result">No result</div>}
      {!!data?.length &&
        data.map((d, idx) => {
          const { name, country } = d;
          const nameCountry = `${name}, ${country}`;
          return (
            <li key={idx} onClick={() => setSelection(d)} role="button">
              {nameCountry}
            </li>
          );
        })}
    </Styled>
  );
};

export default Suggestions;
