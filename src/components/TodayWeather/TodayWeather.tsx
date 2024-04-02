import { Geo } from "../../types";
import Styled from "./TodayWeather.styled";
import { useGetWeatherByCoor } from "../../services/queries";
import { formatTemperature } from "../../utils";

const TodayWeather = ({ selectedCity }: { selectedCity: Geo }) => {
  console.log({ selectedCity });
  const { lon, lat, name, country } = selectedCity;
  const { data, isPending } = useGetWeatherByCoor({ lon, lat });

  if (isPending || !data) {
    return <div>is loading..</div>;
  }
  console.log({ data });
  const {
    main: { temp, humidity, temp_max, temp_min },
    clouds: { all: cloudsPercent },
  } = data;
  return (
    <Styled>
      <div role="heading">Today's Weather</div>
      <div className="temperature" role="temperature">
        {formatTemperature(temp)}
      </div>
      <div className="temp-max-min">
        H:{formatTemperature(temp_max)} L:{formatTemperature(temp_min)}
      </div>
      <div>
        <span className="city-country">
          {name}, {country}
        </span>
        <span className="humidity">{humidity}%</span>
        <span className="clouds">{cloudsPercent}%</span>
      </div>
    </Styled>
  );
};

export default TodayWeather;
