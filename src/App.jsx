import React from "react";
import './index.css'
import FormSection from "./components/FormSection";
import ResultSection from "./components/ResultSection";
import { useState } from "react";


const App = () => {
    // Keeps track of the validation status of date when form is submitted
    const [dateValidState, setDateValidState] = useState(true)

    // Keeps track of general user input on the three input fields
    const [dob, setDob] = useState({
        day: "",
        month: "",
        year: ""
    })

    const [ageData, setAgeData] = useState({})

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

    const isDateValidOnSubmit = (dateString) => {
        const { day, month, year } = dateString;
        const date = new Date(Number(year), Number(month) - 1, Number(day));
        return date.getDate() === Number(day) && date.getMonth() === Number(month) - 1 && date.getFullYear() === Number(year);
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

    // Handles form submission and triggers error if form is empty
    const handleSubmit = (e) => {
        e.preventDefault()

        const emptyForm = dob.day === "" || dob.month === "" || dob.year === "";

        if (emptyForm) {
            setDob({...dob, emptyInput: true})
        } else if (!emptyForm) {
            // setDob({...dob, emptyInput: false})

            if (isDateValidOnSubmit(dob)) {
                setDateValidState(isDateValidOnSubmit(dob))
                const calculatedAgeData = getDob(dob)
                setAgeData(calculatedAgeData)
            } else {
                setDateValidState(false)
            }
        }
    }


    return (
    <div className="App">
        <FormSection dateValidState={dateValidState} dob={dob} handleChange={handleChange} handleSubmit={handleSubmit} />
        <ResultSection resDob={ageData} />
    </div>
    )
}

export default App;