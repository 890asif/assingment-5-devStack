
import Logo from "../../assets/logo-text.png";

const Footer = () => {
    return (
       <footer  className="mt-20  border-t border-gray-100 bg-gray-800 px-6 py-10 text-gray-500">

        <div className="mx-auto max-w-7xl">            
       <div className="grid grid-cols-1 gap-30 md:grid-cols-4 ml-20">
        <div>
            <img src={Logo} alt="logo"  className="h-8 w-auto"/>

            <p className='mt-4 max-w-xs text-sm leading-5 text-gray-300'>Curated tools, technologies, 
            and resources for developers  building
            modern software.</p>

            <div className="mt-5 flex gap-5 text-xs text-gray-400">
                <a href="" className=" transition hover:text-pink-500">GitHub</a>

                <a href="" className=" transition hover:text-pink-500">Twitter</a>

                <a href="" className=" transition hover:text-pink-500">LinkedIn</a>

                 </div>
            </div>


            <div>
                <h3 className="text-xs font-bold uppercase text-gray-200">Product</h3>

                <div  className="mt-4 flex flex-col gap-3 text-xs text-gray-400">
                    <a href="" className=" transition hover:text-pink-500">Home</a>

                    <a href="" className=" transition hover:text-pink-500">Technologies</a>

                    <a href="" className=" transition hover:text-pink-500">Projects</a>
                </div>
            </div>


            <div>
                <h3 className="text-xs font-bold uppercase text-gray-200">COMPANY</h3>

                <div className="mt-4 flex flex-col gap-3 text-xs text-gray-400">
                <a href="" className='transition hover:text-pink-500'>About</a>

                <a href="" className='transition hover:text-pink-500'>Contact</a>

               <a href="" className='transition hover:text-pink-500'>Careers</a>

                </div>
            </div>


            <div>
                <h3 className="text-xs font-bold uppercase text-gray-200">Legal</h3>

                <div className="mt-4 flex flex-col gap-3 text-xs text-gray-400">
                <a href="" className='transition hover:text-pink-500'>Privacy Policy</a>

                <a href="" className='transition hover:text-pink-500'>Terms of Service</a>
                </div>
            </div>
        </div>
        

        <div className="mx-auto mt-8 flex max-w-6xl flex-col justify-between gap-3 border-t border-gray-200 pt-5 text-xs text-gray-400 sm:flex-row">
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex gap-5">
                <a href="" className='transition hover:text-pink-500'>Privacy</a>
                <a href="" className='transition hover:text-pink-500'>Terms</a>
            </div>
             </div>
        </div>
       </footer>

          );
};

export default Footer;





            