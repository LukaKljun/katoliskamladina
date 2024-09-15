import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16 p-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Katoliška Mladina Ribnica</h3>
          <p>Skupaj v veri in prijateljstvu.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
          <p>Email: info@katoliska-mladina-ribnica.si</p>
          <p>Tel: +386 1 234 5678</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Sledite nam</h3>
          <div className="flex space-x-4">
            <Link to="#" className="hover:text-blue-500">Facebook</Link>
            <Link to="#" className="hover:text-blue-500">Instagram</Link>
            <Link to="#" className="hover:text-blue-500">Twitter</Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Katoliška Mladina Ribnica. Vse pravice pridržane.
      </div>
    </footer>
  );
};

export default Footer;
