import * as axiosModule from 'axios';
require('dotenv').config(); 

const axios = axiosModule.create({
  baseURL: 'https://api.spoonacular.com',
  params: {
    "apiKey": "3e42d004365f47ada7f1d292220161e1"
  },
});

export default class API {
  async getData(path) {
      return await axios.get(path);
  }
}