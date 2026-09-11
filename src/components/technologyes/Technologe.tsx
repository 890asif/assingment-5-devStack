import { use } from 'react';
import type { Technologes } from '../../type/type';
import { FaStar } from "react-icons/fa6";

interface TechnologyProps{
    technologiesPromise: Promise<Technologes[]>
    addToStack: (technology: Technologes)=> void
}

const Technologe = ({technologiesPromise, addToStack}:TechnologyProps) => {
    const technologes = use(technologiesPromise)
    return (
    <div>
    <div>
        <h1 className='text-4xl font-bold'>Explore the <span className='bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text
            text-transparent'>Technologies</span></h1>
    <p className='text-gray-500 my-4'>Pick one technology per category to build your ideal stack.</p>
    </div>
     <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 m-15'>
        {technologes.map((technologe)=>(
            <div key={technologe.id} className='flex min-h-70 flex-col rounded-xl border border-gray-200 bg-white p-4 transition hover:shadow-md'>
                <div className='mb-4 flex items-start justify-between'>
                    <img src={technologe.icon} alt={technologe.name} className='h-8 w-8 object-contain' />

                    <h4>{technologe.badge}</h4>
                </div>
                <h2 className='mb-2 font-bold text-gray-900'>{technologe.name}</h2>
                <p className='mb-4 text-x text-gray-500'>{technologe.description}</p>

                <div className='mt-auto'>
                    <div className=' mb-3 items-center flex justify-between text-[12px]  font-semibold text-gray-800'>
                        <p className='rounded bg-gray-100 px-2 py-1'>{technologe.category}</p>
                        <p>{technologe.difficulty}</p>
                        <div className='flex items-center gap-1'>
                        <FaStar className='text-yellow-400' />
                        <p>{technologe.rating}</p>
                        
                        </div>
                        
                    </div>

                    <button onClick={() => addToStack(technologe)} className='w-full rounded-md bg-[#111827] py-2 text-x font-semibold transition hover:bg-gray-500 text-white m-2'>Add to Stack</button>
                </div>
                </div>
        ))}
    </div>
</div>

    );
};

export default Technologe;


