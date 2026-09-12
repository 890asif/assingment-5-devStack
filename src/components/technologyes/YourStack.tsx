
import type { Technologes } from '../../type/type';


interface YourStackProps{
    stack: Technologes[]
    removeFromStack: (id: string)=>void;
    removeAll: () => void

}

const YourStack = ({stack, removeFromStack, removeAll}:YourStackProps) => {
    return (
        <div  className='w-full rounded-xl border border-gray-200 bg-white p-5 shadow-md lg:sticky lg:top-24'>
            <div className='mb-5 flex items-center justify-between gap-3'>

               <h2 className='text-xl font-bold text-gray-800'>Your Stack</h2>

               <span className='text-right text-sm  text-gray-500'>{stack.length} Technology Selected</span>

            </div>

        {stack.length === 0 ? (
            <div className='rounded-lg bg-gray-50 px-4 py-10 text-center'>
                <p className='font-semibold text-gray-600'>Your Stack is empty</p>

            <p className='mt-2 text-sm leading-6 text-gray-400'>Add technologies to build your ideal stack.</p>
            </div>
        ):( <div className='space-y-3'>
            {stack.map((technologe) =>(
                <div key={technologe.id} className='flex items-center gap-3 rounded-lg border border-gray-200 p-3'>
                    <img src={technologe.icon} alt={`${technologe.name}`}  className='h-9 w-9 object-contain'/>

                    <div className='min-w-0 flex-1'>
                        <h3 className='truncate text-sm font-semibold text-gray-800'>{technologe.name}</h3>

                        <p className='text-xs text-gray-500'>{technologe.category}</p>

                        <button onClick={()=> removeFromStack(technologe.id)} className='rounded-md px-2 py-1 font-bold text-red-500 transition hover:bg-red-50' aria-label={`Remove ${technologe.name}`}>
                            X
                        </button>
                </div>
                </div>
            ))}

             <button onClick={removeAll} className='mt-3 w-full rounded-lg border border-red-200 px-4 py-2 text-sm  text-red-500 hover:bg-red-50 font-semibold'>Remove All</button> 
            </div>
            )}
        </div>
    );
};
                   
        
export default YourStack;