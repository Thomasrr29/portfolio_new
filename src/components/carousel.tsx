import React, { useState, useEffect } from 'react';
import { CertificateStructure } from '../data/certificates/certificates';

interface CarouselProps {
  autoPlay: boolean;
  autoPlayInterval: number;
  slides: CertificateStructure[];
}

const Carousel: React.FC<CarouselProps> = ({ 
  slides, 
  autoPlay, 
  autoPlayInterval 
}) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const totalSlides = slides.length;

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, autoPlayInterval);
    
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, totalSlides]);

  const goToSlide = (slideIndex: number): void => {
    setActiveSlide(slideIndex);
  };

  const goToPrevSlide = (): void => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const goToNextSlide = (): void => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-14 md:py-22">
      {/* Carousel wrapper */}
      <div className="relative flex justify-center items-center h-[50vh] md:h-[70vh] lg:h-[80vh] max-h-[800px] overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`
              absolute w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] h-full 
              transition-all duration-700 ease-in-out
              ${activeSlide === index 
                ? 'opacity-100 scale-100 z-10' 
                : 'opacity-0 scale-90 z-0'
              }
            `}
            style={{
              transform: `translateX(${(index - activeSlide) * 100}%)`,
            }}
          >
            <div className="relative w-full h-full flex justify-center items-center">
              <img 
                src={slide.url_image} 
                className="max-w-full max-h-full object-contain 
                           absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                           transition-transform duration-700 ease-in-out 
                           hover:scale-105" 
                alt={slide.alt || `Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`
              w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300
              ${activeSlide === index 
                ? 'bg-white'
                : 'bg-white/50  hover:scale-110'
              }
            `}
            aria-current={activeSlide === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
      
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-1/2 start-0 md:start-4 z-30 
                   -translate-y-1/2 flex items-center justify-center 
                   h-full w-12 md:w-16 cursor-pointer group focus:outline-none"
        onClick={goToPrevSlide}
      >
        <span className="inline-flex items-center justify-center 
                         w-10 h-10 md:w-12 md:h-12 rounded-full 
                         bg-white/30
                         group-hover:bg-white/50
                         transition-all duration-300 ease-in-out 
                         group-hover:scale-110">
          <svg
            className="w-4 h-4 md:w-6 md:h-6 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      
      <button
        type="button"
        className="absolute top-1/2 end-0 md:end-4 z-30 
                   -translate-y-1/2 flex items-center justify-center 
                   h-full w-12 md:w-16 cursor-pointer group focus:outline-none"
        onClick={goToNextSlide}
      >
        <span className="inline-flex items-center justify-center 
                         w-10 h-10 md:w-12 md:h-12 rounded-full 
                         bg-white/30 
                         group-hover:bg-white/50 
                         transition-all duration-300 ease-in-out 
                         group-hover:scale-110">
          <svg
            className="w-4 h-4 md:w-6 md:h-6 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;