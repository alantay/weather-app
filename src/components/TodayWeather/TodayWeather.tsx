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
    clouds: { all: cloudsPercent },
    dt,
  } = data;
  return (
    <Styled>
      <div role="heading">Today's Weather</div>

      <div>
        <span className="temperature" role="temperature">
          {formatTemperature(temp)}
        </span>
        <span className="temp-max-min">
          H:{formatTemperature(temp_max)} L:{formatTemperature(temp_min)}
        </span>
        <span className="city-country">
          {name}, {country}
        </span>
        <span>{getDateTimeFromUnix(dt)}</span>
        <span className="humidity">{humidity}%</span>
        <span className="clouds">{cloudsPercent}%</span>
      </div>
    </Styled>
  );
};

export default TodayWeather;
