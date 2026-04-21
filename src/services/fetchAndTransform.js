import { fetchData } from "../api/fetchData";
import { transformUserData } from "./transformData";

export async function getUsers(url) {
  const rawData = await fetchData(url);

  if (!rawData) return [];

  return transformUserData(rawData);
}
