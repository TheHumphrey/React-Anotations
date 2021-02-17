import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card, InputGroup, FormControl, DropdownButton } from 'react-bootstrap';

import { setFilterSearch } from '../../../store/reducers/filterSearch/actions';

import { RootState } from '../../../store/reducers/rootReducer';

import { CheckboxFilter } from '../../';

import { FilterTableFilter } from './style';

const FilterTable = (): ReactElement => {
  const headerConfig = useSelector((state: RootState) => state.headerConfig);
  const dispatch = useDispatch();

  const titles = [
    { title: 'Alerta' },
    { title: 'Ativo' },
    { title: 'Velocidade' },
    { title: 'Aderencia' },
    { title: 'Temperatura' },
    { title: 'Umidade' },
    { title: 'Bateria' },
    { title: 'Entregas' },
    { title: 'Detalhe' },
  ];

  const filter = (text: string) => {
    dispatch(setFilterSearch(text));
  };

  return (
    <>
      <Card.Header>
        <FilterTableFilter className="filterTable">
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-search"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                  <path d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                </svg>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(e) => filter(e.target.value)}
            />
          </InputGroup>
          <div className="buttons">
            <DropdownButton className="dropdrownColumn" id="dropdown-basic-button" title={'Colunas'}>
              <CheckboxFilter />
            </DropdownButton>
            {/* <DropdownButton id="dropdown-basic-button" title="Linhas">
              <CheckboxFilter />
            </DropdownButton> */}
          </div>
        </FilterTableFilter>
      </Card.Header>
    </>
  );
};

export default FilterTable;
