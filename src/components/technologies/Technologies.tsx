import React, { use, } from 'react';
import type { tech } from '../../type/techType';
import Techcard from './Techcard';

interface TechProps {
    technologiesPromise: Promise<tech[]>
}

const Technologies = ({technologiesPromise}:TechProps) => {
    console.log(technologiesPromise)
    const technologies = use(technologiesPromise)
    console.log(technologies,"technologies")
    
    
    

   
  
    return (

       <div className='container mx-auto py-7'>
        <div className="  mb-8 ">
  <h1 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
    Explore the <span className="text-[#D946EF]">Technologies</span>
  </h1>
  <p className="text-[#64748B] text-sm md:text-base font-normal mt-2">
    Pick one technology per category to build your ideal stack.
  </p>
</div>


        <Techcard technologies={technologies}/>
       </div>
    
    );
};

export default Technologies;