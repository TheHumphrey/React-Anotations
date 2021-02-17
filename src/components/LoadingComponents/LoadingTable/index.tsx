import React, { ReactElement, useState } from 'react';
import ContentLoader from 'react-content-loader';

const LoadingTable = (): ReactElement => {
  const [tamanho] = useState(document.body.offsetWidth - 40);

  return (
    <ContentLoader width={tamanho} height={'64vh'} backgroundColor="#eaeced" foregroundColor="#ffffff">
      <rect x="30" y="20" rx="3" ry="3" width="1560" height="40" />
      <rect x="1600" y="20" rx="3" ry="3" width="110" height="40" />
      <rect x="1720" y="20" rx="3" ry="3" width="110" height="40" />

      <rect x="30" y="86" rx="3" ry="3" width="240" height="25" />
      <rect x="280" y="86" rx="3" ry="3" width="230" height="25" />
      <rect x="520" y="86" rx="3" ry="3" width="230" height="25" />
      <rect x="760" y="86" rx="3" ry="3" width="230" height="25" />
      <rect x="1000" y="86" rx="3" ry="3" width="230" height="25" />
      <rect x="1240" y="86" rx="3" ry="3" width="230" height="25" />
      <rect x="1480" y="86" rx="3" ry="3" width="350" height="25" />

      <rect x="30" y="126" rx="3" ry="3" width="1800" height="18" />
      <rect x="30" y="166" rx="3" ry="3" width="1800" height="18" />
      <rect x="30" y="206" rx="3" ry="3" width="1800" height="18" />
      <rect x="30" y="246" rx="3" ry="3" width="1800" height="18" />
      <rect x="30" y="286" rx="3" ry="3" width="1800" height="18" />
      <rect x="30" y="326" rx="3" ry="3" width="1800" height="18" />
      <rect x="30" y="366" rx="3" ry="3" width="1800" height="18" />
      <rect x="30" y="406" rx="3" ry="3" width="1800" height="18" />
      <rect x="30" y="446" rx="3" ry="3" width="1800" height="18" />
      <rect x="30" y="486" rx="3" ry="3" width="1800" height="18" />
      <rect x="30" y="526" rx="3" ry="3" width="1800" height="18" />
      <rect x="30" y="566" rx="3" ry="3" width="1800" height="18" />
      {/* <rect x="30" y="586" rx="3" ry="3" width="1800" height="18" /> */}
    </ContentLoader>
  );
};

export default LoadingTable;
