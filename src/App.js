
import './App.css';
import InterfacePortifolio from './components/interfaceportifo';
import Navbar1 from './components/navbar';
import { Email, Facebook, Twitter, WhatsApp, YouTube } from "@mui/icons-material";

function App() {
  return (
    <div className=" bg-zinc-900 flex flex-col items-center justify-center w-full h-full">
      <Navbar1/>
      <div className=' hidden lg:block gap-10 absolute top-14 right-7'>
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
     <InterfacePortifolio/>
      
    </div>
  );
}

export default App;
