import React from 'react';
import { SWRConfig } from 'swr';
import { swrFetcher as fetcher } from './utils/suspense';
import NavigatonContextProvider from './contexts/navigation-context';

import ErrorBoundary from './components/error-boundary';
import Layout from './components/layout';
import Routes from './components/routes';

function Root() {
  return (
    <ErrorBoundary>
      <SWRConfig value={{ fetcher, suspense: true, revalidateIfStale: true }}>
        <NavigatonContextProvider>
          <Layout>
            <Routes />
          </Layout>
        </NavigatonContextProvider>
      </SWRConfig>
    </ErrorBoundary>
  );
}

export default Root;