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

const updateData = (url, data) => {
  axios.patch(
    url,
    data,
    {
      headers: {
        'Authorization': `Token ${getToken()}`
      }
    }
  )
  .catch(error => console.log(error));
};

export { getData, updateData };
