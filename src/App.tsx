
import { Suspense, useState } from 'react'
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
const [stack, setStack] = useState<Technologes[]>([]);

const addToStack = (technologe: Technologes)=>{
  setStack([...stack, technologe]);
}

const removeFromStack = (id:number)=>{
    setStack((prev)=>prev.filter((item)=>item.id !== id));
  };

  const removeAll = ()=>{
    setStack([]);
  };
  return (
    <>
       
       <Navbar/>
       <Hero/>
  
    
        <div>
           <div className='mx-15 mt-20'>
              <h1 className='text-4xl font-bold'>Explore the <span className='bg-gradient-to-r from-orange-500 via-pink-500 to-purple-800 bg-clip-text
            text-transparent'>Technologies</span></h1>
               <p className='text-gray-700 mt-4'>Pick one technology per category to build your ideal stack.</p>
        </div>
        <div className='flex'>
          <Suspense fallback = {<h2 className='font-semibold text-xl text-gray-700'>Loading.....</h2>} >
            <Technologe technologiesPromise = {technologiesPromise()} 
            addToStack = {addToStack}/>
            </Suspense>

            <div className='mt-15 mr-10'>
               <YourStack stack={stack}
               removeFromStack={removeFromStack}
               removeAll={removeAll}/>
            </div>
  
       </div>
        </div>

        <Footer/>
    </>
  )
}

export default App
