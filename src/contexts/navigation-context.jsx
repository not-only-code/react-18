import { useEffect, useState, useTransition, createContext } from 'react';

export const NavigatonContext = createContext();


export const useLocationPathname = () => {
  const [isPending, startTransition] = useTransition();
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const onNavigate = ({ detail }) => {
      detail?.pathname && startTransition(() => setPathname(detail.pathname) );
    }
    window.addEventListener('navigate', onNavigate);
    return () => window.removeEventListener('navigate', onNavigate);
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