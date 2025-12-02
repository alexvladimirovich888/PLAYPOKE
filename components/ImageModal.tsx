import React from 'react';
import { GijinkaImage } from '../types';
import { FALLBACK_IMAGE } from '../constants';

interface ImageModalProps {
  image: GijinkaImage | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  const shareText = encodeURIComponent(`Check this hot ${image.caption} on PlayPoke!`);
  const shareUrl = encodeURIComponent(image.url); // Ideally this would be the app URL, but using image for demo
  const twitterIntent = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="relative max-w-5xl w-full bg-zinc-900 rounded-lg overflow-hidden shadow-2xl border border-zinc-700 flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white hover:text-red-500 rounded-full transition-colors"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Container */}
        <div className="w-full md:w-3/4 bg-black flex items-center justify-center">
          <img 
            src={image.url} 
            alt="Gallery Fullscreen"
            onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
            className="max-h-[80vh] w-auto object-contain"
          />
        </div>

        {/* Info Sidebar */}
        <div className="w-full md:w-1/4 p-6 flex flex-col justify-between border-l border-zinc-800">
          <div>
            <h3 className="text-2xl font-serif font-bold text-red-500 mb-4">PlayPoke Exclusive</h3>
            <p className="text-gray-300 italic font-light leading-relaxed">
              "{image.caption}"
            </p>
          </div>

          <div className="mt-8">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Share this beauty</p>
            <a 
              href={twitterIntent}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-3 bg-[#1DA1F2] hover:bg-[#1a91da] text-white font-bold rounded transition-colors gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              Tweet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;