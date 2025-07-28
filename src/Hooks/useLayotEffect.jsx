import React, { useEffect, useLayoutEffect } from 'react'

const useLayotEffect = () => {
  useEffect(() => {
    console.log("useEffect executed");
  });

  useLayoutEffect(() => {
    console.log("useLayot executed");
  });

  return (
    <div>
      {Array(1000)
        .fill("")
        .map((item, index) => (
          <li key={index}>{Math.pow(Math.random(), 10)}</li>
        ))}
    </div>
  );
}


export default useLayotEffect