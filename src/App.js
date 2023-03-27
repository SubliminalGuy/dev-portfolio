import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./componentes/Layout";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Main from "./pages/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<Project />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
