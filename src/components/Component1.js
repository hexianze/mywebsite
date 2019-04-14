import React from "react";
import {Spring} from "react-spring/renderprops";

export default function Component1() {
    return (
        <Spring
            from={{ opacity: 0, marginTop: -500 }}
            to={{ opacity: 1, marginTop: 0 }}
        >
            {props => (
                <div style={props}>
                    <div style={c1Style}>
                        <h1>Education Experience</h1>
                        <p>
                            Through the past three years of study, I successfully completed the undergraduate course and get an bachelor degree in Unitec. In these three years,I have studied operating system, database, effective team work, web application's backend and front-end technique, Agile methodologies, iOS and Android's development etc.These courses made my programming foundation solid and helped me complete my final capstone project.
                        </p>
                        <Spring
                            from={{ number: 0 }}
                            to={{ number: 10 }}
                            config={{ duration: 10000 }}
                        >
                            {props => (
                                <div style={props}>
                                    <h1 style={counter}>{props.number.toFixed()}</h1>
                                </div>
                            )}
                        </Spring>
                    </div>
                </div>
            )}
        </Spring>
    );
}

const c1Style = {
    background: "#6da3f9",
    color: "white",
    padding: "1.5rem"
};

const counter = {
    background: "#333",
    textAlign: "center",
    width: "100px",
    borderRadius: "50%",
    margin: "1rem auto"
};
