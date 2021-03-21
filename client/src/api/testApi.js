import * as axiosModule from 'axios';

const axios = axiosModule.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default class API {
  async getData(path) {
      return await axios.get(path);
  }
}