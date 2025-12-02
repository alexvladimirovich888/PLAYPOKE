
import React, { useState, useEffect } from 'react';
import { ViewState, GijinkaImage } from './types';
import { GALLERIES, ARTICLES, VIDEOS, FALLBACK_IMAGE, EXOTIC_IMAGES, TRAINER_IMAGES } from './constants';
import Navbar from './components/Navbar';
import GallerySection from './components/GallerySection';
import ImageModal from './components/ImageModal';
import ArticleCard from './components/ArticleCard';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [selectedImage, setSelectedImage] = useState<GijinkaImage | null>(null);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://img10.joyreactor.cc/pics/post/full/Pokémon-Ero-Pokémon-фэндомы-6275180.jpeg"
            alt="Cover Girl"
            onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
            className="w-full h-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <p className="text-red-500 font-bold tracking-[0.5em] uppercase mb-4 text-sm md:text-base animate-pulse">
            The Ultimate Gijinka Collection
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-6 tracking-tighter shadow-black drop-shadow-xl">
            PLAY<span className="text-red-600">POKE</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-200 font-light font-serif italic mb-10">
            "Where fantasy meets form."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentView(ViewState.GALLERIES)}
              className="px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-all transform hover:scale-105"
            >
              Enter Galleries
            </button>
            <button 
               onClick={() => setCurrentView(ViewState.ARTICLES)}
               className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Read Articles
            </button>
          </div>
        </div>
      </section>

      {/* Featured Teaser */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Courtney: <br/> <span className="text-red-500">Magma's Muse</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              The Admin of Team Magma opens up about her unique style, her devotion to the cause, and what it takes to look this good while awakening legendary titans.
            </p>
            <button 
              onClick={() => setCurrentView(ViewState.ARTICLES)}
              className="text-white border-b-2 border-red-500 pb-1 hover:text-red-500 transition-colors uppercase tracking-widest text-sm font-bold"
            >
              Read the Interview
            </button>
          </div>
          <div className="order-1 md:order-2 h-[600px] relative rounded-lg overflow-hidden border border-zinc-800">
            <img 
              src={TRAINER_IMAGES[0].url}
              alt="Courtney Teaser"
              onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000" 
            />
          </div>
        </div>
      </section>
    </>
  );

  const renderGalleries = () => (
    <div className="pt-32 pb-20 max-w-[1920px] mx-auto">
      <div className="text-center mb-16 px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">The Collections</h1>
        <p className="text-gray-400 uppercase tracking-widest">Curated for the discerning trainer</p>
      </div>
      
      {GALLERIES.map((gallery) => (
        <GallerySection 
          key={gallery.slug} 
          collection={gallery} 
          onImageClick={setSelectedImage} 
        />
      ))}
    </div>
  );

  const renderArticles = () => (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">Lifestyle & Reads</h1>
        <p className="text-gray-400 uppercase tracking-widest">Culture, Fashion, and Gijinka</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ARTICLES.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );

  const renderVideos = () => (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
       <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">PlayPoke TV</h1>
        <p className="text-red-500 uppercase tracking-widest font-bold">Uncensored. Uncut. Unleashed.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {VIDEOS.map((video) => (
          <div key={video.id} className="bg-zinc-900 p-4 rounded-lg border border-zinc-800">
            <div className="aspect-w-16 aspect-h-9 w-full mb-4 bg-black">
              <iframe 
                className="w-full h-[300px]"
                src={video.embedUrl} 
                title={video.title}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-xl font-serif font-bold text-white">{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-black min-h-screen text-white selection:bg-red-600 selection:text-white">
      <Navbar currentView={currentView} setView={setCurrentView} />

      <main>
        {currentView === ViewState.HOME && renderHome()}
        {currentView === ViewState.GALLERIES && renderGalleries()}
        {currentView === ViewState.ARTICLES && renderArticles()}
        {currentView === ViewState.VIDEOS && renderVideos()}
      </main>

      <footer className="bg-zinc-900 border-t border-zinc-800 py-12 text-center">
        <div className="flex justify-center items-center gap-2 mb-6">
          <span className="text-2xl font-serif font-bold tracking-tighter">PLAY<span className="text-red-600">POKE</span></span>
          <span className="text-xl">🐰</span>
        </div>
        <div className="flex justify-center space-x-6 mb-8 text-sm text-gray-400 uppercase tracking-widest">
          <span className="hover:text-white cursor-pointer">Terms</span>
          <span className="hover:text-white cursor-pointer">Privacy</span>
          <span className="hover:text-white cursor-pointer">Models</span>
          <span className="hover:text-white cursor-pointer">Subscribe</span>
        </div>
        <p className="text-zinc-600 text-xs">
          &copy; {new Date().getFullYear()} PlayPoke. All rights reserved. 
          <br/>This is a parody application. Pokémon is a trademark of Nintendo.
        </p>
      </footer>

      <ImageModal 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </div>
  );
};

export default App;
