import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavbarLinks } from "./constants/constant";
import Navbar from "./components/navbar"; // Update the import path
import HomePage from "./pages/Home/HomePage.jsx";
import About from "./pages/About/About.jsx";
import Preloader from "./utils/Preloader.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Login from "./pages/auth/login.jsx";
import Products from "./pages/Products/ProductsPage.jsx"
import AdminPanel from "./pages/AdminPanel/AdminPanel.jsx"; 
import ReadMore from "./pages/ReadMore/ReadMore.jsx";

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Preloader> */}
        <Navbar links={NavbarLinks} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productspage" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/readmore/:id" element={<ReadMore />} />

          
        </Routes>
        {/* </Preloader> */}
      </div>
    </Router>
  );
}

export default App;
