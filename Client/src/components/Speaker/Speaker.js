
import React from "react";

export default function App() {
    const text = "'''''''''''''''''''''''''";
    // console.log("text", text);

    const Letter = text.split("");
    console.log(Letter);

    return (
        <div className="sp">
            <section>
                {Letter.map((item, index) => {
                    return (
                        <span
                            key={index}
                            className="letter"
                            style={{
                                transform: `rotate(${index * 20}deg)`,
                                
                            }}
                        >
                            {item}
                        </span>
                    );
                })}
            </section>
        </div>
    );
}