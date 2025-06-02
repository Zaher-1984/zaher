import React from 'react';

interface CardProps {
  title: string;
  subtitle?: string;
  dateRange?: string;
  descriptionItems?: string[];
  description?: string;
  tags?: string[];
  imageUrl?: string;
  liveLink?: string;
  repoLink?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  dateRange,
  descriptionItems,
  description,
  tags,
  imageUrl,
  liveLink,
  repoLink,
  className = ''
}) => {
  return (
    <div className={`bg-brand-surface rounded-lg shadow-xl p-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${className}`}>
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
      )}
      <h3 className="text-xl font-semibold text-brand-text mb-1">{title}</h3>
      {subtitle && <p className="text-brand-accent text-sm font-medium mb-1">{subtitle}</p>}
      {dateRange && <p className="text-brand-text-secondary text-xs mb-3">{dateRange}</p>}
      
      {description && <p className="text-brand-text-secondary text-sm mb-4 leading-relaxed">{description}</p>}
      
      {descriptionItems && descriptionItems.length > 0 && (
        <ul className="list-disc list-inside space-y-1 text-brand-text-secondary text-sm mb-4 leading-relaxed">
          {descriptionItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-slate-700 text-sky-300 text-xs font-mono px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      )}

      {(liveLink || repoLink) && (
        <div className="mt-auto pt-4 border-t border-slate-700 flex space-x-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-accent hover:text-brand-accent-hover font-medium text-sm transition-colors"
            >
              Live Demo
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-accent hover:text-brand-accent-hover font-medium text-sm transition-colors"
            >
              View Code
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
