import Styled from "./Suggestion.styled";
import { Geo } from "../../../types";

const Suggestions = ({
  data,
  setSelection,
}: {
  data: Geo[];
  setSelection: (g: Geo) => void;
}) => {
  if (!data?.length) return <div>No result</div>;
  return (
    <Styled>
      {data.map((d) => {
        const { name, country } = d;
        const nameCountry = `${name}, ${country}`;
        return (
          <li key={nameCountry} onClick={() => setSelection(d)}>
            {nameCountry}
          </li>
        );
      })}
    </Styled>
  );
};

export default Suggestions;
