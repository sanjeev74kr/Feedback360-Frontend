import { useContext, useEffect, useState } from 'react';
import { ThemeActionTypes, ThemeContext } from '../../context/ThemeContext';
import Button from "../Button";
import './header.css';
 
function Header(){
const [isDark, setIsDark] = useState(false);
const [theme, setTheme] = useState('light')    

const themeContext = useContext(ThemeContext);

// useEffect(()=>{
// setTheme(()=> isDark ? 'dark' :'light')
// },[isDark])
    
    function handleThemeSwitcher(){
        // setIsDark((prev)=>!prev)
        themeContext.dispatch({type:ThemeActionTypes.DARK})
        document.documentElement.setAttribute('data-theme', themeContext.state.theme);
    }

return(
    <div className="header-container">
            <h5 className='product-name'>Feedback360</h5>
            <Button className='theme-switcher' btnTitle="Theme Switcher" btnType="button" clickFunc={handleThemeSwitcher} />
            
    </div>
)
}
export default Header;