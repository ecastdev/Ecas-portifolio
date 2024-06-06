import { Email, Facebook, Instagram, Twitter, WhatsApp,} from "@mui/icons-material";
import { motion } from "framer-motion";
import './interface.css';

export default function Contact(){
    return(
        <div id="contact" className="lg:h-screen mt-10 lg:mt-3 flex flex-col items-center">
            {/* contact style */}
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
                  delay: 0.6,
                },
              }} className='flex gap-5' >
                <div className='bg-amber-700 h-2 w-16 lg:w-96'></div>
                <h1 className=" font-bigfont text-center text-white text-2xl lg:text-5xl">
                        Contact me
                    </h1>
                <div className='bg-amber-700 h-2 w-16 lg:w-96'></div>

           </motion.div>
           {/* form */}
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
                  delay: 0.9,
                },
              }} className='mt-16 bg-amber-700 rounded-lg grid place-content-center w-72 lg:w-96 h-80 lg:h-96 '>
            <form className='flex flex-col items-center gap-3 '>
                <label className='text-center text-xl lg:text-3xl text-white mt-5 font-subt'>Email</label>
                <input type="email"  placeholder="email" className='rounded-lg mt-2 '/>
                <label className='text-center text-xl lg:text-3xl text-white font-subt'>Password</label>
                <input type="password"  placeholder="password" className='rounded-lg mt-2 '/>
                <button className='rounded-lg bg-slate-600 text-amber-700 w-20 text-center mt-9 h-6 lg:h-12'>
                  contact
                </button>

            </form>

            <div className='bg-amber-700 mt-14 lg:mt-44  h-2 w-96'></div>

           </motion.div>
           
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
                  delay: 1.2,
                },
              }} className='flex mt-7'>
              
              <div>
                <p className='text-center text-xl text-white'>
                    <Email color='secondary'/>
                    mtawaliecast@gmail.com
                </p>
                <p className='text-center text-xl text-white'>
                    <WhatsApp color='secondary'/>
                    0885177192
                </p>
                <div className='flex gap-10'>
                    <Email color='secondary'/>
                    <Facebook color='secondary'/>
                    <Twitter color='secondary'/>
                    <Instagram color='secondary'/>

                </div>
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
                    delay: 1.3,
                  },
                }}
                 id="thankyou" className=" font-title mt-7 text-center text-2xl">
                  highly proud for viewing my portifolio
                </motion.h3>
              </div>
            </motion.div>
            

        </div>
    );
}