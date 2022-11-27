import { useEffect, useState, useTransition, createContext } from 'react';

export const NavigatonContext = createContext();

export const useLocationPathname = () => {
  const [isPending, startTransition] = useTransition();
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const onNavigate = ({ state, detail }) => {
      const pageUrl = state?.pageUrl ?? detail?.pageUrl;

      pageUrl && startTransition(() => setPathname(pageUrl));
    }
    window.addEventListener('popstate', onNavigate);
    return () => window.removeEventListener('popstate', onNavigate);
  }, []);

  return [ pathname, isPending ]
}


const NavigatonContextProvider = ({ children }) => {
  const [ pathname, isPending ] = useLocationPathname();

  return (
    <NavigatonContext.Provider value={{ pathname, isPending }}>
      {children}
    </NavigatonContext.Provider>
  );
}


export default NavigatonContextProvider;