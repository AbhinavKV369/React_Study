import profiePic from "../assets/intro.png";

const Card = () => {
  return (
    <div className="card">
      <img className="cardImage" src={profiePic} alt="profile" />
      <h2>Ashok Leyland</h2>
      <p>Make powerful vehicles</p>
    </div>
  );
};

export default Card;
