import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "@/components/layout/RootLayout";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { HomePage } from "@/pages/HomePage";
import { FlavorsPage } from "@/pages/FlavorsPage";
import { AboutPage } from "@/pages/AboutPage";
import { StoresPage } from "@/pages/StoresPage";
import { RecipesPage } from "@/pages/RecipesPage";
import { ContactPage } from "@/pages/ContactPage";
import { JobsPage } from "@/pages/JobsPage";
import { JobDetailPage } from "@/pages/JobDetailPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <RootLayout />
      </>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: "flavors", element: <FlavorsPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "stores", element: <StoresPage /> },
      { path: "recipes", element: <RecipesPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "jobs", element: <JobsPage /> },
      { path: "jobs/:slug", element: <JobDetailPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
