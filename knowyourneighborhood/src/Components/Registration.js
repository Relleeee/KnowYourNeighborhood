import React, {Component} from "react";
import axios from "axios";
import '../Components/css/creds.css'
class Registration extends Component {
        constructor(){
            super();
            this.state={
                "name":' ',
                "username":' ',
                "email"   :' ',
                "password":' ',
                "phone"  :' ',
                "address" :' '
    
            }
        }
    
    phoneInput=(event)=>{
        this.setState({
            phone:event.target.value
        })
    }
    addressnameInput=(event)=>{
        this.setState({
            address:event.target.value
        })
    }
    nameInput=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    
    usernameInput=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    emailInput=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    
    passwordInput=(event)=>{
    this.setState({
        password:event.target.value
    })
    }
    
    addUser=(event)=>{
        alert(this.state.fullname+" "+this.state.username+" "+this.state.email+" "+this.state.password +" "+this.state.address+" "+this.state.phone);
        axios.post('public/addUser',this.state)
        .then(res=>{
            console.log(res.data);
        })
        .catch(error=>{
            console.log(error);
        })
    }
        //View --HTML
    
        render(){
            return (
                <div className="register-bg">
                  <div className="register-container">
                    <h1>Register </h1>
                    <form onSubmit={this.addUser} className="register-form"> 
                        Full Name:   <input type="text"         value={this.state.name}     onChange={this.nameInput} required/> <br/>
                        Username:    <input type="text"         value={this.state.username}     onChange={this.usernameInput} required/> <br/>
                        Email:       <input type="email"        value={this.state.email}        onChange={this.emailInput} required/><br/>
                        Password:    <input type="password"     value={this.state.password}     onChange={this.passwordInput} required/> <br/>
                        Address:     <input type="text"         value={this.state.address}      onChange={this.addressnameInput} required/><br/>
                        Mobile:      <input type="number"       value={this.state.phone}       onChange={this.phoneInput} required/><br/>
                        <button type="submit" value="Register"> Register</button>
                        <p>have an account? <a href='/login' className='lgnBtn'>Click Here</a></p>
                    </form>
                    </div>
                </div>
            )
        }
    }
    
    export default Registration;