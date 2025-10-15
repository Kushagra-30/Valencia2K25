import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    <div className="h-screen w-full flex flex-col justify-between relative overflow-hidden overscroll-none">

    <img className="absolute top-0 left-0 w-full h-full object-cover -z-10" src="BG-Home.png" alt="" />

        <nav className="h-28 w-full text-center text-3xl flex items-center justify-center font-cinzel font-semibold">
          <img className="absolute h-fit w-fit scale-[0.6] md:scale-[0.5] lg:scale-[0.2]" src="WhatsApp_Image_2025-10-15_at_12,16,09_PM-removebg-preview-Picsart-AiImageEnhancer.png" alt="" />
        </nav>

        <div className="h-1/2 w-full flex flex-col justify-center items-center gap-4 px-10">
          <h1 className="w-full text-5xl font-bold text-center pt-3 font-cinzelDecorative md:text-7xl lg:text-9xl text-amber-100 drop-shadow-[0_0_10px_rgba(255,200,0,0.8)]" >
            ComQuest
          </h1>
          <p className="w-full font-semibold text-black text-center pt-6 font-cinzel text-shadow-lg md:text-xl lg:text-2xl lg:w-2/3">
            Embark on a journey through the vibrant world of Commerce and Ideas. Whether you dream to lead, market, or create — this Fest welcomes you!
          </p>
          <Link to="/registration">
          <button className="inline-flex items-center justify-center md:px-5  px-2 md:py-2 py-1  text-md md:text-base text-center font-semibold  text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
    <span className="relative font-cinzel">Register</span>
</button>
          </Link>
          <Link to="/events">
          <button className="inline-flex  items-center justify-center bg-gray-900 hover:bg-gray-800 text-white rounded-lg duration-200 md:px-4 px-2 py-2 md:py-3 font-bold shadow-lg shadow-neutral-500/20 transition active:scale-95 font-cinzel">See Events</button>
          </Link>
        </div>

        <div className="h-16 w-full flex items-center justify-center ">
          <a className=" bg-black hover:bg-gray-800 text-white font-medium py-1 px-3 rounded-md font-cinzel" href="https://srimahaveeracollege.com">About us</a>
        </div>
      </div>
    </>
  )
}

export default Home
