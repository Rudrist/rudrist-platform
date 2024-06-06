import { useCookie } from '#app';
// import Cookies from 'universal-cookie';
import { useFetch } from '#app';
import { $fetch } from 'ofetch';
import * as user from './user.js';
import * as order from './order.js';
import * as portfolio from './portfolio.js';

const apis = { user, order, portfolio };

const insertApi = (controller, api) => {
  const output = {};
  const _controller = { ...controller };
  Object.getOwnPropertyNames(_controller).forEach((el) => {
    const fn = _controller[el];
    output[el] = async (data, headers = {}, params = {}) =>
      await fn(api, data, headers, params);
  });
  return output;
};

export default defineNuxtPlugin((nuxtApp) => {
  const cookiz = useCookie('user_token');
//   const cookies = new Cookies();
  const baseURL = process.env.BASE_URL || 'http://localhost:8080';

  const api = async (method, url, data, headers = {}, params = {}) => {
    const token = cookiz.value;
    // const token = cookies.get('user_token');

    // if (token) {
      headers['Authorization'] = `Bearer ${token}`;
      headers['Access-Control-Allow-Origin'] = '*';
      headers['Accept'] = 'application/json'; // Ensure we request JSON data
    // }

    try {
      const response = await useFetch(url, {
        method,
        baseURL,
        body: method.toLowerCase() === 'get' ? null : data,
        params: method.toLowerCase() === 'get' ? data : params,
        headers,
        credentials: 'include', // Ensure credentials are included
      })

      const result = response.data.value;
      if (!result) {
        throw new Error('No data received from API');
      }
      // console.log(token)

      return result; // This should be the JSON response
    } catch (error) {
      // if (process.env.NODE_ENV !== 'production') console.error(error);
      throw error;
    }
  };

  api.get = (url, data, params = {}) => api('get', url, data, {}, params);
  api.post = (url, data, headers = {}, params = {}) => api('post', url, data, headers, params);
  api.put = (url, data, headers = {}, params = {}) => api('put', url, data, headers, params);
  api.delete = (url, data, headers = {}, params = {}) => api('delete', url, data, headers, params);

  Object.keys(apis).forEach((name) => {
    api[name] = insertApi(apis[name], api);
  });

  nuxtApp.provide('api', api);
});
