import SidebarMenu from './sidebar-menu';
// import VouchersWidgets from '../vouchers-widgets';
// import { Suspense } from 'react';

const Sidebar = () => (
  <aside id="sidebar">
    <SidebarMenu />
    {/* <Suspense fallback="loading vouchers...">
      <VouchersWidgets />
    </Suspense> */}

    {/*
      widget (stats?)
      logout button
      copyright footer
    */}
  </aside>
)

export default Sidebar;
