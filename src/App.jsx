import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./layouts/HomePage";
import References from "./layouts/References";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/references" element={<References />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
