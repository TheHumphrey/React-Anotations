import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { ProgressBar, Card } from 'react-bootstrap';
import { LoadingChart } from '../../';
import DotInfo from './DotInfo';

import ChartProgressStyle from './style';

import { RootState } from '../../../store/reducers/rootReducer';

const ChartProgress = (): ReactElement => {
  const isLoading = useSelector((state: RootState) => state.loading);

  return (
    <ChartProgressStyle>
      <Card style={{ width: '100%', height: '9rem' }}>
        {isLoading ? (
          <Card.Body>
            <LoadingChart />
          </Card.Body>
        ) : (
          <Card.Body>
            <Card.Title>Total de Entregas</Card.Title>
            <ProgressBar className="progressChart">
              <ProgressBar label={'40'} className="success" now={40} key={1} />
              <ProgressBar label={'20'} className="warning" now={20} key={3} />
              <ProgressBar label={'20'} className="danger" now={20} key={2} />
              <ProgressBar label={'10'} className="info" now={10} key={4} />
              <ProgressBar label={'10'} className="pending" now={10} key={5} />
            </ProgressBar>
            <DotInfo />
          </Card.Body>
        )}
      </Card>
    </ChartProgressStyle>
  );
};

export default ChartProgress;
