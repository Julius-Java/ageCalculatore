import React, { useState } from "react";
import arrowImg from "../assets/images/icon-arrow.svg";
import LabelInput from "./formSubComponent/LabelInput";


const FormSection = ({dob, handleChange, handleSubmit, dateValidState}) => {

    // Validate user input and set appropriate error
    const validateDob = (dob) => {
        const errors = {}
        const dobDay = parseInt(dob.day)
        const dobMonth = parseInt(dob.month)
        const dobYear = parseInt(dob.year)
        const currentYear = new Date().getFullYear()

        if (dobDay < 1 || dobDay > 31) {
            errors.day = "Must be a valid day";
        }

        if (dobMonth < 1 || dobMonth > 12) {
            errors.month = "Must be a valid month";
        }

        if (dobYear > (currentYear - 1)) {
            errors.year = "Must be in the past";
        }

        return errors;
    }

    return (
        <section className="formSection">
            <form onSubmit={handleSubmit} id="form">
                <div className="field">
                    <LabelInput
                        value={dob}
                        onChange={handleChange}
                        name="Day"
                        inputType="number"
                        emptyInput={dob.emptyInput && dob.day === ""}
                        invalidInputMsg={validateDob(dob).day}
                        placeHolder="DD"
                        dateValidState={dateValidState}
                    />

                    <LabelInput
                        value={dob}
                        onChange={handleChange}
                        name="Month"
                        inputType="number"
                        emptyInput={dob.emptyInput && dob.month === ""}
                        invalidInputMsg={validateDob(dob).month}
                        placeHolder="MM"
                        dateValidState={dateValidState}
                    />

                    <LabelInput
                        value={dob}
                        onChange={handleChange}
                        name="Year"
                        inputType="number"
                        emptyInput={dob.emptyInput && dob.year === ""}
                        invalidInputMsg={validateDob(dob).year}
                        placeHolder="YYYY"
                        dateValidState={dateValidState}
                    />
                </div>

                <div className="submitSection">
                    <hr />
                    <button className="btn" type="submit">
                        <img src={arrowImg} />
                    </button>
                </div>
            </form>
        </section>
    )
}

export default FormSection;