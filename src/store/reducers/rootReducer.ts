import { combineReducers } from 'redux';

import auth from './isAuth/reducer';
import loading from './loading/reducer';
import user from './user/reducer';
import ativos from './ativos/reducer';
import status from './statusEntrega/reducer';
import allStatus from './allStatusEntregas/reducer';
import todasRotas from './todasRotas/reducer';
import modal from './modal/reducer';
import empresa from './empresas/reducer';
import currentEmpresa from './currentEmpresa/reducer';
import headers from './headers/reducer';
import headerConfig from './tableHeaderConfig/reducer';
import filterSearch from './filterSearch/reducer';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  ativos,
  status,
  todasRotas,
  modal,
  allStatus,
  empresa,
  currentEmpresa,
  headers,
  headerConfig,
  filterSearch,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
