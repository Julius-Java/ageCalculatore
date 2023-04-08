import React from "react";

const LabelInput = ({name, inputType, onChange, value, emptyInput, invalidInputMsg, placeHolder, dateValidState}) => {

    let requiredErrorMessage = emptyInput ? "This field is required" : (!dateValidState ? "Invalid date" : invalidInputMsg);

    return (
        <div className="label-input">
            <label
                style={{color: emptyInput || !dateValidState ? "hsl(0, 100%, 67%)" : ""}}
                htmlFor={name.toLowerCase()}
                className="labelText">
                    {name}
            </label>

            <input
                placeholder={placeHolder}
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
        </div>
    )
}

export default LabelInput;