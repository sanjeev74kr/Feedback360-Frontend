import InputField from "../InputField";

function OwnerDetails(props:any){
    const {inputField,setInputField}=props;

    const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>, inputName:string)=>{
        switch(inputName){
            case 'ownerName':
                setInputField((prevState:any)=>({...prevState, ownerName:e.target.value}));
                break;
            case 'contact':
                setInputField((prevState:any)=>({...prevState,contact:e.target.value}))
                break;    
        }
        
    }

 return(
    <div>
        <InputField inputType={'text'} inputName={'ownerName'} inputLabel={'Owner Name'} changeHandler={(e:React.ChangeEvent<HTMLInputElement>)=>handleInputChange(e,'ownerName')}/>
        <InputField inputType={'text'} inputName={'contact'} inputLabel={'Contact No.'} changeHandler={(e:React.ChangeEvent<HTMLInputElement>)=>handleInputChange(e,'contact')}/>
    </div>
 )
}
export default OwnerDetails;