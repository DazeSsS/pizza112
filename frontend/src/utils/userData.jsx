import { getData } from './requests';

const getCurrentUser = (setEmployee) => {
  getData(
    'http://127.0.0.1:8000/api/v1/auth/users/me/',
    setEmployee
  );
};

const getEmployees = (setEmployees) => {
  getData(
    'http://127.0.0.1:8000/api/v1/auth/users/',
    setEmployees
  );
};

const getOrders = (setOrders) => {
  getData(
    'http://127.0.0.1:8000/api/v1/orders/',
    setOrders
  );
};

const getBakerOrders = (employee, setOrders) => {
  getData(
    `http://127.0.0.1:8000/api/v1/baker/${employee.id}/orders/`,
    setOrders
  );
};

const getCourierOrders = (employee, setOrders) => {
  getData(
    `http://127.0.0.1:8000/api/v1/courier/${employee.id}/orders/`,
    setOrders
  );
};


export { getCurrentUser, getEmployees, getOrders, getBakerOrders, getCourierOrders };