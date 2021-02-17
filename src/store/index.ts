import { createStore, Store } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers/rootReducer';

import { TAtivoFormatted } from '../interfaces/Ativo';
import { TStatusEntrega } from '../interfaces/StatusEntrega';
import { TRota } from '../interfaces/Rota';
import { Modal } from './reducers/modal/types';
import { IAllDeliveries } from './reducers/allStatusEntregas/types';
import { IEmpresa } from '../interfaces/Empresa';
import { IHeaders } from '../interfaces/Headers';
import { TUser } from '../interfaces/User';
import { TTableHeaderConfig } from '../interfaces/TableConfig';

export type ApplicationState = {
  auth: boolean;
  loading: boolean;
  ativos: TAtivoFormatted[];
  status: TStatusEntrega[];
  todasRotas: TRota[];
  user: TUser;
  modal: Modal;
  allStatus: IAllDeliveries;
  empresa: IEmpresa[];
  currentEmpresa: IEmpresa;
  headers: IHeaders;
  headerConfig: TTableHeaderConfig;
  filterSearch: string;
};

const persistConfig = {
  key: 'WayRoot',
  storage,
  whitelist: ['auth', 'empresa', 'currentEmpresa', 'headers', 'user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store<ApplicationState> = createStore(persistedReducer);
const persistor = persistStore(store);
export { store, persistor };
