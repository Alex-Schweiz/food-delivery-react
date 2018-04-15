import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://food-delivery-react.firebaseio.com/'
});

export default instance;