import { Link } from "react-router-dom";

export const Connections = () => {
    return (
        <>
            <div className="font-piedra text-center text-[#f2eae6] text-6xl pt-3">Connections</div><br />
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
            <p className=" text-white text-start mx-auto p-3 tracking-wide 
leading-relaxed mountains-of-christmas font-bold text-2xl">
                <span className="text-3xl pt-2">🏴‍☠️ The Great Nautical Jumble! </span>
                <br />
                <br />
                Ahoy, matey! You’ve sailed through chaos and docked at the Port of Enlightenment!
                <br />
                <br />
                🔹 Deep-sea dwellers—From the tentacled Squidward to the ever-bubbly Darwin Watterson, you spotted these oceanic legends.
                <br />
                <br />
                🔹 Swashbuckling pirates—Jack Sparrow, Odysseus, and their motley crew stole more than treasure—they stole our imaginations! 🏴‍☠️
                <br />
                <br />
                🔹 Real-life rogues—Blackbeard, Zheng Yi Sao, and the true scourges of the seven seas ruled the waves! ⚓
                <br />
                <br />
                You cracked the code, proving you’ve got a navigator’s heart! Now go forth and plunder more puzzles! 🏆🔑

                Fair winds and following seas! 🌊⚔️
            </p>
            <br />
            <div className="w-full flex flex-col gap-8 p-3">
                <h1 className="text-2xl md:text-4xl text-[#f5e10c] pl-2 md:pl-10 font-bold press-start-2p-regular">Fictional Sea Characters</h1>
                <ul className="flex flex-row text-xl md:text-2xl text-white pl-4 md:pl-10 mountains-of-christmas font-bold">
                    <li className="pl-4 md:pl-10 font-bold">Squidward</li>
                    <li className="pl-4 md:pl-10 font-bold">Vaporeon</li>
                    <li className="pl-4 md:pl-10 font-bold">Undyne</li>
                    <li className="text-white pl-4 md:pl-10 font-bold">Darwin Watterson</li>
                </ul>
                <h1 className="text-2xl md:text-4xl text-[#f5e10c] pl-2 md:pl-10 font-bold press-start-2p-regular">Fictional Pirates</h1>
                <ul className="flex flex-row text-base md:text-2xl text-white pl-4 md:pl-10 mountains-of-christmas font-bold">
                    <li className="pl-4 md:pl-10 font-bold">Sinbad</li>
                    <li className="pl-4 md:pl-10 font-bold">Jack Sparrow</li>
                    <li className="pl-4 md:pl-10 font-bold">Odysseus</li>
                    <li className="text-white pl-4 md:pl-10 font-bold">Captain Hook</li>
                </ul>
                <h1 className="text-2xl md:text-4xl text-[#f5e10c] pl-2 md:pl-10 font-bold press-start-2p-regular">Real Pirates</h1>
                <ul className="flex flex-row text-base md:text-2xl text-white pl-4 md:pl-10 mountains-of-christmas font-bold">
                    <li className="pl-4 md:pl-10 font-bold">Blackbeard</li>
                    <li className="pl-4 md:pl-10 font-bold">Zheng Yi Sao</li>
                    <li className="pl-4 md:pl-10 font-bold">Hayreddin Barbarossa</li>
                    <li className="text-white pl-4 md:pl-10 font-bold">Kanhoji Angre</li>
                </ul>
            </div>


        </>
    )
}
