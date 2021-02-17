import { AxiosInstance } from 'axios';
import { renew } from '../../services/auth';
import { store } from '../../store';

const createInterceptor = (api: AxiosInstance): void => {
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const { user } = store.getState();
      if (error.response.status == 401 && user && user.accessToken) {
        renew();
      }
      return Promise.reject(error);
    },
  );
};

export default createInterceptor;
