import React from 'react';
import { Article } from '../types';
import { FALLBACK_IMAGE } from '../constants';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600 transition-colors group">
      <div className="h-64 overflow-hidden relative">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">
          Exclusive
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center text-xs text-gray-500 mb-3 uppercase tracking-widest">
          <span>{article.author}</span>
          <span>{article.date}</span>
        </div>
        <h3 className="text-2xl font-serif font-bold text-white mb-2 leading-tight group-hover:text-red-500 transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-400 mb-4 font-light">
          {article.subtitle}
        </p>
        <div className="prose prose-invert prose-sm line-clamp-4 text-gray-400">
            {article.content.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <button className="mt-6 text-red-500 text-sm font-bold uppercase tracking-wider hover:text-white transition-colors">
          Read Full Story &rarr;
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;