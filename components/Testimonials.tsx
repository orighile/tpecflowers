import React, { useState, useCallback, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-12">What Our Clients Say</h2>
        <div className="relative overflow-hidden h-56 flex items-center">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="absolute w-full h-full transition-opacity duration-700 ease-in-out"
              style={{ opacity: index === currentIndex ? 1 : 0 }}
            >
              <blockquote className="text-xl italic text-gray-700 mb-4">
                "{testimonial.quote}"
              </blockquote>
              <p className="font-bold text-brand-dark uppercase tracking-wider">{testimonial.author}</p>
            </div>
          ))}
        </div>
         <div className="flex justify-center mt-8 space-x-3">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-rose' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;