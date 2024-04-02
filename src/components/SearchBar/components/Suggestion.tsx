import { Geo } from "../../../types";

const Suggestions = ({
  data,
  setSelection,
}: {
  data: Geo[];
  setSelection: (g: Geo) => void;
}) => {
  if (!data?.length) return null;
  return (
    <ul>
      {data.map((d) => {
        const { name, country } = d;
        const nameCountry = `${name}, ${country}`;
        return (
          <li key={nameCountry} onClick={() => setSelection(d)}>
            {nameCountry}
          </li>
        );
      })}
    </ul>
  );
};

export default Suggestions;
