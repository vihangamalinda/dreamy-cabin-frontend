import { CABINS, PERFORM_GET_ALL, PERFORM_GET_BY_ID } from './apiConfig.js';
import { getData } from './apiHelper.js';

export async function getCabins() {
  return await getData(CABINS + PERFORM_GET_ALL);
}

export async function getCabinById(id) {
  return await getData(CABINS + PERFORM_GET_BY_ID(id));
}
