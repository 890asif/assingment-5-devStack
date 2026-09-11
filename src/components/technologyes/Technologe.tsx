
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
        <div>
            <h2 className='text-2xl font-semibold'>Explore the <span className='text-[#D76CC1]'>Technologies</span></h2>
            <p className='text-gray-700'>Pick one technology per category to build your ideal stack.</p>

    
        <div className='grid grid-cols-3 gap-6 mt-6'>
        {technologe.map((technologe)=>(
        <div key={technologe.id}>
        <div className="card bg-base-100 w-86 shadow-sm rounded-2xl">
        <figure className='flex gap-50 py-4' >
        <img
      src= {technologe.icon}
      alt="photo" className='w-10' />
      <h4>{technologe.badge}</h4>
       </figure>
      <div className="card-body">
     <h2 className="card-title">{technologe.name}</h2>
     <p className='my-4'>{technologe.description}</p>
     <div className='flex gap-6 my-4'>
        <h3>{technologe.category}</h3>
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