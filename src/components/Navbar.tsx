
import Logo from '../assets/logo-text.png'
import { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=' sticky top-0 z-50 border-b border-gray-200 bg-white backdrop-blur'>

     <div className='mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10'>

        <button onClick={()=> setIsOpen(!isOpen)} className='text-xl  text-gray-700 md:hidden' arail-label='Toggle menu'>
        {isOpen ? <FaXmark/> : <FaBars/>}</button>
       <img src={Logo} alt="" />
      
       <div className='hidden items-center gap-7 md:flex'>
        <a href="" className='test-sm text-gray-700 hover:text-orange-500'>Home</a>
        <a href="" className='test-sm text-gray-700 hover:text-orange-500'>Technology</a>
        <a href="" className='test-sm text-gray-700 hover:text-orange-500'>Projects</a>
        <a href="" className='test-sm text-gray-700 hover:text-orange-500'>About</a>
        <a href="" className='test-sm text-gray-700 hover:text-orange-500'>Contact</a>
       </div>

      <div className='flex items-center gap-2'>
        <button className='rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100'>Sign In</button>
        <button className='rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 px-3 py-2 text-sm font-semibold text-white hover:opacity-90'>Sign Up</button>
      </div>
      </div>



     {isOpen &&(
         <div className='border-t border-gray-200 bg-white px-5 py-4 md:hodden'>
          <div>
            <a href="" onClick={()=> setIsOpen(false)}>Home</a>
            <a href="" onClick={()=> setIsOpen(false)}>Technology</a>
            <a href="" onClick={()=> setIsOpen(false)}>Project</a>
            <a href="" onClick={()=> setIsOpen(false)}>About</a>
            <a href="" onClick={()=> setIsOpen(false)}>Contack</a>
          </div>
         </div>
     )}
    </nav>
  );
};

export default Navbar;