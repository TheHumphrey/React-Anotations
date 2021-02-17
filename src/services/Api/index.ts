/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import createInterceptor from '../../helpers/Interceptors';

const api = axios.create({
  baseURL: 'https://wayds.net:8081',
});

createInterceptor(api);

const gestorApi = '/gestorway/v1';

const empresas = `${gestorApi}/empresa?email=`;
const rotas = `${gestorApi}/roteirizacao/today`;
const ativos = `${gestorApi}/Ativo`;

const getEmpresas = (login: string, headers: AxiosRequestConfig): Promise<AxiosResponse<any>> => {
  return api.get(`${empresas}${login}`, headers);
};

// const getAllRotas = (date: string, headers: AxiosRequestConfig): Promise<AxiosResponse<any>> => {
//   return api.get(`${rotas}?data=${date}`, headers);
// };

const getAllRotas = (date: string, headers: AxiosRequestConfig): Promise<AxiosResponse<any>> => {
  return api.get(`${rotas}?data=2021-01-19`, headers);
};

const getAtivos = (headers: AxiosRequestConfig): Promise<AxiosResponse<any>> => {
  return api.get(`${ativos}`, headers);
};

export { getEmpresas, getAllRotas, getAtivos };

export default api;
