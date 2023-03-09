import Image from 'next/image';
import Sidebar from './components/sidebar';

import './reset.css';
import './index.css';

export const metadata = {
  title: 'React Suspense SSR Playground',
  description: 'NextJS app for HTML streaming',
}

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <main>
          <header id="header">
            <Image src="/adidas-logo.svg" className='logo' width={50} height={50} />
            <h1>React Suspense SSR Playground</h1>
          </header>
          <Sidebar />
          <section id="page">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}

export default Layout;
