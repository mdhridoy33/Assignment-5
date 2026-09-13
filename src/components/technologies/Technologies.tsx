import React, { use, useState } from 'react';
import type { tech } from '../../type/techType';
import Techcard from './Techcard';
import StackSidebar from './StackSidebar';

interface TechProps {
  technologiesPromise: Promise<tech[]>;
}

const Technologies = ({ technologiesPromise }: TechProps) => {
  const technologies = use(technologiesPromise);
  const [selectedStack, setSelectedStack] = useState<tech[]>([]);

  const handleAddToStack = (item: tech) => {
    const isAlreadyAdded = selectedStack.some((t) => t.id === item.id);
    if (!isAlreadyAdded) {
      setSelectedStack((prev) => [...prev, item]);
    }
  };

  const handleRemoveItem = (id: string) => {
    setSelectedStack((prev) => prev.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <div className="container mx-auto py-7 px-4">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
          Explore the <span className="text-[#D946EF]">Technologies</span>
        </h1>
        <p className="text-[#64748B] text-sm md:text-base font-normal mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Techcard শুধুমাত্র একবার থাকবে */}
        <div className="flex-1 w-full min-w-0">
          <Techcard
            technologies={technologies}
            onAddToStack={handleAddToStack}
            selectedStack={selectedStack}
          />
        </div>

        <div className="w-full lg:w-80 shrink-0">
          <StackSidebar
            selectedStack={selectedStack}
            onRemoveItem={handleRemoveItem}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;