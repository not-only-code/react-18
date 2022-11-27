import { Suspense } from 'react';

import Loading from '../loading';
import SidebarMenu from './sidebar-menu';
import ErrorBoundary from '../error-boundary';

import styles from './index.module.css';

const Sidebar = () => (
  <aside className={styles.sidebar}>
    <nav className={styles.navigation}>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <SidebarMenu />
        </Suspense>
      </ErrorBoundary>
    </nav>
  </aside>
)

export default Sidebar;