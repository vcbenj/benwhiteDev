import logo from './logo.svg';
import './App.css';
import LandingPage from "./components/LandingPage.js";
import NavBar from "./components/NavBar.js";
import Blog from "./components/Blog.js";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<NavBar />
<div className="body-content">
<Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/about" element={<LandingPage />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/projects" element={<LandingPage />} />
        <Route exact path="/blog" element={<Blog />} />
</Routes>
      
      
       </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
