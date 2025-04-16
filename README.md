# route-boi

A small and easy-to-use routing library for React, inspired by React Router DOM.
Built from scratch to  understand how client-side routing really works under the hood.

## Features

- **Simplified Route Management** - Define and organize your application routes with `RouteBoiProvider` and `RouteBoiRoutes`
- **Programmatic Navigation** - Navigate between routes using the custom `useNavigateBoi` hook
- **Declarative Link Component** - Navigate between pages using the simple `RouteBoiLink` component
- **Zero Dependencies** - Lightweight implementation with no external dependencies

## Installation

```bash
npm install route-boi
```

## Quick Start

### 1. Set Up the Provider

Wrap your application in `RouteBoiProvider` to enable routing functionality throughout your app:

```jsx
import { RouteBoiProvider } from "route-boi";

function App() {
  return <RouteBoiProvider>{/* Your app components */}</RouteBoiProvider>;
}
```

### 2. Define Your Routes

Create routes using the `RouteBoiRoutes` component:

```jsx
import { RouteBoiRoutes } from "route-boi";
import Home from "./pages/Home";
import About from "./pages/About";

function AppRoutes() {
  const routes = [
    { path: "/", component: <Home /> },
    { path: "/about", component: <About /> },
  ];

  return <RouteBoiRoutes routes={routes} />;
}
```

### 3. Create Navigation Links

Use the `RouteBoiLink` component for in-app navigation:

```jsx
import { RouteBoiLink } from "route-boi";

function Navigation() {
  return (
    <nav>
      <RouteBoiLink to="/">Home</RouteBoiLink>
      <RouteBoiLink to="/about">About</RouteBoiLink>
    </nav>
  );
}
```

### 4. Navigate Programmatically

Use the `useNavigateBoi` hook when you need to navigate within component logic:

```jsx
import { useNavigateBoi } from "route-boi";

function Dashboard() {
  const navigate = useNavigateBoi();

  const handleLogout = () => {
    // Perform logout operations
    navigate("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
```

## API Reference

### `RouteBoiProvider`

The context provider that powers Route Boi's routing system.

```jsx
<RouteBoiProvider>{/* Your application */}</RouteBoiProvider>
```

### `RouteBoiRoutes`

Component for defining and rendering routes.

```jsx
<RouteBoiRoutes
  routes={[
    { path: "/", component: <Home /> },
    { path: "/about", component: <About /> },
  ]}
/>
```

### `RouteBoiLink`

Component for navigation between routes.

```jsx
<RouteBoiLink to="/about">About Us</RouteBoiLink>
```

### `useNavigateBoi`

Hook for programmatic navigation.

```jsx
const navigate = useNavigateBoi();
navigate("/dashboard");
```
