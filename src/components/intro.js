import { motion } from "framer-motion";

export default function Intro(){
    return(
        <div id='#' className="flex flex-col items-center justify-center h-screen">
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
                 className="text-center font-intro text-6xl lg:text-7xl text-amber-600">
                  Hi! Am Ecast
                </motion.h1>
                <motion.h2
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    delay: 1.1,
                  },
                }}
                 id="frontdeveloper" className="underline font-bigfont mt-5 lg:mt-10 text-white decoration-amber-600  text-center text-2xl lg:text-4xl ">
                  Frontend Developer
                </motion.h2>
                <motion.h3
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    delay: 1.6,
                  },
                }}
                 id="thankyou" className=" font-title mt-5 lg:mt-10 text-center text-sm lg:text-2xl ">
                  This is my portifolio
                </motion.h3>

              </div>
    )
}