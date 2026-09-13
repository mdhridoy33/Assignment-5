import Logo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <footer className="w-full bg-white border-t border-gray-100 mt-20 text-gray-600">
      <div className="w-11/12 max-w-7xl mx-auto py-12">
       
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          
        
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center">
               <img src={Logo} alt="Dev Stack Logo" className="h-8 w-auto" />
            </div>

            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="flex items-center gap-4 text-sm font-medium text-slate-700 pt-2">
              <a href="" className="hover:text-black ">GitHub</a>
              <a href="" className="hover:text-black ">Twitter</a>
              <a href="" className="hover:text-black">LinkedIn</a>
            </div>
          </div>

          
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="" className="hover:text-black ">Home</a></li>
              <li><a href="" className="hover:text-black ">Technologies</a></li>
              <li><a href="" className="hover:text-black">Projects</a></li>
            </ul>
          </div>

        
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="" className="hover:text-black">About</a></li>
              <li><a href="" className="hover:text-black ">Contact</a></li>
              <li><a href="" className="hover:text-black">Careers</a></li>
            </ul>
          </div>

        
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="" className="hover:text-black ">Privacy Policy</a></li>
              <li><a href="" className="hover:text-black ">Terms of Service</a></li>
            </ul>
          </div>

        </div>

       
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="" className="hover:text-gray-600 ">Privacy</a>
            <a href="" className="hover:text-gray-600 ">Terms</a>
          </div>
        </div>

      </div>
    </footer>
    );
};

export default Footer;