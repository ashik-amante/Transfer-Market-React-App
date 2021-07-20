
import './App.css';
import ProfileCard from './component/profile-card/ProfileCard';
import { useEffect, useState } from 'react';
import fakedata from './fakeData/fakedata.json';
import Signing from './component/signing/Signing';



function App() {
  const [profile,setProfile] = useState([]);
  const [sign,setSign] = useState([]);
  
  useEffect(()=>{
    setProfile(fakedata);
    console.log(fakedata);
      
  },[])
  const purchase = (player)=>{
    const newSigning = [...sign,player];
    setSign(newSigning);
  }
  
 

  

  return (
    <div className="main">
    <div className="market">
     
       
     {
       profile.map((data)=><ProfileCard info={data} sign={purchase} ></ProfileCard> )
     }
     
     
      
    </div>
    <div>
      
    </div>
   <Signing joined={sign}></Signing>
    </div>
  );
}

export default App;
