import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";

const Form = lazy(() => import("./pages/form"));
const Treasure = lazy(() => import("./pages/treasure"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Form />
              </Suspense>
            }
          />
          <Route
            path="/treasure"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Treasure />
              </Suspense>
            }
          />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
