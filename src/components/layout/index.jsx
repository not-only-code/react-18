import { ReactComponent as Logo} from '../../assets/adidas-logo.svg';

import Sidebar from '../sidebar';
import styles from './index.module.css';
 
const Layout = ({ children }) => {
  return (
      <main className={styles.main}>
        <header className={styles.header}>
          <Logo className={styles.logo} />
          <h1>React Suspense Playground</h1>
        </header>
        <Sidebar />
        <section>
          {children}
        </section>
      </main>
  );
}

export default Layout;
