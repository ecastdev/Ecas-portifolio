import { Computer } from "@mui/icons-material";
import { codingAnimation } from "./assests/assest";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

export default function Services(){
    const services = [
        {
            iconservice : <Computer color='primary'  variant='large' />,
            servicetitle : "Website design & development",
            servicesubt : 'experienced in designing make user experience interface with beatiful design',
        },
        {
            iconservice : <Computer color='primary'  variant='large' />, 
            servicetitle : "App design & development",
            servicesubt : 'Using react native to build mobile app both OS and android',
        },
        {
            iconservice : <Computer color='primary'  variant='large' />,
            servicetitle : "3D websites",
            servicesubt : "experienced in three js using react three fiber and intergrating dynamic content",
        },
        {
            iconservice : <Computer color='primary'  variant='large'   />,
            servicetitle : "Graphic design",
            servicesubt : "experienced in figma by showing my creative with beatiful design  by servicing logo design, flyres and business card", 
        },
        {
            iconservice : <Computer color='primary'  variant='large' />,
            servicetitle : "Html email development",
            servicesubt : "making professional email template",
        }


    ]
    return(
        <div id="services" className="h-screen mt-96 lg:mt-10">
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
             className="text-3xl lg:text-6xl font-bigfont text-center text-amber-800">
                what l service
            </motion.h1>
            <div className=' flex flex-col lg:flex-row flex-wrap justify-center items-center  ' >
            <Lottie
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
             animationData={codingAnimation} loop={true} />
            <motion.div
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
             className='grid mt-5 lg:mt-10 place-content-center '>
                <div>
                  {services.map((serv) => (
                    <div className="flex mt-7">
                        <div >
                            {serv.iconservice}
                        </div>
                        <div className="grid place-content-center">
                            <h1 className='text-center font-title text-xl lg:text-2xl text-white'>
                                {serv.servicetitle}
                            </h1>
                            <p className='text-center font-light text-xs text-slate-200'>
                                {serv.servicesubt}

                            </p>

                        </div>
                        
                        
                    </div>
                  ))}

                </div>
            </motion.div>

        </div>

        </div>
        
    );
}