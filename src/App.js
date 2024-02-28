import "./App.css";
import HomePage from "./pages/Hompage";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListAllApplication from "./pages/ListAllApplications";
import ErrorPage from "./common/ErrorPage";
import PushPage from "./pages/PushPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/all",
    element: <ListAllApplication />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/push",
    element: <PushPage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
