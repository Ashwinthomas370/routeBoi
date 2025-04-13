import { createContext, useContext, useEffect, useState } from "react";

interface RouteBoiContextType {
  pathname: string;
  setPathname: React.Dispatch<React.SetStateAction<string>>;
}

export const RouteBoiContext = createContext<RouteBoiContextType | null>(null);

export const RouteBoiProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <RouteBoiContext.Provider value={{ pathname, setPathname }}>
      {children}
    </RouteBoiContext.Provider>
  );
};

export const useRouteBoi = (): RouteBoiContextType => {
  const context = useContext(RouteBoiContext);
  if (!context) {
    throw new Error("useRouteBoi must be used within a RouteBoiProvider");
  }
  return context;
};
