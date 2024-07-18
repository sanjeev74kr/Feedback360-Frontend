import InputField from "../inputField";

function OwnerDetails(){
 return(
    <div>
        <InputField inputType={'text'} inputName={'ownerName'} inputLabel={'Owner Name'}/>
        <InputField inputType={'text'} inputName={'contact'} inputLabel={'Contact No.'}/>
    </div>
 )
}
export default OwnerDetails;