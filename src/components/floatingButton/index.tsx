import './floatingButton.css'
import { IoAddCircleOutline } from "react-icons/io5";

function FloatingButton({floatFunc}:any){
   
    const handleClick=()=>{
     floatFunc();
   }
    
   return(
        <div className="floating-btn">
            <IoAddCircleOutline color="green" size='2.5rem' onClick={handleClick}/>
        </div>
    )
}

export default FloatingButton;