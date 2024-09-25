import InputField from "../InputField";

function BusinessBasicInfo(props: any) {
  //const { inputField, setInputField }=props;  //using useState
  const { state, dispatch } = props; //using useReducer
  console.log("Business basic info rendered");
  console.log("state  of useReducer passed in basic info:", state);
  // interface StateType{
  //     category:string,
  //     businessName:string,
  //     registrationId:string,
  //     website:string,
  //     addressLine1:string,
  //     addressLine2:string,
  //     city:string,
  //     state:string,
  //     pincode:string,
  //     ownerName:string,
  //     contact:string,
  //     photos:string,
  // }

  //const [inputField, setInputField] = useState({ ...initialState });
  //     category:'',
  //     businessName:'',
  //     registrationId:'',
  //     website:'',
  //     addressLine1:'',
  //     addressLine2:'',
  //     city:'',
  //     state:'',
  //     pincode:'',
  //     ownerName:'',
  //     contact:'',
  //     photos:''
  // });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputName: string
  ) => {
    console.log("e:", e);
    switch (inputName) {
      case "website": {
        // setInputField((prevState: any) => ({
        //   ...prevState,
        //   website: e.target.value,
        // }
        // ));

        dispatch({
            type:'website',
            website:e.target.value
        });
        break;
      }
      case "businessName": {
        // setInputField({...inputField,businessName:e.target.value});
        dispatch({
          type: "businessName",
          businessName: e.target.value,
        });
        break;
      }
      case "registrationId": {
        // setInputField({...inputField, registrationId:e.target.value})
        dispatch({
          type: "registrationId",
          registrationId: e.target.value,
        });
        break;
      }
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //setSelectedValue(e.target.value);
    //setInputField((prevState)=>({...prevState,category:e.target.value}))
    dispatch({
      type: "category",
      category: e.target.value,
    });
  };

  return (
    <div>
      <label>
        Select Business Category
        <select
          value={state.category}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handleCategoryChange(e)
          }
        >
          <option value="select">Select Category</option>
          <option value="Hospital">Hospital</option>
          <option value="School">School</option>
          <option value="Restaurant">Restaurant</option>
        </select>
      </label>
      
      <InputField
        inputType="text"
        inputLabel="Business Name"
        inputName="businessName"
        inputFieldValue={state.businessName}
        changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e, "businessName")
        }
      />
      <InputField
        inputType="text"
        inputLabel="Registration ID"
        inputName="registrationId"
        inputFieldValue={state.registrationId}
        changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e, "registrationId")
        }
      />
       
      <InputField
        inputType="text"
        inputLabel="Website URl(Optional)"
        inputName="websiteUrl"
        //inputFieldValue={inputField.website}
        inputFieldValue={state.website}
        changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e, "website")
        }
      />
    </div>
  );
}

export default BusinessBasicInfo;
