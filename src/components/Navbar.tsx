
import Logo from '../assets/logo-text.png'
import { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className='flex items-center justify-between px-6 py-4 lg:px-15'>

     <div className='flex items-center gap-3'>
        <button onClick={()=> setMenuOpen(!menuOpen)} className='text-3xl md:hidden'>
        {menuOpen ? <IoClose/> : <IoMdMenu/>}</button>
       <img src={Logo} alt="" />
     </div>
      
        <ul className='flex  gap-6 mx-auto hidden md:flex '>
        <li className='text-[#D91B7E]'>Home</li>
        <li>Technology</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className='gap-2 hidden md:flex'>
        <button className='px-5 py-2 text-black rounded-3xl font-semibold'>Sign In</button>
        <button className='px-4 py-2 rounded-3xl bg-[#D91B7E] font-semibold text-white hover:bg-pink-400'>Sign Up</button>
      </div>


     {menuOpen &&(
         <div className='mt-5 md:hidden'>
          <ul className='flex  flex-col gap-4'>
        <li className='text-[#D91B7E]'>Home</li>
        <li>Technology</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
         </div>
     )}
    </nav>
  )
}

export default Navbar;