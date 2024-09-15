import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogPostCard from '../components/BlogPostCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Home = () => {
  const blogPosts = [1, 2, 3]; // Simulate blog posts

  const newsItems = [
    { id: 1, headline: "New Youth Event This Weekend!", image: "https://picsum.photos/2000/40" },
    { id: 2, headline: "Community Outreach Program", image: "https://picsum.photos/2000/40" },
    { id: 3, headline: "Special Mass for Youth", image: "https://picsum.photos/2000/40" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Welcome Section */}
        <section className="bg-gray-100 py-10 md:py-20">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dobrodošli pri Katoliški Mladini Ribnica</h2>
            <p className="text-lg md:text-xl mb-8">Skupaj rastemo v veri, prijateljstvu in služenju skupnosti.</p>
            <Link to="/about" className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm md:text-base">
              Spoznaj nas bolje
            </Link>
          </div>
        </section>

        {/* Sliding News Section */}
        <section className="py-10 bg-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Novice</h2>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
            >
              {newsItems.map((news) => (
                <SwiperSlide key={news.id}>
                  <div className="text-center bg-white shadow-lg p-4 rounded-lg">
                    <img src={news.image} alt={news.headline} className="w-full h-40 object-cover rounded-md mb-2" />
                    <h3 className="text-lg font-semibold">{news.headline}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Najnovejše objave</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map(post => (
                <BlogPostCard key={post} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
