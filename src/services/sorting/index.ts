import { TAtivo } from '../../interfaces/Ativo';
import { TRota } from '../../interfaces/Rota';
import { store } from '../../store';
// import { setRotas } from '../../store/reducers/todasRotas/actions';

// export function sortTable(arrayRotas: Rota[], colum: keyof Rota, ascOrDesc: boolean): Rota[] {
//     if(ascOrDesc){
//         arrayRotas.sort((a, b) => {
//             if (a < b) {
//               return -1;
//             }
//             if (a > b) {
//               return 1;
//             }
//             return 0;
//           });
//     }
// }

export function sortTable(ascOrDesc: boolean, column: string): TRota[] {
  const { todasRotas } = store.getState();
  const newRotas = todasRotas;

  debugger;

  if (ascOrDesc === true) {
    switch (column) {
      case 'motorista':
        newRotas.sort((a, b) => {
          if (a.motorista.nome < b.motorista.nome) {
            return -1;
          }
          if (a.motorista.nome > b.motorista.nome) {
            return 1;
          }
          return 0;
        });
        break;
    }
  } else {
    switch (column) {
      case 'motorista':
        newRotas.sort((a, b) => {
          if (a.motorista.nome < b.motorista.nome) {
            return 1;
          }
          if (a.motorista.nome > b.motorista.nome) {
            return -1;
          }
          return 0;
        });
        break;
    }
  }

  return newRotas;
}

export function sortModules(arrayModules: TAtivo[], colum: keyof TAtivo, ascOrDesc: boolean): void {
  if (ascOrDesc) {
    arrayModules.sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
  }
}
