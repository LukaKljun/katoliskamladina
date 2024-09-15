import React from 'react';
import { Link } from 'react-router-dom';

// You can define these components in the same way you have defined them in Home.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* About Section */}
        <section className="bg-gray-100 py-10 md:py-20">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O nas</h2>
            <p className="text-lg md:text-xl mb-8">
              Katoliška Mladina Ribnica je skupina mladih, ki se zavzema za rast v veri in prijateljstvu. Organiziramo različne dogodke in aktivnosti za mlade v naši skupnosti.
            </p>
            <img
              src="https://picsum.photos/200/300"
              alt="About Us"
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <p className="text-lg md:text-xl mb-8">
              Pridružite se nam in bodite del našega skupnostnega gibanja!
            </p>
            <div className="text-center">
              <Link
                to="/"
                className="inline-flex items-center bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Nazaj na domov
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
