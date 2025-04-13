import {
  RouteBoi,
  RouteBoiRoutes,
  useNavigateBoi,
  RouteBoiProvider,
} from "route-boi";

function About() {
  return <h1>this is about page</h1>;
}

function Error() {
  return <h1>err</h1>;
}

function Home() {
  const navigate = useNavigateBoi();
  const handleLink = () => {
    return navigate("/about");
  };
  return (
    <>
      <button onClick={handleLink}>click</button>
    </>
  );
}

function Contact() {
  return <h1>this is Contact page</h1>;
}

function App() {
  return (
    <RouteBoiProvider>
      <RouteBoiRoutes>
        <RouteBoi path="/" element={<Home />} />
        <RouteBoi path="/about" element={<About />} />
        <RouteBoi path="/contact" element={<Contact />} />
        <RouteBoi path="*" element={<Error />} />
      </RouteBoiRoutes>
    </RouteBoiProvider>
  );
}

export default App;
