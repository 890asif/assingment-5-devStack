import { use } from 'react';
import type { Technologes } from '../../type/type';
import { FaStar } from "react-icons/fa6";

interface TechnologyProps{
    technologiesPromise: Promise<Technologes[]>;
    addToStack: (technologe: Technologes)=> void
    stack: Technologes[];
}

const Technologe = ({technologiesPromise, addToStack, stack}: TechnologyProps) => {
    const technologes = use(technologiesPromise)
    return (
     <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {technologes.map((technologe)=>{
            const isAdded = stack.some(
            (item) => item.id === technologe.id
            );
           
           return(
           <div key={technologe.id} className='flex min-h-80 flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm  transition duration-300 hover:-translate-y-1 hover:shadow-md'>
                    <div className='mb-5 flex items-start justify-between gap-3'>
                    <img src={technologe.icon} alt={`${technologe.name} icon`} className='h-12 w-12 object-contain'/>

                    <span className='rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600'>{technologe.badge}</span>
                </div>

                <h2 className='text-xl font-bold text-gray-800'>{technologe.name}</h2>

                <p className='mt-2 text-sm leading-6 text-gray-500'>{technologe.description}</p>

                <div className='mt-auto'>
                    <div className=' my-5 flex flex-wrap items-center justify-between  gap-1 text-xs text-gray-500'>
                        <span className='rounded-md bg-gray-100 px-2 py-1'>{technologe.category}</span>

                        <span>{technologe.difficulty}</span>

                        <div className='flex items-center gap-1'>
                        <FaStar className='text-yellow-400' />
                        <p>{technologe.rating}</p>
                        
                        </div>
                        
                    </div>

                    <button disabled={isAdded} onClick={() => addToStack(technologe)} className={`w-full rounded-lg bg-[#111827] px-4 py-2.5 text-sm  font-semibold transition text-white ${isAdded ? "cursor-not-allowed bg-gray-500" : " hover:opacity-90" }`}>{isAdded ? "Added to Stack" : "Add to Stack"}</button>
                </div>
              </div>
           );
        })}
    </div>
    );
};

export default Technologe;


