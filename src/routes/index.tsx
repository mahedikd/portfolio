import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "@/layout";
import Index from "@/pages/Index";
import Loading from "@/components/Loading";

const Tech = lazy(() => import("@/pages/Tech"));
const Projects = lazy(() => import("@/pages/Projects"));
const About = lazy(() => import("@/pages/About"));
const Resume = lazy(() => import("@/pages/Resume"));
const NoMatch = lazy(() => import("@/pages/NoMatch"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "/tech",
        element: (
          <Suspense fallback={<Loading />}>
            <Tech />
          </Suspense>
        ),
      },
      {
        path: "/projects",
        element: (
          <Suspense fallback={<Loading />}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/resume",
        element: (
          <Suspense fallback={<Loading />}>
            <Resume />
          </Suspense>
        ),
      },
      {
        path: "/loading",
        element: (
          <Suspense fallback={<Loading />}>
            <Loading />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loading />}>
            <NoMatch />
          </Suspense>
        ),
      },
    ],
  },
]);

export default routes;
