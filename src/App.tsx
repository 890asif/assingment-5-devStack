
import { Suspense, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Technologe from './components/technologyes/Technologe'
import type { Technologes } from './type/type'
import YourStack from './components/technologyes/YourStack'


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
  return (
    <>
       
       <Navbar/>
       <Hero/>

      <div className='flex gap-10 '>
        <div className='flex-1'>
          <Suspense fallback = {<h2>Loading.....</h2>} >
            <Technologe technologiesPromise = {technologiesPromise()} 
            addToStack = {addToStack}/>
            </Suspense>
       </div>
            <div className='w-80'>
                  <YourStack stack={stack}/>
            </div>
    </div>

    </>
  )
}

export default App
