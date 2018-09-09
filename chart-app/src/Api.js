import axios from 'axios';

const Api = process.env.NODE_ENV === 'development'
  ? axios.create({
      baseURL: 'http://localhost:4000/',
      timeout: 1000,
    })
  : axios.create({
    baseURL: '/api/',
    timeout: 1000,
  });

console.log(process.env.NODE_ENV === 'development', 'env');
export default Api;
