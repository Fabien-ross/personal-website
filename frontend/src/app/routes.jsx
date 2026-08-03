import { Navigate, createBrowserRouter } from "react-router-dom";
import LanguageLayout from "../i18n/LanguageLayout";
import {
  CategoryPage,
  SingleContent,
  NotFound,
  Home
} from "../pages";


const router = createBrowserRouter([
  {
    path: "/:lang",
    element: <LanguageLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />
      },
      {
        path: ":category",
        element: <CategoryPage />,
      },
      {
        path: ":category/:slug",
        element: <SingleContent />,
        errorElement: <NotFound />,
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/fr" replace />
  }
]);

export default router;