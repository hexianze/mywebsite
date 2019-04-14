import React, { Component } from "react";
import {Spring} from "react-spring/renderprops";

export class Component2 extends Component {
    render() {
        return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 1000, duration: 1000 }}
            >
                {props => (
                    <div style={props}>
                        <div style={c2Style}>
                            <h1>Work Experience</h1>
                            <h3>Full Stack Developer Peer-marking System Unitec / From 07/2018 To 11/2018</h3>
                            <p>
                                The main aim is to develop a fully function web-based peer assessment system with the set of functionalities, which allow a lecturer to create tasks for his/her teaching paper with a set of marking criteria’s and each student from that class can do a peer marking and self-marking for each task set up by lecturer. Lecturer will be able to have report for all students’ performance over semester.
                            </p>
                            <p> This website is being built in Bootstrap for the front-end, Laravel framework for
                                providing back-end RestAPIs, and MySQL for the database. </p>
                            <p>With the efforts of me and my teammates, we successfully completed most of the functional requirements.</p>
                            <button style={btn} onClick={this.props.toggle}>
                                More about me
                            </button>
                        </div>
                    </div>
                )}
            </Spring>
        );
    }
}

const c2Style = {
    background: "#4f8ef2",
    color: "white",
    padding: "1.5rem"
};

const btn = {
    background: "#333",
    color: "#fff",
    padding: "1rem 2rem",
    border: "none",
    textTransform: "uppercase",
    margin: "15px 0"
};

export default Component2;
