import "./addBusiness.css";

import {
  BusinessBasicInfo,
  BusinessAddress,
  BusinessPhotos,
  OwnerDetails,
  Button,
  StepsHeader,
} from "../../components";

import { useEffect, useState } from "react";

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

  const [inputField, setInputField] = useState<StateType>({
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
  });


  useEffect(() => {
    console.log("inputField objet:", inputField);
  }, [inputField]);

  
  const handleNext = () => {
    return setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    return setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    return setStep((prevStep) => prevStep + 1);
  };

  const handleSteps = () => {
    console.log("step:", step);
    switch (step) {
      case 1:
        console.log("inside step 1");
        return <BusinessBasicInfo />;

      case 2:
        console.log("inside step 2");
        return <BusinessAddress />;

      case 3:
        console.log("inside step 3");

        return (
          <OwnerDetails inputField={inputField} setInputField={setInputField} />
        );

      case 4:
        console.log("inside step 4");
        return <BusinessPhotos />;
      default:
        console.log("inside default");
        setStep((prevStep) => (prevStep = 1));
    }
  };

  return (
    <div className="addBusiness-main-contnr">
      <StepsHeader step={step} />
      {handleSteps()}
      {step > 1 && (
        <Button
          className="next-btn"
          btnTitle="prev"
          clickFunc={() => handlePrev()}
        />
      )}
      {step === 4 && (
        <Button
          className="next-btn"
          btnTitle="submit"
          clickFunc={() => handleSubmit()}
        />
      )}
      {step < 4 && (
        <Button
          className="next-btn"
          btnTitle="Next"
          clickFunc={() => handleNext()}
        />
      )}
    </div>
  );
}

export default AddBusiness;
