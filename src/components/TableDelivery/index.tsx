import React, { ReactElement, useEffect } from 'react';
import { AxiosResponse } from 'axios';

import { useSelector, useDispatch } from 'react-redux';

import { getAllRotas, getAtivos } from '../../services/Api';
import { setRotas } from '../../store/reducers/todasRotas/actions';
import { setAtivos } from '../../store/reducers/ativos/actions';
import { setLoading } from '../../store/reducers/loading/actions';
import { getTodayDate } from '../../services/GetDates';
import { validate, renew } from '../../services/auth';

import { Card, Table } from 'react-bootstrap';
import { TableFooter, TableBody, TableHeader, FilterTable, LoadingTable } from '../';

import { RootState } from '../../store/reducers/rootReducer';
import { TRota } from '../../interfaces/Rota';
import { TRoteirizacao } from '../../interfaces/Roteirizacao';

import TableDeliveryStyle, { TdNotFound } from './style';
import { TAtivo, TAtivoFormatted } from '../../interfaces/Ativo';
import { abstractModules } from '../../services/stateMaps';

const TableDelivery = (): ReactElement => {
  const isLoading = useSelector((state: RootState) => state.loading);
  const rota = useSelector((state: RootState) => state.todasRotas);
  const user = useSelector((state: RootState) => state.user);
  const currentEmpresa = useSelector((state: RootState) => state.currentEmpresa);
  const filterSearch = useSelector((state: RootState) => state.filterSearch);

  const date = getTodayDate();

  useEffect(() => {
    firstFuction();
  }, [currentEmpresa]);

  const firstFuction = async () => {
    validate()
      .then(() => {
        requestAllRotas();
        requestAtivos();
      })
      .catch(() => {
        renew();
      });
  };

  const dispatch = useDispatch();

  const requestAllRotas = () => {
    getAllRotas(date, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
        'Codigo-Empresa': currentEmpresa.codigo,
      },
    })
      .then((res: AxiosResponse<TRoteirizacao[]>) => {
        const arrRotas: TRota[] = [];
        res.data.map((roteirizacao) => {
          roteirizacao.rotas.map((item) => {
            arrRotas.push(item);
          });
        });
        dispatch(setRotas(arrRotas));
        dispatch(setLoading(false));
      })
      .catch(() => {
        console.log('%cRotas error', 'color: #dd0a0a');
      });
  };

  const requestAtivos = () => {
    getAtivos({
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
        'Codigo-Empresa': currentEmpresa.codigo,
        Email: user.usuario.login,
      },
    })
      .then((res: AxiosResponse<TAtivo[]>) => {
        const ativos = formattedAtivoResponse(res.data);
        dispatch(setAtivos(ativos));
      })
      .catch(() => {
        console.log('%cAtivos error', 'color: #dd0a0a');
      });
  };

  const formattedAtivoResponse = (ativos: TAtivo[]): TAtivoFormatted[] => {
    const formattedAtivo: TAtivoFormatted[] = [];
    ativos.map((ativo) => {
      const [logistica, temperatura, umidade] = abstractModules(ativo);
      formattedAtivo.push({
        ...ativo,
        modulos: {
          logistica,
          temperatura,
          umidade,
        },
      });
    });

    return formattedAtivo;
  };

  return (
    <TableDeliveryStyle>
      <Card>
        {isLoading ? (
          <Card.Body>
            <LoadingTable />
          </Card.Body>
        ) : (
          <>
            <FilterTable />
            <Card.Body>
              <Table responsive="md" hover size="sm">
                <thead>
                  <TableHeader typeTitle="delivery" />
                </thead>
                <tbody>
                  {rota &&
                    rota
                      .filter(
                        (itemRota) =>
                          itemRota.veiculo.nome.toLowerCase().includes(filterSearch.toString().toLowerCase()) ||
                          itemRota.motorista?.nome.toLocaleLowerCase().includes(filterSearch.toString().toLowerCase()),
                      )
                      .map((item) => <TableBody item={item} key={item.codigo} />)}
                  {rota && rota.length < 1 ? (
                    <tr>
                      <TdNotFound colSpan={100}>Nenhuma rota encontrada!</TdNotFound>
                    </tr>
                  ) : null}
                </tbody>

                <tfoot>
                  <TableFooter />
                </tfoot>
              </Table>
            </Card.Body>
          </>
        )}
      </Card>
    </TableDeliveryStyle>
  );
};

export default TableDelivery;
