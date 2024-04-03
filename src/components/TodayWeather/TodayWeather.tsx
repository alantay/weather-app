import { Geo } from "../../types";
import Styled from "./TodayWeather.styled";
import { useGetWeatherByCoor } from "../../services/queries";
import { formatTemperature, getDateTimeFromUnix } from "../../utils";

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
    weather,
    dt,
  } = data;

  const weatherPrint = weather.map(({ description }) => description).join(", ");
  return (
    <Styled>
      <div role="heading">Today's Weather</div>

      <div className="weather-details">
        <div className="temperature-wrapper">
          <span className="temperature" role="temperature">
            {formatTemperature(temp)}
          </span>
          <span className="temp-max-min">
            H: {formatTemperature(temp_max)} L: {formatTemperature(temp_min)}
          </span>
          <span className="city-country">
            {name}, {country}
          </span>
        </div>

        <div className="other-details-wrapper">
          <span>{getDateTimeFromUnix(dt)}</span>
          <span className="humidity">Humidity {humidity}%</span>
          <span className="weather">{weatherPrint}</span>
        </div>
      </div>
    </Styled>
  );
};

export default TodayWeather;
