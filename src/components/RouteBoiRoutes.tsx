import React, { ReactElement } from "react";
import { useRouteBoi } from "../RouteBoiProvider";

const NotFound = () => {
  return (
    <h1>
      Hey I know you're lazy... 🤢 but put some effort to make your own error
      page, dumbass 🤡
    </h1>
  );
};

export const RouteBoiRoutes = ({
  children,
}: {
  children:
    | ReactElement<{ path: string; element: React.ReactNode }>
    | ReactElement<{ path: string; element: React.ReactNode }>[];
}) => {
  const { pathname } = useRouteBoi();

  const routes = React.Children.toArray(children) as ReactElement<{
    path: string;
    element: React.ReactNode;
  }>[];

  const matchedRoute = routes.find(
    (child) => child.props.path === pathname || child.props.path === "*"
  );

  if (!matchedRoute) {
    return <NotFound />;
  }

  return <>{matchedRoute.props.element}</>;
};
