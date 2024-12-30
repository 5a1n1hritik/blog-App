import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import MarkdownEditor from "./components/MarkdownEditor";
import Register from "./components/Register";
import Login from "./components/Login";
import UpdateBlog from "./components/UpdateBlog";
import CreateMarkdownBlogs from "./components/CreateMarkdownBlogs";
import DeleteBlogs from "./components/DeleteBlogs";

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          {/* <Route path="/edit-blog/:blogId" element={<MarkdownEditor />} /> */}
          <Route path="/new/blog" element={<CreateMarkdownBlogs />} />
          <Route path="/edit-blog/:blogId" element={<UpdateBlog />} />
          <Route path="/delete-blog/:blogId" element={<DeleteBlogs />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
