import TodayWeatherWrapper, {
  TemperatureWrapper,
  Temperature,
  WeatherTypeDetails,
  City,
} from "./TodayWeather.styled";
import { useGetWeatherByCoor } from "../../services/queries";
import { formatTemperature, getDateTimeFromUnix } from "../../utils";
import { openWeatherIconToLocalIconMap } from "./utils";
import { useSelectedCityStore } from "../../store";

const TodayWeather = () => {
  const selectedCity = useSelectedCityStore((state) => state.selectedCity);
  if (!selectedCity) {
    return null;
  }
  const { lon, lat, name, country } = selectedCity;
  const { data, isPending } = useGetWeatherByCoor({ lon, lat });

  if (isPending || !data) {
    return <TodayWeatherWrapper>Weather is loading..</TodayWeatherWrapper>;
  }
  const {
    main: { temp, humidity, temp_max, temp_min },
    weather,
    dt,
  } = data;

  /* get the first weather type. Possible to have multiple weather type. but we only display the first */
  const { description, icon } = weather[0];

  return (
    <TodayWeatherWrapper $weatherIcon={openWeatherIconToLocalIconMap(icon)}>
      <div role="heading">Today's Weather</div>

      <div className="weather-details">
        <TemperatureWrapper>
          <Temperature className="temperature" role="temperature">
            {formatTemperature(temp)}
          </Temperature>
          <span className="temp-max-min">
            H: {formatTemperature(temp_max)} L: {formatTemperature(temp_min)}
          </span>
          <City>
            {name}, {country}
          </City>
        </TemperatureWrapper>

        <WeatherTypeDetails className="other-details-wrapper">
          <span>{getDateTimeFromUnix(dt)}</span>
          <span className="humidity">Humidity: {humidity}%</span>
          <span className="weather">{description}</span>
        </WeatherTypeDetails>
      </div>
    </TodayWeatherWrapper>
  );
};

export default TodayWeather;
