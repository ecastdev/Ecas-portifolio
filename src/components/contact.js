import { Email, Facebook, Instagram, Twitter, WhatsApp,} from "@mui/icons-material";
import { motion } from "framer-motion";
import './interface.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_e8sdnl3', 'template_wmd3s17', form.current, {
        publicKey: 'aBMvP0hRI_iL9-SNY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
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
              }} className='mt-16 bg-amber-700 rounded-lg grid place-content-center w-72 lg:w-96 h-72 lg:h-96 '>
              <form ref={form} onSubmit={sendEmail} className='  flex flex-col items-center gap-2 '>
                  <label className='text-center text-xl lg:text-3xl text-white  font-subt'>Name</label>
                  <input type="text" name="user_name" className='rounded-lg  '/>
                  <label className='text-center text-xl lg:text-3xl text-white font-subt'>your email</label>
                  <input type="email" name="user_email" className='rounded-lg '/>
                  <label className='text-center text-xl lg:text-3xl text-white  font-subt'>Message</label>
      <textarea name="message" />
                  <button className='rounded-lg bg-slate-600 hover:bg-white text-amber-700 w-20 text-center h-6 lg:h-12'>
                    contact
                  </button>

              </form>

            

           </motion.div>
           <div className='bg-amber-700 mt-6 lg:mt-9  h-2 w-96'></div>
           
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