// conditional rendering

import propTypes from "prop-types";

function Greeting(props) {
  /* if(props.isLoggedIn){
    return (
      <div>
        <h1>Welcome {props.username}</h1>
      </div>
    );
  }else{
    return <h2>Please log in to continue</h2>
  } */

    return (
      <div>
        {props.isLoggedIn ? (
          <h2 className="welcome-text">Welcome {props.username}</h2>
        ) : (
          <h2 className="login-prompt">Please log in to continue</h2>
        )}
      </div>
    );    
}

Greeting.proptype = {
    isLoggedIn : propTypes.bool,
    username : propTypes.string
}

Greeting.defaultProps = {
  isLoggedIn: false,
  username : "Mr Avaratham"
}

export default Greeting;
