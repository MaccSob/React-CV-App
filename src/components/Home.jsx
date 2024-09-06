import { useState } from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import '../styles/App.css'
function Home() {
    const [nameVal, setInputVal] = useState('');
     const [phoneVal, setInputVal2] = useState('');
     const [mailVal, setInputVal3] = useState('');
     const [schoolVal, setInputVal4] = useState('');
     const [studyVal, setInputVal5] = useState('');
     
    return (
    <>
        <General setInputVal={setInputVal} setInputVal2={setInputVal2} setInputVal3={setInputVal3} />
        <Education setInputVal4={setInputVal4} setInputVal5={setInputVal5}/>
        <Experience></Experience>
        <div className="wrapper">
      <div className="container">
      <span className="span1" ><span className="material-symbols-outlined">
person</span>{nameVal}</span>
       <span className="span1" ><span className="material-symbols-outlined">
call</span>{phoneVal}</span>
          <span className="span1"> <span className="material-symbols-outlined">
mail
</span>{mailVal}</span>   
</div>  
<p>{schoolVal}</p>    
</div> 


    


  </>
  )
}







export default Home