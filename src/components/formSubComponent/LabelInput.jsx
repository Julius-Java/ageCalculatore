import React from "react";

const LabelInput = ({name, inputType, onChange, value, emptyInput, invalidInputMsg}) => {
    let requiredErrorMessage = emptyInput ? "This field is required" : invalidInputMsg;

    return (
        <div className="label-input">
            <label htmlFor={name.toLowerCase()} className="labelText"> {name} </label>
            <input
                autoComplete="off"
                style={{border: emptyInput && "1px solid hsl(0, 100%, 67%)"}}
                onChange={onChange}
                id={name.toLowerCase()}
                type={inputType}
                name={name.toLowerCase()}
                value={value[name.toLowerCase()]}
            />
            {requiredErrorMessage && (
                <small className="error">{requiredErrorMessage}</small>
            )}
            {/* {invalidInputMsg && (
                <small className="error">{invalidInputMsg}</small>
            )} */}
        </div>
    )
}

export default LabelInput;