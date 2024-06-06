import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

export default function AboutMe(){
    return(
        <div id="about" className="grid place-content-center mt-20">
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
            
            <p className="text-center mt-14 text-white text-xl max-w-5xl">
            <Typewriter
  options={{
    strings: [' Am 23 years old guy  living Africa Malawi city Blantyre area in Ndirande l have more passion in creating stunning and beatiful user interface design   l have being in this field of web development and App development for 3years meaning l have 3years experience of itas l started my coding journey in 2021 when l had wrote my senior level exams MY qualification paper is diploma in computer information systems '],
    autoStart: true,
    loop: true,
  }}
/>
                {/* Am 23 years old guy  living Africa Malawi city Blantyre area in Ndirande 
                l have more passion in creating stunning and beatiful user interface design   
                l have being in this field of web development and App development for 3years meaning l have 3years experience of it
                as l started my coding journey in 2021 when l had wrote my senior level exams 
                MY qualification paper is diploma in computer information systems  */}
            </p>
        </div>
    )
}