# route-boi

A simple routing package for React applications, inspired by React Router DOM. I built this to understand how routing works behind the scenes.

## Features

- **Route Management**: Easily manage your routes with `RouteBoiProvider` and `RouteBoiRoutes`.
- **Custom Navigation Hook**: Programmatically navigate between routes using `useNavigateBoi`.
- **Dynamic Routing**: Define and manage routes dynamically with the `RouteBoiRoutes` component.
- **Link Component**: Navigate between pages using the `RouteBoiLink` component.

## Installation

```bash
npm install route-boi


Usage
1. Setup RouteBoiProvider
Wrap your application in RouteBoiProvider to manage routing context globally.

jsx
Copy
Edit
import { RouteBoiProvider } from 'route-boi';

function App() {
  return (
    <RouteBoiProvider>
      {/* Your app components */}
    </RouteBoiProvider>
  );
}
2. Define Routes with RouteBoiRoutes
Define your routes using the RouteBoiRoutes component.

jsx
Copy
Edit
import { RouteBoiRoutes } from 'route-boi';

const routes = [
  { path: '/', component: <Home /> },
  { path: '/about', component: <About /> },
];

<RouteBoiRoutes routes={routes} />;
3. Navigation with RouteBoiLink Component
Use the RouteBoiLink component to create navigational links.

jsx
Copy
Edit
import { RouteBoiLink } from 'route-boi';

<RouteBoiLink to="/about">Go to About Page</RouteBoiLink>
4. Programmatic Navigation with useNavigateBoi
Use the useNavigateBoi hook to programmatically navigate between routes.

jsx
Copy
Edit
import { useNavigateBoi } from 'route-boi';

const MyComponent = () => {
  const navigate = useNavigateBoi();

  const goToAbout = () => {
    navigate('/about');
  };

  return <button onClick={goToAbout}>Go to About</button>;
};
```
