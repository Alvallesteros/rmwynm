import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { when_you } from '../data';
import messageContent from '../messages';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MessagePage = () => {
  const { messageId: hyphenatedId } = useParams();
  const messageId = hyphenatedId.replace(/-/g, '_');
  
  const displayName = when_you[messageId] || "Message not found";
  const content = messageContent[messageId] || "Message content not found.";
  
  // Function to render an individual card based on its content type
  const renderCard = (card, index) => {
    if (!card) return null;
    
    // Determine the size class based on the tuple
    let sizeClass = "grid-cell-1-1"; // Default size is 1x1
    
    if (card.size) {
      let rowSpan = 1;
      let colSpan = 1;
      
      if (typeof card.size === 'string') {
        // Parse from string format like "(1,1)"
        const matches = card.size.match(/\((\d+),(\d+)\)/);
        if (matches && matches.length === 3) {
          rowSpan = parseInt(matches[1]);
          colSpan = parseInt(matches[2]);
        }
      } else if (Array.isArray(card.size)) {
        [rowSpan, colSpan] = card.size;
      } else {
        // Handle tuple as a direct object - this is the key fix for tuple parsing
        try {
          // Handle case where size is a tuple object from JavaScript
          rowSpan = card.size[0] || 1;
          colSpan = card.size[1] || 1;
        } catch (e) {
          // If all else fails, default to 1x1
          rowSpan = 1;
          colSpan = 1;
        }
      }
      
      // Ensure we don't exceed the grid size (3 columns max)
      colSpan = Math.min(colSpan, 3);
      
      // Set the appropriate size class
      sizeClass = `grid-cell-${rowSpan}-${colSpan}`;
    }
    
    // Base class for all cards
    const baseCardClass = `grid-cell ${sizeClass} h-full flex f items-center justify-center`;
    
    switch(card.type) {
      case 'image':
        return (
          <div key={index} className={baseCardClass}>
            <div className="card-content h-full flex flex-col">
              <div className="overflow-hidden rounded-lg flex-grow">
                <img 
                  src={card.url} 
                  alt={card.alt || "Image"} 
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              {card.caption && <p className="mt-3 text-sm text-gray-600 italic px-2">{card.caption}</p>}
            </div>
          </div>
        );
      case 'video':
        return (
          <div key={index} className={baseCardClass}>
            <div className="card-content h-full flex flex-col">
              <div className="relative w-full flex-grow">
                <iframe 
                  src={card.url} 
                  title={card.title || "Video"} 
                  className="absolute inset-0 w-full h-full rounded-md" 
                  allowFullScreen
                  frameBorder="0"
                  loading="lazy"
                ></iframe>
              </div>
              {card.caption && <p className="mt-3 text-sm text-gray-600 italic">{card.caption}</p>}
            </div>
          </div>
        );
      case 'html':
        return (
          <div key={index} className={baseCardClass}>
            <div className="card-content h-full flex flex-col">
              <div className="flex-grow w-full h-full flex flex-col justify-center" dangerouslySetInnerHTML={{ __html: card.html }} />
            </div>
          </div>
        );
      default:
        if (typeof card === 'string') {
          return (
            <div key={index} className={baseCardClass}>
              <div className="card-content h-full flex flex-col">
                <p className="text-lg leading-relaxed flex-grow">{card}</p>
              </div>
            </div>
          );
        }
        return (
          <div key={index} className={baseCardClass}>
            <div className="card-content h-full flex flex-col">
              <pre className="text-sm overflow-auto p-3 bg-gray-100 rounded flex-grow">
                {JSON.stringify(card, null, 2)}
              </pre>
            </div>
          </div>
        );
    }
  };

  // Render all content types
  const renderContent = () => {
    // If content is a simple string
    if (typeof content === 'string') {
      return content.split('\n\n').map((paragraph, index) => (
        <div key={index} className="grid-cell grid-cell-2-1">
          <div className="card-content">
            <p className="text-lg leading-relaxed">{paragraph}</p>
          </div>
        </div>
      ));
    }
    
    // If content is an object with card structure
    if (content && typeof content === 'object') {
      // Check if it has card1, card2 etc. format
      const hasCards = Object.keys(content).some(key => key.startsWith('card'));
      
      if (hasCards) {
        // Sort the cards by their number to ensure proper order
        return Object.entries(content)
          .filter(([key]) => key.startsWith('card'))
          .sort(([keyA], [keyB]) => {
            const numA = parseInt(keyA.replace('card', ''));
            const numB = parseInt(keyB.replace('card', ''));
            return numA - numB;
          })
          .map(([key, cardContent], index) => renderCard(cardContent, key));
      }
      
      // If it's just a single content object (legacy format)
      return [renderCard(content, 'main-content')];
    }
    
    // Fallback for any other case
    return [
      <div key="not-found" className="grid-cell grid-cell-2-2">
        <div className="card-content">
          <p className="text-lg text-gray-600 text-center">No content available</p>
        </div>
      </div>
    ];
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-green-600">
            {displayName}
          </h2>
          <div className="h-1 w-48 mx-auto bg-orange-500 rounded"></div>
        </div>

        {/* Grid layout with the new grid system - now with 3 columns */}
        <div className="grid-container">
          {renderContent()}
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MessagePage;