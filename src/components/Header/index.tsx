import { useEffect, useState } from 'react';
import './header.css'
import Button from "../Button";
function Header(){
const [isDark, setIsDark] = useState(false);
const [theme, setTheme] = useState('light')    

useEffect(()=>{
setTheme(()=> isDark ? 'dark' :'light')
},[isDark])


    
    function handleThemeSwitcher(){
        setIsDark((prev)=>!prev)
        document.documentElement.setAttribute('data-theme', theme);
    }

return(
    <div className="header-container">
            <h5 className='product-name'>Feedback360</h5>
            <Button className='theme-switcher' btnTitle="Theme Switcher" btnType="button" clickFunc={handleThemeSwitcher} />
            
    </div>
)
}
export default Header;