import Banner from '../assets/banner-stack.png' 
 
const Hero = () => { 
    return ( 
        <div className='flex items-center gap-10 px-30 mt-10'> 
            <div> 
 
            <h1 className='text-5xl font-bold'>Build Your Ideal</h1> 
            <h1 className='text-5xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-800 bg-clip-text 
            text-transparent'>Development Stack</h1> 
 
            <p className='my-5 text-gray-700'>Explore frontend, backend, database, and tooling options,<br /> 
                compare them side by side, and put together the stack that fits your 
                next project.</p>    
 
                <div className='flex gap-6 mt-12'> 
                    <button className='bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-3 py-1 rounded-xl hover:bg-purple-500'>Explore Technologies</button> 
                    <button className='border border-gray-300 text-gray-700 font-semibold px-9 py-3 rounded-xl'>Learn More</button> 
                </div> 
        </div> 
                
        <div> 
            <img src={Banner} alt="hero-photo" /> 
        </div> 
         
        </div> 
    ); 
}; 
 
export default Hero; 
 