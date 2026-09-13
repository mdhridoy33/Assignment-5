import BannerImg from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <section className="w-auto max-w-7xl mx-auto py-12 md:py-10">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-start space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="text-gray-500 text-base md:text-lg max-w-lg leading-relaxed">
            Explore frontend, backend, database, and tooling options, 
            compare them side by side, and put together the stack that fits your 
            next project.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="px-6 py-3 rounded-xl text-white font-medium bg-linear-to-r from-orange-500 to-pink-500 hover:opacity-90 transition-opacity shadow-sm cursor-pointer">
              Explore Technologies
            </button>
            <button className="px-6 py-3 rounded-xl font-medium text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img 
            src={BannerImg}
            alt="Development Stack Illustration" 
            className="w-full max-w-lg h-auto object-contain"
          />
    
          </div>
        </div>
        </section>
       
    );
};

export default Banner;