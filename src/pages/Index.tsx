import { lazy, Suspense } from "react";

import Loading from "@/components/Loading";

const Home = lazy(() => import("@/pages/Home"));
const Tech = lazy(() => import("@/pages/Tech"));
const Projects = lazy(() => import("@/pages/Projects"));
const About = lazy(() => import("@/pages/About"));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Home />
      <Tech />
      <Projects />
      <About />
    </Suspense>
  );
}
