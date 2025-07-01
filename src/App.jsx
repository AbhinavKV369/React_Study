import Button from "./componets/Button";
import Card from "./componets/Card";
import List from "./componets/List";
import MyComponent from "./componets/myComponent";
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
      
    </>
  );
}

export default App;
