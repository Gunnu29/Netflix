import './App.css'
import Box from './components/Box'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Plan from './components/Plan'
import Questions from './components/Questions'
import Reasons from './components/Reasons'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Sigin from './components/Sigin'
import Help from './components/Help'

const router=createBrowserRouter(
  [
    {path:"/",
      element: <>
      {/* Background image wrapper */}
      <div className="relative w-full h-screen overflow-x-hidden">
        
        {/* Blurred background image */}
        <div className="absolute inset-0 bg-[url('/net_bg.png')] bg-cover bg-center blur-xl"></div>

        {/* Foreground content with blur applied behind */}
        <div className="relative z-10 backdrop-blur-lg bg-black/50 min-h-screen">
          <Navbar />
          <Box />
          <Carousel/>
          <Plan/>
          <Reasons/>
          <Questions/>
          <Footer/>
        </div>
      </div>
    </>
    },
    {path:"/login",
      element:<>
       <div className="relative w-full h-[950px] overflow-hidden">
        
        {/* Blurred background image */}
        <div className="absolute inset-0 bg-[url('/net_bg.png')] bg-cover bg-center">
        </div>
        <div className="relative z-10 bg-black/50 h-[950px]">
      <Navbar/>
      <Sigin/>
      </div>
      </div>
      <Footer/>
      </>
    },
    {path:"/help",
      element:<>
      <Navbar />
      <Help/>
      <Footer/>
      </>
    }
  ]

)

function App() {
  return (
    <>
      {/* Background image wrapper
      <div className="relative w-full h-screen overflow-x-hidden">
        
        {/* Blurred background image 
        <div className="absolute inset-0 bg-[url('/net_bg.png')] bg-cover bg-center blur-lg scale-110"></div>

        {/* Foreground content with blur applied behind 
        <div className="relative z-10 backdrop-blur-lg bg-black/40 min-h-screen">
          <Navbar />
          <Box />
          <Carousel/>
          <Plan/>
          <Reasons/>
          <Questions/>
          <Footer/>
        </div>
      </div> */}

      <RouterProvider router={router}/>
    </>
  )
}

export default App
