import './categoryButton.css'
function CategoryButton(props:any){

    const {btnFunc, btnTitle}=props;
    const onClick=()=>{
      btnFunc();
    }

    return(
        <div className="category-btn" onClick={()=>onClick()}>
           <h5>{btnTitle}</h5>
        </div>
    )

}

export default CategoryButton;