import InputField from "../InputField";
import { useEffect, useState } from "react";

function BusinessBasicInfo(){

    interface StateType{
        category:string,
        businessName:string,
        registrationId:string,
        website:string,
        addressLine1:string,
        addressLine2:string,
        city:string,
        state:string,
        pincode:string,
        ownerName:string,
        contact:string,
        photos:string,
    }

const [inputField,setInputField]=useState<StateType>({
    category:'',
    businessName:'',
    registrationId:'',
    website:'',
    addressLine1:'',
    addressLine2:'',
    city:'',
    state:'',
    pincode:'',
    ownerName:'',
    contact:'',
    photos:''
});

const [selectedValue,setSelectedValue]=useState('');

    const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>,inputName:string)=>{
        console.log("e:",e); 
        switch(inputName){
            case 'website':{
                 setInputField((prevState)=>({...prevState,website:e.target.value}));
                 break;
            }
            case 'businessName':{
                setInputField({...inputField,businessName:e.target.value});
                break;
            }
            case 'registrationId':{
                setInputField({...inputField, registrationId:e.target.value})
                break;
            }
        }
    }

    const handleCategoryChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        setSelectedValue(e.target.value);
              setInputField((prevState)=>({...prevState,category:e.target.value})) 
    }

    useEffect(()=>{
    console.log("inputField objet:",inputField);
    },[inputField]);

    return(
        <div>
            <label>Select Business Category
            <select value={selectedValue} onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>handleCategoryChange(e)}>
                <option value="Hospital">
                 Hospital    
                </option>
                <option value="School">
                 School   
                </option>
                <option value="Restaurant">
                 Restaurant    
                </option>
            </select>
            </label>
            <InputField inputType='text' inputLabel='Business Name' inputName='businessName' changeHandler={(e:React.ChangeEvent<HTMLInputElement>)=>handleInputChange(e,'businessName')} />
            <InputField inputType='text' inputLabel='Registration ID' inputName='registrationId' changeHandler={(e:React.ChangeEvent<HTMLInputElement>)=>handleInputChange(e,'registrationId')} />
            <InputField inputType='text' inputLabel='Website URl(Optional)' inputName='websiteUrl' changeHandler={(e:React.ChangeEvent<HTMLInputElement>)=>handleInputChange(e,'website')}/>
        </div>
    )
}

export default BusinessBasicInfo;