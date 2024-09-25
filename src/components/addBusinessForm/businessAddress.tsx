import React, { useState } from "react";
import InputField from "../InputField";

function BusinessAddress(props: any) {
  console.log("Business address rendered");
  const { state, dispatch } = props;
  // const handleInputChange=(e:React.ChangeEvent<HTMLFormElement>)=>{
  //  e.preventDefault();
  //  const form=e.target;
  //  const formData=new FormData(form);
  //  console.log("form Data", formData);
  // }

  // const [inputField,setInputField]=useState({
  //   addressLine1:'',
  //   addressLine2:'',
  //   city:'',
  //   state:'',
  //   pincode:''
  // })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputName: string
  ) => {
    switch (inputName) {
      case "addressLine1":
        dispatch({
          type: "addressLine1",
          addressLine1: e.target.value,
        });
        break;
      case "addressLine2":
        dispatch({
          type: "addressLine2",
          addressLine2: e.target.value,
        });
        break;
      case "city":
        dispatch({
          type: "city",
          city: e.target.value,
        });
        break;
      case "state":
        dispatch({
          type: "state",
          state: e.target.value,
        });
        break;
      case "pincode":
        dispatch({
          type: "pincode",
          pincode: e.target.value,
        });
        break;
    }
  };
  return (
    <div>
      <h4>Enter full Business Address</h4>

      <InputField
        inputLabel={"Address Line1:"}
        inputType={"text"}
        inputName={"addressLine1"}
        inputPlaceHolder={"Road No. | House No. "}
        inputFieldValue={state.addressLine1}
        changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e, "addressLine1")
        }
      />
      <InputField
        inputLabel={"Address Line2:"}
        inputType={"text"}
        inputName={"addressLine2"}
        inputPlaceHolder={"Area"}
        inputFieldValue={state.addressLine2}
        changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e, "addressLine2")
        }
      />
      <InputField
        inputLabel={"City"}
        inputType={"text"}
        inputName={"city"}
        inputFieldValue={state.city}
        changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e, "city")
        }
      />
      <InputField
        inputLabel={"State"}
        inputType={"text"}
        inputName={"state"}
        inputFieldValue={state.state}
        changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e, "state")
        }
      />
      <InputField
        inputLabel={"pincode"}
        inputType={"text"}
        inputName={"pincode"}
        required={false}
        inputFieldValue={state.pincode}
        changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e, "pincode")
        }
      />
    </div>
  );
}

export default BusinessAddress;
