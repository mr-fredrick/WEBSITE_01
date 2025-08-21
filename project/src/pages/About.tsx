import React from 'react';
import { Heart, Leaf, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Founded on the belief that fashion should be both beautiful and responsible, 
            Brand Name creates premium pieces that celebrate individual style while respecting our planet.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                How It All Started
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Brand Name was born from a simple yet powerful vision: to create fashion that tells a story. 
                  Our founders, passionate about both design and sustainability, saw an opportunity to bridge 
                  the gap between high fashion and ethical production.
                </p>
                <p>
                  What started as a small collection of essential pieces has grown into a full lifestyle brand, 
                  but our commitment to quality, sustainability, and authentic self-expression remains unchanged.
                </p>
                <p>
                  Every piece in our collection is designed to be timeless, versatile, and made to last. 
                  We believe that true style transcends trends and that the best fashion pieces are those 
                  that become part of your personal story.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Brand story"
                className="w-full h-96 object-cover rounded-lg shadow-premium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from design to production to customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Authenticity</h3>
              <p className="text-gray-600 text-sm">
                We believe in creating pieces that reflect your true self and personal style journey.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Sustainability</h3>
              <p className="text-gray-600 text-sm">
                Committed to ethical production and sustainable materials for a better future.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">
                Every piece is crafted with meticulous attention to detail and premium materials.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Community</h3>
              <p className="text-gray-600 text-sm">
                Building a community of conscious consumers who value style and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Behind the Scenes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a look at our design process and the craftsmanship that goes into every piece
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <img
                src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Design process"
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="font-semibold text-lg">Design Process</h3>
              <p className="text-gray-600 text-sm">
                From initial sketches to final fittings, every design is carefully crafted and tested.
              </p>
            </div>

            <div className="space-y-4">
              <img
                src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Material selection"
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="font-semibold text-lg">Material Selection</h3>
              <p className="text-gray-600 text-sm">
                We source only the finest sustainable materials from certified suppliers worldwide.
              </p>
            </div>

            <div className="space-y-4">
              <img
                src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Craftsmanship"
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="font-semibold text-lg">Expert Craftsmanship</h3>
              <p className="text-gray-600 text-sm">
                Each piece is carefully constructed by skilled artisans who take pride in their work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;