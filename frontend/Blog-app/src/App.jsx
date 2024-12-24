import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
