import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Katoliška Mladina Ribnica</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Domov</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/about" className="hover:underline">O nas</Link></li>
            <li><Link to="/contact" className="hover:underline">Kontakt</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
