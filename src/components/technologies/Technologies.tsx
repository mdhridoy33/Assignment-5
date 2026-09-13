import React, { use } from 'react';
import type { tech } from '../../type/techType';

interface TechProps {
    technologiesPromise: Promise<tech[]>
}

const Technologies = ({technologiesPromise}:TechProps) => {
    console.log(technologiesPromise)
    const technologies = use(technologiesPromise)
    console.log(technologies,"technologies")
    return (
        <div>
            
        </div>
    );
};

export default Technologies;