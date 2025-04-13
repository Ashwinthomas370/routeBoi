import { ReactElement } from "react";
import { useRouteBoi } from "../RouteBoiProvider";

interface RouteBoiProps {
  path: string;
  element: ReactElement;
}

export const RouteBoi = ({ path, element }: RouteBoiProps) => {
  const { pathname } = useRouteBoi();

  return pathname === path ? element : null;
};
