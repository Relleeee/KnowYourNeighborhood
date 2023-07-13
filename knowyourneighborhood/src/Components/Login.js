import React, { Component} from 'react';
import './css/creds.css'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Axios from 'axios';
class Login extends Component {
  constructor() {
    super();
    this.state = {
        "username": '',
        "password": '',
        isLoggedIn:false,
        userID:"",
        name:"",
        email:"",
        picture:""
    }
}

usernameInput = (event) => {
    this.setState({
        username: event.target.value
    })
}

passwordInput = (event) => {
    this.setState({
        password: event.target.value
    })
}

login = (event) => {
    event.preventDefault();
    Axios.post('api/login', this.state)
        .then(res => {
            console.log(res.data);
            window.location.href = "dashboard";
        })
        .catch(error => {
            console.log(error);
            alert("Incorrect username or password.")
        })
}

responseFacebook = (response) => {
    if (response.status !== 'unknown') {
        const { name } = response;
        this.setState({ username: name });
        window.location.href = "dashboard";
    } else {
        console.log('Login failed');
        alert("Login Failed")
    }
};

  render() {
    let googleContent;
    const responseGoogle=(response)=>{
      this.state({
        isLoggedIn:true,
        userID:response.userID,
        name:response.name,
        email:"data"
      })
    }

    if(this.state.isLoggedIn){
      console.log("Data");
      window.location.href = "Dashboard";
    }
        else{
          googleContent=(
            <GoogleLogin
            clientId="568990177984-su4spa85j8o78cug82heu8mt218ep5q9.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}  
            />
          )
          }
  return (
    <main className="login">
    <div className="login-body">
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={this.login} className="login-form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={this.state.username} onChange={this.usernameInput} required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={this.state.password} onChange={this.passwordInput} required />
        
       
        <button type="submit">Login</button> 
      
      
        <div id="fb-login">
          <FacebookLogin
          appId='6099869413442066'
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook}
          />
        </div>
        
        <div id="googleLogin">
          {googleContent}
        </div>
        <p className="mt-2">
          New User? Please register <a href="register" className="regBtn">Here</a>
          <br/><br/> Please login so that you can add stores
        </p>
      </form>
    </div>
    </div>
    </main>
  );
};
  }

  export default Login;