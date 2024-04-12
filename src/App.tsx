import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Users from "./pages/Users";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#Router Test</Link>
        <nav>
          <Link to="/about"> About</Link>
          <Link to="/users"> Users</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/users" element={<Users />}></Route>

      </Routes>
    </BrowserRouter>
  );
}
