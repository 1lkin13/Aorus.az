import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavbarLinks, fakeData } from './constants/constant';
import Navbar from './components/navbar'; // Update the import path
import HomePage from './pages/HomePage';
import About from './pages/About.jsx';
import Preloader from './utils/Preloader.jsx';
import Contact from './pages/Contact.jsx';
import Login from './auth/login.jsx';
import AdminPanel from './components/Adminpanel.jsx'; // Update the import path

function App() {
  const [products, setProducts] = useState(fakeData);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleUpdate = (id) => {
    // Güncelleme işlemini burada yapabilirsiniz
    console.log(`Ürün güncelleme işlemi, ID: ${id}`);
  };

  return (
    <Router>
      <div className="app">
        {/* <Preloader> */}
          <Navbar links={NavbarLinks} />
          <Routes>
            <Route
              path="/"
              element={<HomePage products={products} onDelete={handleDelete} onUpdate={handleUpdate} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <AdminPanel
                  products={products}
                  onDelete={handleDelete}
                  onUpdate={handleUpdate}
                />
              }
            />
          </Routes>
        {/* </Preloader> */}
      </div>
    </Router>
  );
}

export default App;
