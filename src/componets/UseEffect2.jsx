import React, { useEffect, useState } from 'react'

function UseEffect2() {

    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);

    useEffect(()=>{
      window.addEventListener("resize", handleWindowSize);
      console.log("Event listener added");

      return () => {
        window.removeEventListener("resize", handleWindowSize);
        console.log("Event listener removed");
      };

    },[]);

    useEffect(()=>{
        document.title = `Size: ${width} x ${height}`
    },[width,height]);

    const handleWindowSize = ()  => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)

    }



  return (
    <div>
      <h1>Window Height : {height}px</h1>
      <h1>Window Width : {width}px</h1>
    </div>
  )
}

export default UseEffect2;