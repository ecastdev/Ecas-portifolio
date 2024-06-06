import { motion } from "framer-motion";
import Intro from "./intro";
import './interface.css';
import Services from './services';
import Contact from './contact';
import AboutMe from "./abou";
import Skills from "./skills";
import { ThemeProvider, createTheme } from '@mui/material/styles';




const Animatingpage = (props) => {
    const { children } = props;
  
    return (
      <motion.section
        className={`
    h-screen w-screen p-8 max-w-screen-2xl mx-auto
    flex flex-col items-start justify-center
    `}
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
        }}
      >
        {children}
      </motion.section>
    );
  };

export default function InterfacePortifolio(){
 


const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(255, 136, 0)',
    },
    secondary: {
      main: 'rgb(255, 136, 0)',
    },
  },
});

    return(
      <ThemeProvider theme={theme}>
        <>
        {/* intro */}
        
        <Animatingpage >
          <Intro/>

        </Animatingpage>
        {/* about */}
        <Animatingpage>
            <AboutMe/>
            
        </Animatingpage>
        {/* skills */}
        <Animatingpage>
            <Skills/>
         
        </Animatingpage>
        {/* what l service */}
        <Animatingpage >
            <Services/>
            
        </Animatingpage>
        <Animatingpage>
            <Contact/>
            
        </Animatingpage>
        

        </>
        </ThemeProvider>
    )
};