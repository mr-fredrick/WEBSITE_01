import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { mockBlogPosts } from '../data/mockData';

const Blog: React.FC = () => {
  const featuredPost = mockBlogPosts[0];
  const otherPosts = mockBlogPosts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fashion Journal
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Style inspiration, sustainability insights, and the stories behind our collections
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-black text-white px-3 py-1 text-xs font-medium rounded-full">
                  Featured
                </span>
                <span className="text-gray-500 text-sm">{featuredPost.category}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                  <Calendar size={16} />
                  <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                  <User size={16} />
                  <span>{featuredPost.author}</span>
                </div>
              </div>
              <Link
                to={`/blog/${featuredPost.id}`}
                className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
              >
                <span>Read Article</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-96 object-cover rounded-lg shadow-premium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">
            Recent Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-premium transition-shadow duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-gray-500 text-sm">{post.category}</span>
                    <div className="flex items-center space-x-1 text-gray-500 text-sm">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-3 hover:text-gray-600 transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center space-x-1 text-black font-medium hover:underline"
                  >
                    <span>Read more</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
            Stay Inspired
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest style tips, collection updates, and exclusive content
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Lookbook;