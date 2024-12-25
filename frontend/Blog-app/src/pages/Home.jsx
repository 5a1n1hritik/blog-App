import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Welcome to My Personal Blog
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Exploring ideas, sharing experiences, and learning together.
        </p>
        <div className="text-center">
          <button className="bg-blue-500 text-white hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            <a href="/blog">Read Latest Posts</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
