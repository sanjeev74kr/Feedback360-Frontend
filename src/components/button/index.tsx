import './button.css'
function Button(props:any){
    
    const {btnTitle, className, clickFunc,btnType}=props;
    
    const handleClick=()=>{
        if(clickFunc)
        clickFunc();
    }

    return(
        <button className={className} type={btnType} onClick={handleClick}>{btnTitle}</button>
    )
}

export default Button;