
import type { Technologes } from '../../type/type';
import Technologe from './Technologe';

interface YourStackProps{
    stack: Technologes[]
    removeFromStack: (id: number)=>void;
    removeAll: () => void

}

const YourStack = ({stack, removeFromStack, removeAll}:YourStackProps) => {
    return (
        <div  className=' w-87.5 bg-white shadow-md rounded-xl p-5'>
            <div className='mb-5 flex items-center justify-between'>
               <h2 className='text-xl font-bold'>Your Stack</h2>
               <span className='text-sm text-gray-500'>{stack.length} Technology Selected</span>
            </div>

        {stack.length > 0 && (
            <div className='space-y-3'>
                {stack.map((technology)=>(
            <div key={technology.id} className='flex items gap-3 rounded-lg border p-3' >
                <img src={technology.icon} alt={technology.name} className='h-10 w-10' />

            <div className='dlex-1'>
            <h3 className='font-semibold'>t{technology.name}</h3>
            <p className='text-sm text-gray-500'>{technology.category}</p>
            </div>
            <button onClick={()=> removeFromStack(technology.id)} className='text-lg font-bold text-red-500 hover:text-red-700'>
              X
            </button>
                </div>
                ))}
                <button onClick={removeAll} className='mt-3 w-full rounded-lg border border-red-400 py-2 text-red-500 hover:bg-red-50'>Remove All</button>
            </div>
            )}
        </div>
    );
};
                   
        
export default YourStack;