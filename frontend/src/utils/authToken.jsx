const getToken = () => localStorage.getItem('token');

const setToken = (tokenValue) => localStorage.setItem('token', tokenValue);

const deleteToken = () => localStorage.removeItem('token');

export { getToken, setToken, deleteToken }