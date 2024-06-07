import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { meAnimation } from "./assests/assest";
import Lottie from "lottie-react";

export default function AboutMe(){
    return(
        <div id="about" className="flex mt-80 lg:mt-2 items-center min-h-96 h-96 justify-around">
          <div className='grid place-content-center mt-20'>
            <div>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 50,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 1,
                          delay: 0.9,
                        },
                      }}
                    className=" text-3xl lg:text-5xl font-bigfont text-center text-amber-800">
                        About Me
                    </motion.h1>
                    {/* mobile lottie */}
                    <div className='lg:hidden'>
                          <Lottie
                        className='w-16  h-16'
                      animationData={meAnimation} loop={true} />

                    </div>

            </div>
             
                
                <p className="text-center hidden lg:block mt-14 text-white text-xl max-w-3xl">
                <Typewriter
      options={{
        strings: [' Am 23 years old guy  living Africa Malawi city Blantyre area in Ndirande l have more passion in creating stunning and beatiful user interface design   l have being in this field of web development and App development for 3years meaning l have 3years experience of it. l started my coding journey in 2021 when l watched movie steve jobs that inspired me into programing and l hade to put more passion in it. MY qualification paper is diploma in computer information systems '],
        autoStart: true,
        loop: true,
      }}
    />
                    
        </p>
        {/* mobile */}
        <p className="text-center lg:hidden mt-14 text-white text-xl max-w-3xl">
        Am 23 years old guy  living Africa Malawi 
        city Blantyre area in Ndirande l have more passion in creating stunning and beatiful user interface design   l have being in this field of web development and App development for 3years meaning l have 3years experience of it. l started my coding journey in 2021 when l watched movie steve jobs that inspired me into programing and l hade to put more passion in it. MY qualification paper is diploma
         in computer information systems 

        </p>
        
       
          </div>
          {/* animation me */}
          <div   className='hidden lg:block'>
              <Lottie
                
                animationData={meAnimation} loop={true} />

          </div>
            
        </div>
    )
}