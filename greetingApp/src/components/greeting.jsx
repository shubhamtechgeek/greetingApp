import "../index.css";
import React, { useEffect, useState } from "react";

export default function Greeting() {
  const [greet, setGreet] = useState({
    index: 0,
    hello: ["Hello", "Hi", "Hey"],
  });

  const handleClick = () => {
    const nextIndex =
      greet.index === greet.hello.length - 1 ? 0 : greet.index + 1;
    setGreet({
      ...greet,
      index: nextIndex,
    });
    localStorage.setItem("index", nextIndex);
  };

  useEffect(() => {
    const item = localStorage.getItem("index")
    if(item){
        setGreet({...greet, 
            index:Number(item)});
    }
  })

  return (
    <>
      <h3>Hello there! I'm a greeter</h3>
      <h1>
        {greet.hello[greet.index]} Shubham
      </h1>
      <button onClick={handleClick}>Change</button>
    </>
  );
}
