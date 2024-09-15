import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostCard = ({ post }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <div className="p-4">
        <h3 className="text-xl font-bold">Naslov blog objave {post}</h3>
      </div>
      <div className="p-4">
        <img
          src={`https://picsum.photos/200/300`}
          alt={`Blog Post ${post}`}
          className="w-full h-48 object-cover mb-4 rounded-md"
        />
        <p className="text-gray-500">Kratek opis blog objave...</p>
      </div>
      <div className="p-4">
        <Link to={`/blog/post-${post}`} className="inline-block bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          Preberi več
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
