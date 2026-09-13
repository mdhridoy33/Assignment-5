import React from 'react';
import type { tech } from '../../type/techType';

interface StackSidebarProps {
  selectedStack: tech[];
  onRemoveItem: (id: string) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({ selectedStack, onRemoveItem, onRemoveAll }: StackSidebarProps) => {
  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm rounded-3xl p-6 w-full lg:w-80 shrink-0 sticky top-6">
     
      <div className="mb-4">
        <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>
        <p className="text-sm text-slate-400 font-medium mt-0.5">
          {selectedStack.length} Technology Selected
        </p>
      </div>


      <div className="space-y-3 mb-6">
        {selectedStack.length === 0 ? (
          <p className="text-xs text-slate-400 text-center py-4">
            No technologies selected yet.
          </p>
        ) : (
          selectedStack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 border border-slate-100 rounded-2xl bg-white shadow-xs"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800 leading-none mb-1">
                    {item.name}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-medium block">
                    {item.category}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onRemoveItem(item.id)}
                className="btn btn-ghost btn-xs btn-circle text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

   
      {selectedStack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="btn btn-outline btn-error w-full rounded-2xl text-xs font-semibold border-rose-200 text-rose-500 hover:bg-rose-50 hover:border-rose-300 hover:text-rose-600"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default StackSidebar;