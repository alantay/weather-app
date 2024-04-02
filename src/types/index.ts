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

export type WeatherDTO = {
  dt: number; // time of calculation
  main: {
    humidity: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  clouds: { all: number };
};
