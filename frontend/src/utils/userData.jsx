import axios from 'axios';
import { deleteToken, getToken } from './authToken';

const getCurrentUser = (setUser) => {
    axios.get(
      'http://127.0.0.1:8000/api/v1/auth/users/me/',
      {
        headers: {
          'Authorization': `Token ${getToken()}`
        }
      }
    )
    .then(response => setUser(response.data))
    .catch(() => deleteToken());
  };

export { getCurrentUser };