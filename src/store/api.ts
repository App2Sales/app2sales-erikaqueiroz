import axios, { AxiosInstance } from 'axios';

class api {
  axios: AxiosInstance;

  constructor() {
    const baseURL = process.env.REACT_APP_BASE_URL || 'https://micro-auth-node.herokuapp.com/';

    this.axios = axios.create({
      baseURL,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
  }

  setToken = (token: string) => {
    this.axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  clearToken = () => {
    this.axios.defaults.headers.common.Authorization = '';
  };

  post = (route: string, props: any) => this.axios.post(route, props);

  get = (route: string, params: any) => this.axios.get(route, { params });

  delete = (route: string) => this.axios.delete(route);
}

export default new api();
