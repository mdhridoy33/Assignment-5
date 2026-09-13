import React from 'react';
import type { tech } from '../../type/techType';


interface TechcardProps {
  technologies: tech[];
  onAddToStack?: (item: tech) => void;
  selectedStack?: tech[];
}

const Techcard = ({ technologies, onAddToStack, selectedStack = [] }: TechcardProps) => {
  console.log(technologies, "yt");

  return (
  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
     
      {technologies.map((techcard) => {
        const isAdded = selectedStack.some((item) => item.id === techcard.id);

        return (
          <div
            key={techcard.id}
            className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-all rounded-3xl"
          >
            <div className="card-body p-6 justify-between">
              <div>
                {/* Icon & Badge */}
                <div className="flex justify-between items-center mb-4">
                  <div className="avatar">
                    <div className="w-10 h-10">
                      <img src={techcard.icon} alt={techcard.name} />
                    </div>
                  </div>
                  <span className="badge badge-info badge-soft font-semibold text-xs py-3 px-3">
                    {techcard.badge}
                  </span>
                </div>

             
                <h2 className="card-title text-xl font-bold text-base-content mb-1">
                  {techcard.name}
                </h2>
                <p className="text-xs text-base-content/60 leading-relaxed mb-6 line-clamp-3">
                  {techcard.description}
                </p>

                <div className="flex items-center gap-2 mb-2 text-xs">
                  <span className="badge badge-ghost font-medium">
                    {techcard.category}
                  </span>
                  <span className="text-base-content/60 font-medium">
                    {techcard.difficulty}
                  </span>
                  <span className="flex items-center gap-1 font-bold text-base-content ml-auto">
                    <span className="text-warning text-sm">★</span> {techcard.rating}
                  </span>
                </div>
              </div>

           
              <div className="card-actions mt-4">
                <button
                  onClick={() => onAddToStack && onAddToStack(techcard)}
                  disabled={isAdded}
                  className={`btn btn-block text-xs font-semibold rounded-xl ${
                    isAdded
                      ? 'btn-success btn-soft cursor-not-allowed'
                      : 'btn-neutral'
                  }`}
                >
                  {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Techcard;