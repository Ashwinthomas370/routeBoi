import { useRouteBoi } from "../RouteBoiProvider";

export const useNavigateBoi = () => {
  const { setPathname } = useRouteBoi();

  const handleLink = (to: string): void => {
    if (window.location.pathname === to) {
      window.history.replaceState({}, "", to);
    } else {
      window.history.pushState({}, "", to);
    }

    setPathname(to);
  };

  return handleLink;
};
