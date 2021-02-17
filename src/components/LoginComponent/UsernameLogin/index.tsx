import React, { ReactElement, useEffect, useState } from 'react';

import { useRouteMatch, useHistory } from 'react-router-dom';

import { emailExists } from '../../../services/auth';

import { Form, Button } from 'react-bootstrap';

import { persistor } from '../../../store/index';

const UsernameLogin = (): ReactElement => {
  const { url } = useRouteMatch();
  const history = useHistory();

  const [email, setEmail] = useState<string>('');
  const [require, setRequire] = useState<boolean>(false);
  const [isFail, setIsFail] = useState<boolean>(false);

  useEffect(() => {
    persistor.purge();
  }, []);

  const handleNextForm = async (e?: React.MouseEvent) => {
    e && e.preventDefault();

    await emailExists(email).then(
      () => {
        history.push(`${url}/${email}`);
      },
      () => {
        setRequire(true);
        setIsFail(true);
      },
    );
  };

  return (
    <>
      <Form.Control
        id="email"
        className={require ? 'failEmail' : 'email'}
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        onClick={() => setRequire(false)}
        required={require}
        onKeyDown={(event: React.KeyboardEvent) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            handleNextForm();
          }
        }}
      />

      <span className={isFail ? 'fail' : 'isOk'}>Email incorreto ou não existe</span>

      <div className="buttons">
        <Button id="button" variant="primary" onClick={(e) => handleNextForm(e)}>
          Proximo
        </Button>
      </div>
    </>
  );
};

export default UsernameLogin;
