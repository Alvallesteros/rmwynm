import React, { useState, useEffect, useRef } from 'react';

/**
 * SlideShow Component
 * @param {Object} props
 * @param {Array} props.photos - Array of photo objects with src and alt properties
 * @param {number} props.autoPlayInterval - Interval in ms for auto-play (default: 5000)
 * @param {boolean} props.showControls - Whether to show navigation controls (default: true)
 * @param {boolean} props.showIndicators - Whether to show slide indicators (default: true)
 * @param {string} props.objectFit - How the images should fit ('cover' or 'contain') (default: 'cover')
 */
const SlideShow = ({ 
    photos = [], 
    autoPlayInterval = 5000, 
    showControls = true, 
    showIndicators = true,
    objectFit = 'cover'
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const timerRef = useRef(null);

    // Handle auto-play functionality
    useEffect(() => {
        if (isPlaying) {
            timerRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
            }, autoPlayInterval);
        }

        return () => {
            clearInterval(timerRef.current);
        };
    }, [isPlaying, photos.length, autoPlayInterval]);

    // Navigation functions
    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    // If no photos are provided, show a placeholder
    if (!photos || photos.length === 0) {
        return (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
                <p className="text-gray-500">No images to display</p>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full overflow-hidden rounded-lg">
            {/* Slides */}
            <div className="w-full h-full">
                {photos.map((photo, index) => (
                    <div 
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                        <img 
                            src={typeof photo === 'string' ? photo : photo.src} 
                            alt={(photo.alt || `Slide ${index + 1}`)}
                            className={`w-full h-full object-${objectFit}`} 
                        />
                    </div>
                ))}
            </div>

            {/* Controls */}
            {showControls && (
                <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
                    <button
                        onClick={togglePlayPause}
                        className="p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 focus:outline-none"
                        aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                    >
                        {isPlaying ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                        )}
                    </button>
                    <button
                        onClick={goToPrevSlide}
                        className="p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 focus:outline-none"
                        aria-label="Previous slide"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <button
                        onClick={goToNextSlide}
                        className="p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 focus:outline-none"
                        aria-label="Next slide"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            )}

            {/* Indicators */}
            {showIndicators && photos.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 z-20">
                    <div className="flex justify-center space-x-2">
                        {photos.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full focus:outline-none ${
                                    index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SlideShow;