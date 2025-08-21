import React, { useState } from 'react';
import { Calendar, Tag } from 'lucide-react';

const Lookbook: React.FC = () => {
  const [selectedCollection, setSelectedCollection] = useState('spring-2025');

  const collections = [
    {
      id: 'spring-2025',
      name: 'Spring 2025',
      description: 'Fresh minimalism meets contemporary comfort',
      images: [
        'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600'
      ]
    },
    {
      id: 'winter-essentials',
      name: 'Winter Essentials',
      description: 'Cozy layers and timeless warmth',
      images: [
        'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    }
  ];

  const currentCollection = collections.find(c => c.id === selectedCollection) || collections[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lookbook
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover how to style our pieces through curated looks and seasonal inspiration
          </p>
        </div>
      </section>

      {/* Collection Selector */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {collections.map((collection) => (
              <button
                key={collection.id}
                onClick={() => setSelectedCollection(collection.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCollection === collection.id
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {collection.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Header */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calendar size={20} className="text-gray-400" />
            <span className="text-gray-500">2025 Collection</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {currentCollection.name}
          </h2>
          <p className="text-lg text-gray-600">
            {currentCollection.description}
          </p>
        </div>
      </section>

      {/* Interactive Gallery */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCollection.images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  src={image}
                  alt={`${currentCollection.name} look ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
                
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white p-4 rounded-md">
                    <h3 className="font-semibold text-gray-900 mb-1">Look {index + 1}</h3>
                    <p className="text-sm text-gray-600">Tap to explore styling details</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Styling Tips */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Styling Tips
            </h2>
            <p className="text-gray-600">
              Learn how to incorporate these pieces into your wardrobe
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Layering Essentials",
                tip: "Start with basic pieces and add layers for depth and interest. Mix textures and proportions for a sophisticated look."
              },
              {
                title: "Color Coordination",
                tip: "Stick to a cohesive color palette. Neutral bases allow for versatile styling and easy mixing and matching."
              },
              {
                title: "Accessory Balance",
                tip: "Let one statement piece shine. If wearing bold accessories, keep clothing simple, and vice versa."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lookbook;