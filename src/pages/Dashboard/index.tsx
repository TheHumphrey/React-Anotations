import React, { ReactElement } from 'react';

import { GeneralLayout, ChartProgress, TableDelivery, FooterLayout, NavBarLayout, ModalTable } from '../../components';

const DashboardPage = (): ReactElement => (
  <>
    <GeneralLayout>
      <NavBarLayout />
      <ChartProgress />
      <ModalTable />
      <TableDelivery />
      <FooterLayout />
    </GeneralLayout>
  </>
);

export default DashboardPage;
