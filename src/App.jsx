import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./layouts/HomePage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<HomePage />} />)
  );

  return <RouterProvider router={router} />;
};

export default App;
