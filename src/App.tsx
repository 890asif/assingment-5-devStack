
import { Suspense } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Technologe from './components/technologyes/Technologe'
import type { Technologes } from './type/type'

const technologiesPromise = async():Promise<Technologes[]>=>{
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}

function App() {

  return (
    <>
       
       <Navbar/>
       <Hero/>

    <Suspense fallback = {<h2>Loading.....</h2>} >
            <Technologe technologiesPromise = {technologiesPromise()} />
    </Suspense>
    </>
  )
}

export default App
