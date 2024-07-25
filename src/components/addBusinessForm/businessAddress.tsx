import { useState } from "react";
import InputField from "../InputField";

function BusinessAddress(){

  const handleSubmit=(e:React.ChangeEvent<HTMLFormElement>)=>{
   e.preventDefault();
   const form=e.target;
   const formData=new FormData(form);
   console.log("form Data", formData);
  }

  const [inputField,setInputField]=useState({
    addressLine1:'',
    addressLine2:'',
    city:'',
    state:'',
    pincode:''
  })


  return(
    <div>
        <h4>Enter full Business Address</h4>
        
        <InputField inputLabel={'Address Line1:'} inputType={'text'} inputName={'addressLine1'} inputPlaceHolder={"Road No. | House No. "} changeHandler={handleSubmit} />
        <InputField inputLabel={'Address Line2:'} inputType={'text'} inputName={'addressLine2'} inputPlaceHolder={"Area"} />
        <InputField inputLabel={'City'} inputType={'text'} inputName={'city'} />
        <InputField inputLabel={'State'} inputType={'text'} inputName={'state'} />
        <InputField inputLabel={'Pincode'} inputType={'text'} inputName={'pincode'} />
  
    </div>
  )
}

export default BusinessAddress;