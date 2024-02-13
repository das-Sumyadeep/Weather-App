import "./App.css";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./Pages/Home"));

function App() {
  return (
    <>
      <Suspense fallback={<></>}>
        <Home/>
      </Suspense>
    </>
  );
}

export default App;
