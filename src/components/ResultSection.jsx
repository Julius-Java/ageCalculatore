import React from "react";

const DisplayDigit = ({resDate, dataStatus}) => {
    const digits = dataStatus && resDate.toString().split('')

    return (
        <div className="digit">
            {dataStatus ?
                digits.map((digit, index) => (
                <p key={index} className={`digit-${index}`}>
                    {digit}
                </p>
            )) :
                <p>- -</p>
            }
        </div>
    )
}

const ResultSection = ({resDob}) => {

    // Boolean set to true if recieved dob object is not empty
    const dataNotEmpty = Object.keys(resDob).length > 0;

    // Boolean set to true if recieved dob object is empty
    const emptyData = Object.keys(resDob).length === 0;

    // Checks to assign appropriate nouns
    const nounYears = resDob.years > 1 || emptyData ? "Years" : "Year"
    const nounMonths = resDob.months > 1 || emptyData ? "Months" : "Month"
    const nounDays = resDob.days > 1 || emptyData ?  "Days" : "Day"

    return (
        <section className="resultSection">
            <div className="result">
                <DisplayDigit resDate={resDob.years} dataStatus={dataNotEmpty} />
                <h3>{nounYears}</h3>
            </div>

            <div className="result">
                <DisplayDigit resDate={resDob.months} dataStatus={dataNotEmpty} />
                <h3>{nounMonths}</h3>
            </div>

            <div className="result">
                <DisplayDigit resDate={resDob.days} dataStatus={dataNotEmpty} />
                <h3>{nounDays}</h3>
            </div>
        </section>
    )
}

export default ResultSection;