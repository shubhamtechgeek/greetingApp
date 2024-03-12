import "../index.css";
import React, { useState } from "react";

export default function Greeting() {
    const [greet, setGreet] = React.useState({
        label: "",
        index: 0,
        hello: ["Hello", "Hi", "Hey"]
    });

const handleClick = () => {
    const nextIndex = greet.index === greet.hello.length - 1? 0 : greet.index + 1;
    setGreet({
        ...greet, 
        index: nextIndex,
    });
}

const handleLabel = (e) => {
    setGreet({
        ...greet, 
        label: e.target.value,
    });
}

  return (
    <>
        <h3>
            Hello there! I'm a greeter. What is your name?
        </h3>
        <input type="input" value={greet.label} onChange={handleLabel} />
        <h1>{greet.label ? `${greet.hello[greet.index]} !! ${greet.label}` : ""}</h1>
        <button onClick={handleClick}>Change</button>
    </>
  );
}
