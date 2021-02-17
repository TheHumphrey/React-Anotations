import React, { ReactElement, useState } from 'react';

import { useSelector } from 'react-redux';

import { DropdownButton, Dropdown } from 'react-bootstrap';
import { EmpresasModal, LoadingUserMenu } from '../../';

import { RootState } from '../../../store/reducers/rootReducer';
import { logOut } from '../../../services/auth';

import { UserMenuStyle } from './style';

const UserMenu = (): ReactElement => {
  const isLoading = useSelector((state: RootState) => state.loading);
  const currentEmpresa = useSelector((state: RootState) => state.currentEmpresa);
  const empresa = useSelector((state: RootState) => state.empresa);
  const user = useSelector((state: RootState) => state.user);

  const [modalShow, setModalShow] = useState(false);

  const handleChangeEmpresa = () => {
    setModalShow(true);
  };

  return (
    <>
      {<EmpresasModal show={modalShow} callback={setModalShow} closeButton={true} />}
      {isLoading ? (
        <LoadingUserMenu />
      ) : (
        <UserMenuStyle className="userLayout">
          <div className="userInfo">
            <span>{user.usuario.nome ? user.usuario.nome : '---'}</span>
            <span className="business">{currentEmpresa.nome}</span>
          </div>
          <div className="userIcon">
            <DropdownButton
              menuAlign="right"
              title={<img src="https://avatars1.githubusercontent.com/u/47810697?v=4" />}
              id="dropdown-menu-align-right"
            >
              <Dropdown.Item eventKey="1">Menu</Dropdown.Item>
              {empresa.length > 1 ? (
                <Dropdown.Item
                  eventKey="1"
                  onClick={(e) => {
                    e.preventDefault();
                    handleChangeEmpresa();
                  }}
                >
                  Trocar Empresa
                </Dropdown.Item>
              ) : null}

              <Dropdown.Item eventKey="2">Configurações</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                eventKey="3"
                onClick={(e) => {
                  e.preventDefault();
                  logOut();
                }}
              >
                Sair
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </UserMenuStyle>
      )}
    </>
  );
};

export default UserMenu;
