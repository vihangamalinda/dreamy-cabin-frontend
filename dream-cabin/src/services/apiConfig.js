const BASE_URL = 'http://localhost:8080/v1';

const CABINS = BASE_URL + '/cabins';
const BOOKINGS = BASE_URL + '/bookings';
const SETTINGS = BASE_URL + '/settings';
const GUESTS = BASE_URL + '/guests';

const PERFORM_CREATE = '/create';
const PERFORM_GET_ALL = '/all';
const PERFORM_DELETE = (id) => `/delete/${id}`;
const PERFORM_GET_BY_ID = (id) => `/${id}`;
const PERFORM_UPDATE_BY_ID = (id) => `/update/${id}`;
const STATUS = '/status';

export { CABINS, BOOKINGS, SETTINGS, GUESTS };
export {
  PERFORM_CREATE,
  PERFORM_DELETE,
  PERFORM_GET_ALL,
  PERFORM_GET_BY_ID,
  PERFORM_UPDATE_BY_ID,
  STATUS,
};
