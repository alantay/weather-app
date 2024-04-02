import { useQuery } from "@tanstack/react-query";
import { getGeoLocationByName, getWeatherByCoor } from "./api";
import { Coor } from "../types";

export const useGetGeoLocationByName = (name: string) => {
  return useQuery({
    queryKey: ["geo", { name }],
    queryFn: () => getGeoLocationByName(name),
    enabled: false,
  });
};

export const useGetWeatherByCoor = (coor: Coor) => {
  return useQuery({
    queryKey: ["geo", { coor }],
    queryFn: () => getWeatherByCoor(coor),
  });
};
