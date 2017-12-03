import Axios from 'axios';

const API_URL = 'http://localhost:8000/api'
const CLIENTS_ENDPOINT_BASE = 'clients';

// Constants

export const GET_CLIENTS = 'GET_CLIENTS';
export const GET_CLIENTS_SUCCESS = 'GET_CLIENTS_SUCCESS';

// Actions

export const getClientsSuccess = (clients) => {
	return {
		type: GET_CLIENTS_SUCCESS,
		clients
	}
};

export const getClients = async (dispatch) => {
  try {
    const response = await Axios.get(`${API_URL}/${CLIENTS_ENDPOINT_BASE}`);
    dispatch(getClientsSuccess(response.data.data));
  } catch (err) {
    throw(err);
  }
}

// Reducers

export default (state = [], action) => {
  switch (action.type) {
    case GET_CLIENTS_SUCCESS:
      return action.clients
    default:
    return state;
  }
};
