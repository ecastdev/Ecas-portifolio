
import './App.css';
import InterfacePortifolio from './components/interfaceportifo';
import Navbar1 from './components/navbar';
import { Email, Facebook, Twitter, WhatsApp, YouTube } from "@mui/icons-material";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";




function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    <div className=''>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: true,
          background: {
            image: "linear-gradient(19deg, #141414 0%, #141414 100%)"
          },
          particles: {
            number: {
              value: 10,
              density: {
                enable: true,
                value_area: 600
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "square",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              }
            },
            opacity: {
              value: 0.25,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 29,
              random: true,
              anim: {
                enable: false,
                speed: 2,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 300,
              color: "#ffffff",
              opacity: 0,
              width: 0
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "top",
              straight: true,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "repulse"
              },
              onclick: {
                enable: false,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 800,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 790,
                size: 79,
                duration: 2,
                opacity: 0.8,
                speed: 3
              },
              repulse: {
                distance: 400,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }}
      />
        <div className=" absolute top-3 overflow-scroll  flex flex-col items-center  w-full h-full">
          <Navbar1/>
          <div className=' hidden lg:block gap-10 fixed top-20 right-16'>
            <ul>
              <Email color='secondary'/>
            </ul>
            <ul>
              <Facebook color='secondary'/>  
            </ul>
            <ul>
              <Twitter color='secondary'/>  
            </ul>
            <ul>
              <WhatsApp color='secondary'/>  
          </ul>
            <ul>
              <YouTube color='secondary'/> 
            </ul>    
        </div>
        {/* <Intro/>
        <AboutMe/>
        <Skills/>
        <Services/>
        <Contact/> */}
        <InterfacePortifolio/>
        <div className='h-96 lg:hidden'>

        </div>
          
          
        </div>
        
      
    </div>
  );
}

export default App;
