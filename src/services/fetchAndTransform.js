import { fetchData } from "../api/fetchData";
import { transformTaskData } from "./transformData";

export async function getTasks(url) {
  const raw = await fetchData(url);

  if (!raw) return [];

  return transformTaskData(raw);
}

export async function getUsers(url) {
  const rawData = await fetchData(url);

  if (!rawData) return [];

  return transformUserData(rawData);
}
