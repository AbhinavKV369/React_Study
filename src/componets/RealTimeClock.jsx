import React, { useEffect, useState } from 'react'

function RealTimeClock() {

    const [ time,setTime ] = useState(new Date());

    useEffect(()=>{
        const InterValid = setInterval(()=>{
            setTime(new Date());
        },1000);

        return () =>{
            clearInterval(InterValid)
        }
    },[]);

    const formatFunction = () =>{
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridiem = hours >= 12 ? "PM" : "AM" ;

        hours = hours % 12 || 12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    const padZero = (number) => {
       return (number < 10 ? "0" : "" ) + number
    }

  return (
    <div>
      <div className="clock-container" style={styles.clockContainer} >
        <div className='time' style={styles.time}>
          <span>{formatFunction()}</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  clockContainer: {
    backgroundImage: "url(src/assets/intro.png)",
    display: "flex",
    textAlign: "center",
    alignItems: "center"
  },
  time: {
    height: "100px",
    width: "400px",
    display: "flex",
    textAlign: "center",
    fontSize: "50px",
  },
};

export default RealTimeClock