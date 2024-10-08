import './inputField.css'

function InputField(props: any) {
  const { inputLabel, inputType, inputName, inputPlaceHolder, changeHandler, inputFieldValue,required=true, autoFocus } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeHandler(e);
  };

  return (
    <div className='input-field-contnr'>
      <label>
        {inputLabel}
        <input
          type={inputType}
          name={inputName}
          placeholder={inputPlaceHolder}
          required={required}
          autoFocus={autoFocus}
          value={inputFieldValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
      </label>
    </div>
  );
}

export default InputField;