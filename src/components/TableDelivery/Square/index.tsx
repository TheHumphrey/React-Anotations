/* eslint-disable react/prop-types */
import React, { ReactElement, useRef, useState } from 'react';

import { Overlay, Tooltip } from 'react-bootstrap';
import { ToolTipBody } from '../../';

import { TEntrega } from '../../../interfaces/Rota';
import { IStatusVariant } from '../../../interfaces/statusVariants';

import SquareStyle from './style';

interface Props {
  element: {
    status: keyof typeof IStatusVariant;
    entrega: TEntrega;
    cliente: string;
  };
  index: number;
}

const Square = ({ element, index }: Props): ReactElement => {
  const [show, setShow] = useState<boolean>(false);
  const target = useRef(null);

  return (
    <SquareStyle
      width="20px"
      height="1em"
      ref={target}
      viewBox="0 0 16 16"
      className={element.status}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => setShow(false)}
    >
      <Overlay target={target.current} show={show} placement="top">
        {({ ...props }) => (
          <Tooltip {...props} style={{ ...props.style }} id="tooltip-top">
            <ToolTipBody order={index} cliente={element.cliente} status={element.status} entrega={element.entrega} />
          </Tooltip>
        )}
      </Overlay>
      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
    </SquareStyle>
  );
};

export default Square;
