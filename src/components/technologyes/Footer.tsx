
import Logo from "../../assets/logo-text.png";

const Footer = () => {
    return (
        <div className='flex gap-30 justify-center items-center m-15'>
            <div>
                <img src={Logo} alt="" />
                <p className='mt-4 text-gray-600'>Curated tools, technologies, 
                and resources for developers <br /> building
                 modern software.</p>
                 <div className='flex gap-6 my-6 text-gray-600'>
                    <h4>GitHub</h4>
                    <h4>Twitter</h4>
                    <h4>Linkedin</h4>
                 </div>
            </div>
            <div>
                <h3 className='font-semibold'>PROJECT</h3>
                <h4 className='text-gray-600 my-1'>Home</h4>
                <h4 className='text-gray-600 my-1'>Technologies</h4>
                <h4 className='text-gray-600 my-1'>Projects</h4>
            </div>

            <div>
                <h3 className='font-semibold'>COMPANY</h3>
                <h4 className='text-gray-600 my-1'>About</h4>
                <h4 className='text-gray-600 my-1'>Contact</h4>
                <h4 className='text-gray-600 my-1'>Carrer</h4>
            </div>

            <div>
                <h4 className='font-semibold'>LEGAL</h4>
                <h4 className='text-gray-600 my-1'>Privacy</h4>
                <h4 className='text-gray-600 my-1'>Terms of service</h4>
            </div>
        </div>
        
    );
};

export default Footer;