function StepsHeader(props:any){
    
    const {step}=props;
  
    return(
        <div className="steps-contnr">
        <div className="step-label" style={{color:step===1?'green':''}}>
          <h5>Step1</h5>
          <h4>Business Basic Info</h4>
          <hr/>
        </div>
        <div className="step-label" style={{color:step===2?'green':''}}>
          <h5>Step2</h5>
          <h4>Business Address</h4>
          <hr/>
        </div>
        <div className="step-label" style={{color:step===3?'green':''}}>
          <h5>Step3</h5>
          <h4>Owner Details</h4>
          <hr/>
        </div>
        <div className="step-label" style={{color:step===4?'green':''}}>
          <h5>Step4</h5>
          <h4>Photos Upload</h4>
          <hr/>
        </div>
        </div>
    )
}

export default StepsHeader;