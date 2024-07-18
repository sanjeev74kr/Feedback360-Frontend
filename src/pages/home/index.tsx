import './home.css'

import { CategoryButton, FloatingButton } from "../../components";
import { useNavigate } from 'react-router-dom';


function Home(){
    
    const navigate=useNavigate();

    function addBusiness(){
    navigate('/addBusiness')
    }

return(
    <div>
        <div className="categories-contnr">
        <CategoryButton  btnTitle={'All'}/>
        <CategoryButton  btnTitle={'Hospitals'}/>
        <CategoryButton  btnTitle={'Schools'}/>
        <CategoryButton  btnTitle={'Restaurants'}/>
        </div> 
        <div className='add-btn'>
        <FloatingButton floatFunc={()=>addBusiness()}/>
        </div>
    </div>
)
}
export default Home;