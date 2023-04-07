import React, { useState } from "react";
import arrowImg from "../assets/images/icon-arrow.svg";
import LabelInput from "./formSubComponent/LabelInput";


const FormSection = () => {

    // Keeps track of general user input on the three input fields
    const [dob, setDob] = useState({
        day: "",
        month: "",
        year: ""
    })

    // Updates the respective properties of the dob object when user enters an input
    const handleChange = (e) => {
        const {name, value} = e.target;

        setDob(prevValue => {
            return {
                ...prevValue,
                [name] : value
            }
        })
    }

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

    // Calculate and return the age in Years, Months, Days
    const getDob = (dob) => {
        const {day, month, year} = dob;

        // Create a new date object from the given values
        const birthDate = new Date(year, month - 1, day)

        // Create a date object for the current date and time
        const now = new Date()

        // Calculate age in years
        let age = now.getFullYear() - birthDate.getFullYear()

        // Adjust the age if it has not passed
        const birthdateThisYear = new Date(now.getFullYear(), month - 1, day)

        if (now < birthdateThisYear) {
            age--;
        }

        // Calculate months and days since last year birthday
        const birthdateLastYear = new Date(now.getFullYear() - 1, month - 1, day)
        const diffDate = new Date(now - birthdateLastYear)
        const months = diffDate.getMonth()
        const days = diffDate.getDate() - 1;

        return {years: age, months: months, days: days}
    }

    const getAgeData = () => {
        const ageData = getDob(dob)
        return ageData;
    }


    // Handles form submission and triggers error if form is empty
    const handleSubmit = (e) => {
        e.preventDefault()

        const emptyForm = dob.day === "" || dob.month === "" || dob.year === "";

        if (emptyForm) {
            setDob({...dob, emptyInput: true})
        } else if (!emptyForm) {
            setDob({...dob, emptyInput: false})
            getAgeData(dob)
        }
    }



    return (
        <section className="formSection">
            <form onSubmit={handleSubmit} id="form">
                <div className="field">
                    <LabelInput
                        value={dob}
                        onChange={handleChange}
                        name="Day"
                        inputType="text"
                        emptyInput={dob.emptyInput && dob.day === ""}
                        invalidInputMsg={validateDob(dob).day}
                    />

                    <LabelInput
                        value={dob}
                        onChange={handleChange}
                        name="Month"
                        inputType="text"
                        emptyInput={dob.emptyInput && dob.month === ""}
                        invalidInputMsg={validateDob(dob).month}
                    />

                    <LabelInput
                        value={dob}
                        onChange={handleChange}
                        name="Year"
                        inputType="text"
                        emptyInput={dob.emptyInput && dob.year === ""}
                        invalidInputMsg={validateDob(dob).year}
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