import React, { ReactElement, useState } from 'react';
import ContentLoader from 'react-content-loader';

const LoadingChart = (): ReactElement => {
  const [tamanho] = useState(document.body.offsetWidth - 75);

  return (
    <ContentLoader width={tamanho} height={'14vh'} backgroundColor="#eaeced" foregroundColor="#ffffff">
      <rect x="3" y="0" rx="3" ry="3" width="200" height="25" />
      <rect x="3" y="40" rx="3" ry="3" width="1810" height="17" />

      <rect x="3" y="86" rx="3" ry="3" width="100" height="25" />
      <rect x="143" y="86" rx="3" ry="3" width="100" height="25" />
      <rect x="283" y="86" rx="3" ry="3" width="100" height="25" />
      <rect x="423" y="86" rx="3" ry="3" width="100" height="25" />
      <rect x="563" y="86" rx="3" ry="3" width="100" height="25" />
    </ContentLoader>
  );
};

export default LoadingChart;
