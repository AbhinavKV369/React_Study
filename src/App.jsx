import AddCarComponent from "./componets/AddCarComponent";
import Button from "./componets/Button";
import CarComponent from "./componets/CarComponent";
import Card from "./componets/Card";
import ColorPicker from "./componets/ColorPicker";
import Counter from "./componets/Counter";
import FoodComponent from "./componets/FoodComponent";
import List from "./componets/List";
import MyComponent from "./componets/myComponent";
import MyComponent2 from "./componets/MyComponent2";
import ProfilePicture from "./componets/ProfilePicture";
import Student from "./componets/Student";
import Greeting from "./componets/userGreeting";


import "./index.css";

function App() {
  return (
    <>
      <h1>React Study</h1>
      <Card />
      <Student name="John" age={23} isStudent={true} />
      <Student />
      <Button />
      <Greeting isLoggedIn={true} username="Abhinav" />
      <Greeting isLoggedIn={true} />
      <List />
      <ProfilePicture />
      <MyComponent />
      <MyComponent />
      <Counter />
      <MyComponent2/>
      <ColorPicker/>
      <CarComponent />
      <FoodComponent/>
      <AddCarComponent/>
      
    </>
  );
}

export default App;
