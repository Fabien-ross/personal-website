import { Navigate, createBrowserRouter } from "react-router-dom";
import LanguageLayout from "../components/layout/LanguageLayout/LanguageLayout";
import {
  CategoryPage,
  SingleContent,
  NotFound,
  Home,
  About
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
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />
      },
      {
        path: "docs/:type",
        element: <CategoryPage />,
      },
      {
        path: "docs/:type/:slug",
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