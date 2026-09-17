


function UserGreet(props) {

    const welcomeMessage = <p className="welcome"> Welcomee {props.userName}</p>;
    const logInMessage = <p className="logIn">Please login to continuee</p>;
    return (props.isLoggedIn ? welcomeMessage : logInMessage);

}

export default UserGreet;