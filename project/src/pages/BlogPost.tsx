import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { mockBlogPosts } from '../data/mockData';

const BlogPost: React.FC = () => {
  const { id } = useParams();
  const post = mockBlogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h2>
          <Link to="/blog" className="text-black underline">Return to journal</Link>
        </div>
      </div>
    );
  }

  const otherPosts = mockBlogPosts.filter(p => p.id !== id);

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Journal</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm font-medium rounded-full">
              {post.category}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-gray-500">
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User size={16} />
              <span>{post.author}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg shadow-premium"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
            {post.excerpt}
          </p>
          
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>
              The world of fashion is constantly evolving, but some principles remain timeless. 
              In this comprehensive guide, we explore how to build a wardrobe that reflects your 
              personal style while embracing sustainable and mindful consumption practices.
            </p>
            
            <p>
              Whether you're starting from scratch or refining your existing collection, 
              the key is to focus on quality over quantity. Each piece should serve multiple 
              purposes and work harmoniously with other items in your wardrobe.
            </p>
            
            <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
              The Foundation Pieces
            </h2>
            
            <p>
              Building a sophisticated wardrobe starts with investing in well-made basics. 
              These foundation pieces form the backbone of countless outfits and provide 
              the versatility you need for various occasions.
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>A perfectly fitted white button-down shirt</li>
              <li>High-quality denim in a classic cut</li>
              <li>A tailored blazer in a neutral color</li>
              <li>Comfortable yet elegant footwear</li>
              <li>A versatile outerwear piece</li>
            </ul>
            
            <p>
              Remember, true style is about expressing your authentic self through your choices. 
              Fashion should make you feel confident and comfortable, reflecting your personality 
              and values in every outfit you create.
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            More Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherPosts.map((relatedPost) => (
              <article key={relatedPost.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-premium transition-shadow duration-300">
                <img
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-gray-500 text-sm">{relatedPost.category}</span>
                    <div className="flex items-center space-x-1 text-gray-500 text-sm">
                      <Calendar size={14} />
                      <span>{new Date(relatedPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-3 hover:text-gray-600 transition-colors">
                    <Link to={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{relatedPost.excerpt}</p>
                  <Link
                    to={`/blog/${relatedPost.id}`}
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
    </div>
  );
};

export default Blog;