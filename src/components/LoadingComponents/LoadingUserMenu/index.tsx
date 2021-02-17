import React, { ReactElement } from 'react';
import ContentLoader from 'react-content-loader';

const LoadingUserMenu = (): ReactElement => {
  return (
    <ContentLoader width={200} height={60} backgroundColor="#eaeced" foregroundColor="#ffffff">
      <circle cx="145" cy="30" r="25" />
      <rect x="0" y="12" rx="3" ry="3" width="105" height="16" />
      <rect x="0" y="32" rx="3" ry="3" width="105" height="16" />
    </ContentLoader>
  );
};

export default LoadingUserMenu;
