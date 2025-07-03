import React, { useState } from 'react'

function MyComponent2() {

    const [name,setName] = useState("Guest");
    const [age,setAge] = useState(0);
    const [comment,setComment] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [shipping,setShipping] = useState("");

    const handleNameChange = (event) =>{
        setName(event.target.value)
    }
    const handleChangeAge = (event) =>{
        setAge(event.target.value);
    }
    const handleChangeComment = (event) =>{
        setComment(event.target.value);
    }
    const handlePayment = (event)=>{
        setPaymentMethod(event.target.value)
    }
    const handleShipping = (event) =>{
        setShipping(event.target.value);
    }

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",

      }}>
      <h1>MyComponent 2</h1>
      <input type="text" onChange={handleNameChange} value={name} />
      <p>Name: {name}</p>

      <input type="number" onChange={handleChangeAge} value={age} />
      <p>Age: {age}</p>

      <textarea value={comment} onChange={handleChangeComment} placeholder='Enter your instructions'></textarea>
      <p>Comment: {comment}</p>

      <select value={paymentMethod} onChange={handlePayment}>
        <option value="">Select Payment Method</option>
        <option value="credit">Credit Card</option>
        <option value="debit">Debit Card</option>
        <option value="paypal">PayPal</option>
        <option value="bank">Bank Transfer</option>
        <option value="cash">Cash</option>
      </select>
      <p>Payment Method: {paymentMethod}</p>
      <div style={{ marginTop: "10px" }}>
        <label htmlFor="">
        <input
          type="radio"
          id="delivery"
          name="shipping"
          value="delivery"
          checked={shipping === "delivery"}
          onChange={handleShipping}
        />
        Delivery</label>
        <label htmlFor="">
        <input
          type="radio"
          id="pickup"
          name="shipping"
          value="pickup"
          checked={shipping === "pickup"}
          onChange={handleShipping}
        />
        Pick Up</label>
      </div>
        <p>Shipping Method: {shipping}</p>
    </div>
  );
}

export default MyComponent2