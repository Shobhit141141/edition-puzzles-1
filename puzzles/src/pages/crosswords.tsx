import { Link } from "react-router-dom";
const CrossWords = () => {
  return (
    <>

      <div className="font-piedra text-center text-[#f2eae6] text-6xl">Crossword</div>
      <Link
        to={"/"}
        className="lg:absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 px-4 py-2 bg-yellow-700 text-black font-bold rounded-lg 
                 shadow-lg border-4 border-yellow-900 hover:bg-yellow-600 hover:border-yellow-800 transition-all duration-300 
                 text-sm md:text-lg active:scale-95 mountains-of-christmas w-fit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 md:w-6 md:h-6"
        >
          <path
            fillRule="evenodd"
            d="M15.78 3.22a.75.75 0 0 1 0 1.06L9.56 10.5H21a.75.75 0 0 1 0 1.5H9.56l6.22 6.22a.75.75 0 0 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0z"
            clipRule="evenodd"
          />
        </svg>
        <span>Back to Home</span>
      </Link>
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen lg:h-screen overflow-hidden text-white px-4">
        {/* Crossword Image */}
        <img src="crossword.svg" className="w-full max-w-md lg:max-w-[40vw] object-contain" />

        {/* Clues List */}
        <div className="lg:h-full flex flex-col justify-center items-center lg:w-1/2 mt-0 pt-0">
          <ul className="text-lg md:text-sm lg:text-lg xl:text-xl text-center font-bold mountains-of-christmas space-y-2">
            <li>1. They’ll weigh down your ship when you try to speed up. Be careful of these distractions! <br /><span className="text-yellow-400"> Barnacles</span></li>
            <li>2. Once you’re inside the campus gates, you’re in an ocean. A mere student? No, you’re more than that. <br /><span className="text-yellow-400"> Mariner</span></li>
            <li>3. A pirate can’t sail the seas without his. Can you make it through class without yours? <br /><span className="text-yellow-400"> Crew</span></li>
            <li>4. Sailing through class after class can be tiring. Where do you anchor your ship for a break? <br /><span className="text-yellow-400"> Island</span></li>
            <li>5. Only one thing to do when a troop of monkeys is crossing on the way to Pragya Bhawan! <br /><span className="text-yellow-400"> Avast</span></li>
            <li>6. Yours might be for four years, or it may end in two. But the memories will be beautiful just the same. <br /><span className="text-yellow-400"> Voyage</span></li>
            <li>7. The only thing left to do when you want your professor to give you a few marks more! <br /><span className="text-yellow-400"> Parley</span></li>
            <li>8. Your own open sea. Here, the horizon never ends. <br /><span className="text-yellow-400"> DTU</span></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CrossWords;
