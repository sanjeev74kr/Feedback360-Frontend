import InputField from "../inputField";

function BusinessAddress(){

  const handleSubmit=(e:React.ChangeEvent<HTMLInputElement>)=>{
   e.preventDefault();
  }

  return(
    <div>
        <h4>Enter full Business Address</h4>
        <InputField inputLabel={'Address Line1:'} inputType={'text'} inputName={'addressLine1'} inputPlaceHolder={"Road No. | House No. "} />
        <InputField inputLabel={'Address Line2:'} inputType={'text'} inputName={'addressLine2'} inputPlaceHolder={"Area"} />
        <InputField inputLabel={'City'} inputType={'text'} inputName={'city'} />
        <InputField inputLabel={'State'} inputType={'text'} inputName={'state'} />
        <InputField inputLabel={'Pincode'} inputType={'text'} inputName={'pincode'} />
    </div>
  )
}
export default BusinessAddress;