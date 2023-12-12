import axios from 'axios';
import { deleteToken, getToken } from './authToken';

const getData = (url, setData) => {
  axios.get(
    url,
    {
      headers: {
        'Authorization': `Token ${getToken()}`
      }
    }
  )
  .then(response => setData(response.data))
  .catch(error => {
    if (error.response?.statusText === 'Unauthorized') {
      deleteToken();
    }
  });
};

export { getData };
