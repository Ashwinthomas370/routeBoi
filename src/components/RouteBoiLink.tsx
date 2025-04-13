import { useRouteBoi } from "../RouteBoiProvider";
import { PropsWithChildren, MouseEvent } from "react";

interface BaseLinkProps {
  to: string;
}

type RouteBoiLinkProps = PropsWithChildren<BaseLinkProps>;

export const RouteBoiLink = ({ to, children }: RouteBoiLinkProps) => {
  const { setPathname } = useRouteBoi();

  const handleLink = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (window.location.pathname === to) {
      window.history.replaceState({}, "", to);
    } else {
      window.history.pushState({}, "", to);
    }

    setPathname(to);
  };

  return (
    <a href={to} onClick={handleLink}>
      {children}
    </a>
  );
};
