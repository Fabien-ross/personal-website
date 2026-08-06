import { Navigate, createBrowserRouter } from "react-router-dom";
import LanguageLayout from "../components/layout/LanguageLayout/LanguageLayout";
import {
  CategoryPage,
  SingleContent,
  NotFound,
  Home
} from "../pages";
import PageTransition from "../components/layout/PageTransition/PageTransition";

const router = createBrowserRouter([
  {
    path: "/:lang",
    element: (
      <PageTransition>
        <LanguageLayout />
      </PageTransition>
      ),
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
        path: ":type",
        element: <CategoryPage />,
      },
      {
        path: ":type/:slug",
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