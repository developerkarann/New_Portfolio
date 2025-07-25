import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Chhaya",
      domain: 'Chhaya Makeover',
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      text: "Karan delivered an exceptional MERN stack application that exceeded our expectations. His clean code and intuitive user experiences are remarkable.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      image: "https://img.icons8.com/?size=100&id=106PofAoe3p7&format=png&color=000000",
      text: "Working with Karan was a game-changer. He built a scalable web application with excellent code quality and smart architectural decisions.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "Karan's expertise in modern web technologies helped us launch ahead of schedule. His communication and problem-solving skills are outstanding.",
      rating: 5
    },
    {
      id: 4,
      name: "David Thompson",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "Karan stands out for his clean coding practices and innovative solutions. He transformed our legacy system beautifully.",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Wang",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      text: "Karan's full-stack development skills are impressive. His dedication to quality and user experience is unmatched.",
      rating: 5
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <FaStar key={i} className="text-yellow-400 text-lg" />
    ));
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            What my clients say about working with me
          </p>
        </div>

        {/* Add CSS for fade animation */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        {/* Testimonial Slider */}
        <div className={`relative transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl overflow-hidden">
            <div className="relative h-80">
              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-300"
              >
                <FaChevronLeft className="text-white text-lg" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-300"
              >
                <FaChevronRight className="text-white text-lg" />
              </button>

              {/* Testimonial Content */}
              <div className="h-full flex items-center justify-center p-6">
                <div className="w-full flex justify-center">
                  <div
                    key={testimonials[currentIndex].id}
                    className="flex flex-col items-center justify-center text-center max-w-md mx-auto opacity-0 animate-fadeIn"
                    style={{ 
                      animation: 'fadeIn 0.6s ease-in-out forwards',
                      animationDelay: '0.1s'
                    }}
                  >
                    {/* Client DP */}
                    <img
                      src='https://img.icons8.com/?size=100&id=106PofAoe3p7&format=png&color=000000'
                      alt={testimonials[currentIndex].name}
                      className="w-20 h-20 rounded-full object-cover border-3 border-white/40 mb-5 shadow-lg"
                    />

                    {/* Client Name */}
                    <h4 className="text-white font-semibold text-xl mb-5">
                      {testimonials[currentIndex].name}
                    </h4>

                    {/* Review Text */}
                    <p className="text-gray-200 text-base leading-relaxed mb-5 px-4">
                      "{testimonials[currentIndex].text}"
                    </p>
                    
                    {/* Rating Stars */}
                    <div className="flex justify-center gap-1">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

       
      </div>
    </div>
  );
};

export default TestimonialsPage;