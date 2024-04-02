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

export type weatherType = {
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
  weather: weatherType[];
};

export type SearchItem = Geo & { id: number; time: number };
