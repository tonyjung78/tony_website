import { Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <MenuBar/>
        } />
        <Route
          path="/resume"
          element={
            <>
              <MenuBar/>
              <Resume />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <MenuBar/>
              <Contact />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;