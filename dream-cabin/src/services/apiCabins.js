import {
  CABINS,
  PERFORM_DELETE,
  PERFORM_GET_ALL,
  PERFORM_GET_BY_ID,
} from './apiConfig.js';
import { getData, deleteData } from './apiHelper.js';

export async function getCabins() {
  return await getData(CABINS + PERFORM_GET_ALL);
}

export async function getCabinById(id) {
  return await getData(CABINS + PERFORM_GET_BY_ID(id));
}

export async function deleteById(id) {
  return await deleteData(CABINS + PERFORM_DELETE(id));
}
