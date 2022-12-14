import { useContext } from 'react';
import { lazy, Suspense } from 'react';
import { NavigatonContext } from '../../contexts/navigation-context';
import ErrorBondary from '../error-boundary';
import LinearLoader from '../linear-loader';
import Loading from '../loading';

const ProductsPage = lazy(() => import('../../pages/products'));
const ProfilePage = lazy(() => import('../../pages/profile'));

const DefaultPage = () => {
  return (
    <>
      <header>
        <h2>Default page</h2>
      </header>
      <div>
        <h3>Nothing selected yet</h3>
      </div>
    </>
  )
}

const Switch = ({ pathname }) => {
  switch (pathname) {
    case '/products':
      return <ProductsPage />;
    case '/profile': 
      return <ProfilePage />;
    default:
      return <DefaultPage />;
  }
}

const Routes = () => {
  const { pathname, isPending } = useContext(NavigatonContext);

  return (
    <ErrorBondary>
      {isPending && <LinearLoader className="page-loader" />}
      <Suspense fallback={<Loading />}>
        <Switch pathname={pathname} />
      </Suspense>
    </ErrorBondary>
  )
}

export default Routes;