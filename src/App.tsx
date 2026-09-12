
import { Suspense, useState } from 'react';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Technologe from './components/technologyes/Technologe'
import type { Technologes } from './type/type'
import YourStack from './components/technologyes/YourStack'
import Footer from './components/technologyes/Footer'



const technologiesPromise = async():Promise<Technologes[]>=>{
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}

function App() {
const [stack, setStack] = useState<Technologes[]>([])

const addToStack = (technologe: Technologes)=>{
  const alreadyExists = stack.some(
    (item) => item.id === technologe.id
  );

  if (alreadyExists){
    return;
  }

  setStack((prev) => [...prev, technologe]);
};

const removeFromStack = (id:string)=>{
    setStack((prev)=>prev.filter((item)=> item.id !== id));
  };

  const removeAll = ()=>{
    setStack([]);
  };
  return (
    <>
       
       <Navbar/>
       <Hero/>
  
    <section className='mx-auto mt-20 max-w-7xl px-6 lg:px-10'>
          
           <div className='mb-8'>
              <h1 className='text-3xl font-bold md:text-4xl'>Explore the <span className='bg-gradient-to-r from-orange-500 via-pink-500 to-purple-800 bg-clip-text
            text-transparent'>Technologies</span></h1>
               <p className='mt-3 text-sm text-gray-500 md:text-base'>Pick one technology per category to build your ideal stack.</p>
        </div>
        <div className='flex flex-col gap-8 lg:flex-row '>
          <div className='main-w-0 flex-1'>
            <Suspense fallback = {<h2 className='font-semibold text-xl text-gray-700'>Loading technologies...</h2>} >
            <Technologe technologiesPromise = {technologiesPromise()} 
            addToStack = {addToStack} stack={stack}/>
            </Suspense>
          </div>

            <div className='w-full lg:w-80'>
               <YourStack stack={stack}
               removeFromStack={removeFromStack}
               removeAll={removeAll}/>
            </div>
  
       </div>
    </section>

        <Footer/>
    </>
  )
}

export default App
