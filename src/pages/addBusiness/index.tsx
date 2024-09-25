import "./addBusiness.css";

import {
  BusinessBasicInfo,
  BusinessAddress,
  BusinessPhotos,
  OwnerDetails,
  Button,
  StepsHeader,
} from "../../components";

import formReducer from "../../reducer/formReducer";

import { useEffect, useReducer, useState } from "react";

function AddBusiness() {
  const [step, setStep] = useState(1);

  interface StateType {
    category: string;
    businessName: string;
    registrationId: string;
    website: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    pincode: string;
    ownerName: string;
    contact: string;
    photos: string;
  }

  const initialState: StateType = {
    category: "",
    businessName: "",
    registrationId: "",
    website: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    ownerName: "",
    contact: "",
    photos: "",
  };

  // const [inputField, setInputField] = useState<StateType>(initialState)
  //   category: "",
  //   businessName: "",
  //   registrationId: "",
  //   website: "",
  //   addressLine1: "",
  //   addressLine2: "",
  //   city: "",
  //   state: "",
  //   pincode: "",
  //   ownerName: "",
  //   contact: "",
  //   photos: "",
  // });

  // useEffect(() => {
  //   console.log("inputField objet:", inputField);
  // }, [inputField]);

  const [state, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    console.log("state of usereducer in main page:", state);
  }, [state]);

  const handleNext = () => {
    return setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    return setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(step<4)
     handleNext();
    else{
    sessionStorage.setItem("userData", { ...state });
    alert("You have successfully added your business");
    }
  };

  const handleSteps = () => {
    console.log("step:", step);
    switch (step) {
      case 1:
        console.log("inside step 1");
        //return <BusinessBasicInfo inputField={inputField} setInputField={setInputField}/>;
        return <BusinessBasicInfo state={state} dispatch={dispatch} />;

      case 2:
        console.log("inside step 2");
        return <BusinessAddress state={state} dispatch={dispatch} />;

      case 3:
        console.log("inside step 3");

        return (
          // <OwnerDetails inputField={inputField} setInputField={setInputField} />
          <OwnerDetails state={state} dispatch={dispatch} />
        );

      case 4:
        console.log("inside step 4");
        return <BusinessPhotos state={state} dispatch={dispatch} />;
      default:
        break;
    }
  };
  console.log("Business main page rendered");
  return (
    <div className="addBusiness-main-contnr">
      <form onSubmit={(e:React.FormEvent)=>handleSubmit(e)}>
        <StepsHeader step={step} />
        {handleSteps()}
        {step > 1  &&(
          <Button
            className="next-btn"
            btnTitle="prev"
            clickFunc={() => handlePrev()}
          />
        )}
        {/* {step === 4 && (
          <Button
            className="next-btn"
            btnType="submit"
            btnTitle="submit"
            clickFunc={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleSubmit(e)
            }
          />
        )} */}

          <Button
            className="next-btn"
            btnType="submit"
            btnTitle={step<4?'next':"submit"}      
          />
      </form>
    </div>
  );
}

export default AddBusiness;
