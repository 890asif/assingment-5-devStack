
import { use } from 'react';
import type { Technologes } from '../../type/type';


interface TechnologyProps{
    technologiesPromise: Promise<Technologes[]>
}

const Technologe = ({technologiesPromise}:TechnologyProps) => {
    console.log(technologiesPromise)
    const technologe = use(technologiesPromise);
    console.log(technologe, "technologe")
    return (
        <div className='ml-10'>
           <div className='mb-10 ml-8'>
             <h2 className='text-4xl font-semibold'>Explore the <span className='text-[#D76CC1]'>Technologies</span></h2>
            <p className='text-gray-700 mt-2'>Pick one technology per category to build your ideal stack.</p>
           </div>

    
        <div className='grid grid-cols-3 gap-6 mt-6'>
        {technologe.map((technologe)=>(
        <div>
        <div className="card bg-base-100 w-86 shadow-sm rounded-2xl p-6">
        <figure className='flex gap-40 py-2' >
        <img
      src= {technologe.icon}
      alt="photo" className='w-13' />
      <h4>{technologe.badge}</h4>
       </figure>
      <div className="card-body">
     <h2 className="card-title font-semibold">{technologe.name}</h2>
     <p className='my-4 text-gray-700'>{technologe.description}</p>
     <div className='flex gap-6 my-4 text-gray-700  items-center mb-6'>
        <h3 className='bg-gray-200 rounded-xl px-2 py-1'>{technologe.category}</h3>
        <h3>{technologe.difficulty}</h3>
        <h3>⭐{technologe.rating}</h3>
     </div>
     <div className="flex items-center justify-center">
      <button className="bg-[#0A0F1D] text-white px-20 py-2 rounded-xl">Add to Stack</button>
      
    </div>
  </div>
</div>
</div>
    
    ))} 
    </div>

    </div>
   );       
};

export default Technologe;