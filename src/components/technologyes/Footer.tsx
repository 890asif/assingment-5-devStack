
import Logo from "../../assets/logo-text.png";

const Footer = () => {
    return (
       <footer  className="border-t border-gray-100 bg-white px-6 pt-15 pb-6 md:px-14 mt-15">
        <div className="flex mx-auto justify-center gap-50 md:grid-cols-4">            
       <div className="md:col-span-2">
            <img src={Logo} alt=""  className="mb-4  w-30"/>
            <p className='max-w-x text-xs text-gray-500'>Curated tools, technologies, 
            and resources for developers <br /> building
            modern software.</p>
            <div className='mt-5 flex gap-4 text-x font-semibold text-gray-600'>
                <a href="" className="hover:text-purple-500">GitHub</a>
                <a href="" className="hover:text-purple-500">Twitter</a>
                <a href="" className="hover:text-purple-500">LinkedIn</a>
                 </div>
            </div>
            <div>
                <h3 className="mb-4 text-3 font-bold uppercase text-gray-800">Product</h3>
                <ul  className="space-y-2 text-x text-gray-500">
                    <li><a href="" className="hover:text-purple-500">Home</a></li>
                    <li><a href="" className="hover:text-purple-500">Technologies</a></li>
                    <li><a href="" className="hover:text-purple-500">Projects</a></li>
                </ul>
            </div>

            <div>
                <h3 className="mb-4 text-3 font-bold uppercase text-gray-800">COMPANY</h3>
                <ul className="space-y-2 text-x text-gray-500">
                <li><a href="" className='hover:text-purple-500'>About</a></li>
                <li><a href="" className='hover:text-purple-500'>Contact</a></li>
               <li><a href="" className='hover:text-purple-500'>Careers</a></li>
                </ul>
            </div>

            <div>
                <h3 className="mb-4 text-3 font-bold uppercase text-gray-800">Legal</h3>
                <ul className="space-y-2 text-x text-gray-500">
                <li><a href="" className='hover:text-purple-500'>Privacy Policy</a></li>
                <li><a href="" className='hover:text-purple-500'>Terms of Service</a></li>
                </ul>
            </div>
        </div>
        
        <div className="mx-auto mt-8 flex max-w-6xl flex-col justify-between gap-3 border-t border-gray-200 pt-5 text-3 text-gray-500 sm:flex-row">
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex gap-5">
                <a href="" className="hover:text-purple-500">Privacy</a>
                <a href="" className="hover:text-purple-500">Terms</a>
            </div>
        </div>
       </footer>

          );
};

export default Footer;