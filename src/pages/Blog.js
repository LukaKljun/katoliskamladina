import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Simulated blog posts data
const blogPosts = [
  { id: 1, title: "First Blog Post", summary: "This is a summary of the first blog post.", image: "https://picsum.photos/200/300" },
  { id: 2, title: "Second Blog Post", summary: "This is a summary of the second blog post.", image: "https://picsum.photos/200/300" },
  { id: 3, title: "Third Blog Post", summary: "This is a summary of the third blog post.", image: "https://picsum.photos/200/300" }
];

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Blog Section */}
        <section className="bg-gray-100 py-10 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map(post => (
                <div key={post.id} className="bg-white shadow-lg rounded-md overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-700 mb-4">{post.summary}</p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Preberi več
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
