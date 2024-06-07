
// import { Card } from "flowbite-react";
import { bgTailwind, bgfirebase,reactImg, bggithub, bggjava, bghtml, bgjavascript, bgmui, bgthreejs, ecast } from "./assests/assest"
import { motion } from "framer-motion";


export default function Skills(){
    const skils = [
        {
            iconskills: bgjavascript,
            titleskills: 'javscript',
        },
        {
            iconskills: reactImg,
            titleskills: 'react framework',
        },
        {
            iconskills: bgthreejs,
            titleskills: 'three.js',
        },
        {
            iconskills: bgmui,
            titleskills: 'materila ul',
        },
        {
            iconskills: bgTailwind,
            titleskills: 'tailwind css',
        },
        {
            iconskills: bghtml,
            titleskills: 'html',
        },
        {
            iconskills: bggjava,
            titleskills: 'java',
        }
        ,{
            iconskills: bgfirebase,
            titleskills: 'firebase',
        }
        // ,{
        //     iconskills: '',
        //     titleskills: 'mongodb',
        // }
        ,{
            iconskills: bggithub,
            titleskills: 'git',
        },
        {
            iconskills: bggithub,
            titleskills: 'github',
        }
    ]
    return(
        <div id="skills" className="grid mt-16  lg:mt-7 place-content-center h-screen">
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
              }} className="text-3xl lg:text-6xl font-bigfont mb-6 lg:mb-16 text-amber-700 text-center ">
                My Skills
            </motion.h1>
            {/* card skills */}
            <div className='mt-3 lg:mt-9 flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-10'>
                <motion.img
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

                 src={ecast} id="ecastimg" alt='ecast' className='w-96 h-full rounded-lg border border-amber-700 border-spacing-80'/>
                <div className="grid mt-5 lg:mt-10 place-content-center grid-cols-2 lg:grid-cols-3 gap-10">
                {skils.map((skill, index) => (
                        <motion.div
                          key={skill.id || index} // Add a unique key here
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
                          href="#"
                          className="max-w-md grid place-content-center rounded-lg shadow-lg shadow-amber-600"
                        >
                          <motion.h5
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
                            className="text-xl font-title text-center font-bold tracking-tight text-white dark:text-white"
                          >
                            {skill.titleskills}
                          </motion.h5>
                          <img src={skill.iconskills} alt={skill.titleskills} className="w-20 h-16" />
                        </motion.div>
                      ))}
              
                </div>

            </div>
          


        </div>
    )
}