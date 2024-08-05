import App from "./App";
import PricesPage from "./routes/PricesPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/pricepage", element: <PricesPage /> },
]);
