import axios from "axios";
import { Coor, WeatherDTO } from "../types";

const BASE_URL = "http://api.openweathermap.org";
const apiKey = "f5f1971f0cea3c0ce060f2fee36c89c9";
const geoApiInstance = axios.create({ baseURL: `${BASE_URL}/geo/1.0` });
const weatherApiInstance = axios.create({ baseURL: `${BASE_URL}/data/2.5` });

export const getGeoLocationByName = async (name: string) => {
  const { data } =
    await geoApiInstance.get(`direct?q=${name}&appid=${apiKey}&limit=5
  `);
  return data;
};

export const getWeatherByCoor = async ({ lat, lon }: Coor) => {
  const { data } =
    await weatherApiInstance.get<WeatherDTO>(`weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}
  `);
  return data;
};
