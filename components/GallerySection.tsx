import React from 'react';
import { GalleryCollection, GijinkaImage } from '../types';
import { FALLBACK_IMAGE } from '../constants';

interface GallerySectionProps {
  collection: GalleryCollection;
  onImageClick: (img: GijinkaImage) => void;
}

const GallerySection: React.FC<GallerySectionProps> = ({ collection, onImageClick }) => {
  return (
    <div className="mb-16">
      <div className="flex items-end justify-between mb-6 px-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
            {collection.title}
          </h2>
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold">
            {collection.description}
          </p>
        </div>
        <div className="hidden md:block h-1 flex-grow bg-zinc-800 ml-8 mb-2"></div>
      </div>

      <div className="overflow-x-auto pb-6 scrollbar-hide px-4">
        <div className="flex space-x-6">
          {collection.images.map((img) => (
            <div 
              key={img.id}
              onClick={() => onImageClick(img)}
              className="relative flex-none w-64 h-96 group cursor-pointer overflow-hidden rounded-md border border-zinc-800 hover:border-red-600 transition-all duration-300"
            >
              <img 
                src={img.url} 
                alt="Thumbnail"
                onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium line-clamp-2 drop-shadow-md">
                  {img.caption}
                </p>
                <p className="text-red-400 text-xs mt-1 uppercase font-bold">View Fullsize</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;