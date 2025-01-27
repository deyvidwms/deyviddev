import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { About, Experiences, Home, Projects } from "./pages";
import { Layout } from "./components";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home />
            <About />
            <Experiences />
            <Projects />
          </Layout>
        } />
      </Routes>
    </Router>
  );
};

export default AppRouter;