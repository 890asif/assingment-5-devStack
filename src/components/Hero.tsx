import Banner from '../assets/banner-stack.png' 
 
const Hero = () => { 
    return ( 
        <section className='mx-auto flex max-w-7xl flex-col items-center gap-10 px-8 py-5 lg:flex-row lg:px-10'>
            <div className='flex-1 ml-12'> 
                
            <h1 className='text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl'>Build Your Ideal{" "}
             <span className='bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent'>Development Stack</span>
                </h1> 
            
            <p className='mt-5 max-w-xl text-base leading-7 text-gray-600'>Explore frontend, backend, database, and tooling options,<br /> 
                compare them side by side, and put together the stack that fits your 
                next project.</p> 


            <div className='flex mt-8 flex-wrap gap-4'> 

                    <a href='' className='bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-5 py-3 rounded-lg transition hover:bg-purple-500'>Explore Technologies</a> 

                    <a href='' className='border border-gray-300 text-gray-700 font-semibold px-10 py-2 rounded-lg hover:bg-pink-500 hover:text-white'>Learn More</a>
             </div> 
             </div> 
                
        <div className='flex-1'> 
            <img src={Banner} alt="Photo" className='mx-auto w-full max-w-xl object-contain' /> 
        </div>  
        </section>
    ); 
}; 
 
export default Hero; 
 



