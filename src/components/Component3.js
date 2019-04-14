import React from "react";
import Skills from './skills';


export default function Component3() {
    return (
        <div style={c3Style}>
            <h1>Soft skills</h1>
            <Skills
                skill="Communications"
                progress={80}
            />
            <Skills
                skill="Team Work"
                progress={85}
            />
            <Skills
                skill="Writing Work"
                progress={78}
            />
            <Skills
                skill="Verbal"
                progress={75}
            />


        </div>
    );
}

const c3Style = {
    background: "#2973e8",
    color: "white",
    padding: "1.5rem 1.5rem 5rem 1.5rem"
};
