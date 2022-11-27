import { ReactComponent as Logo } from '../../assets/adidas-logo.svg';

import Sidebar from '../sidebar';

const Layout = ({ children }) => {
  return (
    <main>
      <header id="header">
        <Logo className="logo" />
        <h1>React Suspense Playground</h1>
      </header>
      <Sidebar />
      <section id="page">
        {children}
      </section>
    </main>
  );
}

export default Layout;
