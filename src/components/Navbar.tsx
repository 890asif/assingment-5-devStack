
import Logo from '../assets/logo-text.png'

const Navbar = () => {
  return (
    <nav className='flex items-center px-20 p-4'>
     <div>
       <img src={Logo} alt="" />
     </div>
      
        <ul className='flex gap-6 mx-auto'>
        <li className='text-[#D91B7E]'>Home</li>
        <li>Technology</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className='flex gap-2'>
        <button className='px-4 py-2 rounded-3xl font-semibold'>Sign In</button>
        <button className='px-4 py-2 rounded-3xl bg-[#D91B7E] font-semibold text-white'>Sign Up</button>
      </div>

    </nav>
  )
}

export default Navbar;