import ScatterCloudsDay from "../../assets/scattered-clouds-day.png";
import ScatterCloudsNight from "../../assets/scattered-clouds-night.png";
import ClearSkyDay from "../../assets/clear-sky-day.png";
import FewCloudsDay from "../../assets/few-clouds-day.png";
import FewCloudsNight from "../../assets/few-clouds-night.png";
import RainDay from "../../assets/rain-day.png";
import RainNight from "../../assets/rain-night.png";
import ShowerDay from "../../assets/shower-day.png";
import ThunderStorm from "../../assets/thunderstorm.png";
import Snow from "../../assets/snow.png";
import ClearSkyNight from "../../assets/clear-sky-night.png";
import FallbackIcon from "../../assets/weather-icon.svg";

export const openWeatherIconToLocalIconMap = (openWeatherIconName: string) => {
  switch (openWeatherIconName) {
    case "01d":
      return ClearSkyDay;
    case "01n": // clear sky
      return ClearSkyNight;
    case "02d": // few cloud
      return FewCloudsDay;
    case "02n":
      return FewCloudsNight;

    case "03d": // scattered clouds
    case "04d": // broken clouds
      return ScatterCloudsDay;

    case "03n":
    case "04n":
      return ScatterCloudsNight;

    case "09d": // shower
    case "09n":
      return ShowerDay;

    case "10d": // rain
      return RainDay;
    case "10n":
    case "11n":
      return RainNight;

    case "11d":
      return ThunderStorm;
    case "13d":
    case "13n":
      return Snow;

    // TODO: find icon for mist
    default:
      return FallbackIcon;
  }
};
