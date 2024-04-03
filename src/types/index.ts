export type Coor = {
  lat: number;
  lon: number;
};

export type Geo = {
  name: string;
  lat: number;
  lon: number;
  country: string;
};

export type WeatherType = {
  description: string;
  icon: string;
  main: string;
};

export type WeatherDTO = {
  dt: number; // time of calculation
  main: {
    humidity: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: WeatherType[];
};

/*
 * search history item type is almost like geo as we are also storing the coordinates
 * the coordinates is used for searching as it save us from fetching it again
 */
export type SearchHistoryItem = Geo & { id: number; time: number };
