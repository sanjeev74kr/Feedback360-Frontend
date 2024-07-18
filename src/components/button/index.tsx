import './button.css'
function Button(props:any){
    
    const {btnTitle, className, clickFunc}=props;
    
    const handleClick=()=>{
        clickFunc();
    }

    return(
        <button className={className} onClick={handleClick}>{btnTitle}</button>
    )
}

export default Button;