import axios from "axios";

const Instance = axios.create({
  baseURL: `https://keba1da28866ea.user-app.krampoline.com`,
  headers: {
    'Access-Control-Allow-Origin': '*', // 서버 domain
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
  },
  withCredentials: true,
});

export default Instance;
