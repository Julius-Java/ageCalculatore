import React from "react";

const ResultSection = () => {
    return (
        <section className="resultSection">
            <div className="result">
                <div className="digit">
                    <p>-</p>
                    <p>-</p>
                </div>
                <h3>years</h3>
            </div>

            <div className="result">
                <div className="digit">
                    <p>-</p>
                    <p>-</p>
                </div>
                <h3>months</h3>
            </div>

            <div className="result">
                <div className="digit">
                    <p>-</p>
                    <p>-</p>
                </div>
                <h3>days</h3>
            </div>
        </section>
    )
}

export default ResultSection;