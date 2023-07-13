import React, {Component} from "react";
import axios from "axios";
import './css/all.css'

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            "text":''
        }
    }

    //ONCHANGE
    textInput=(event)=>{
        this.setState({
            text: event.target.value
        })
    }

    //Submit Ticket To Slack
    submitTicket=(event)=>{
        alert(this.state.text +"sent")

        event.preventDefault();
        axios.post('/messages/C059TAHPGLR',this.state)
        .then(res=>{
            console.log(res.data);
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render() {
        return (
            <div className="contact-body">
            <div className="contact-container"> 
            <div className="cont-omcm">
              <h1 className="h1-contact">Contact Us</h1>
              <p className="p-contact">If you have any questions, suggestions, or feedback, please feel free to reach out to us. We're here to help!</p>
        
              <h2 className="h2-contact">Contact Information</h2>
              <p className="p-contact">Joshualiao1211@gmail.com</p>
              <p className="p-contact">Phone: +1 (202) 918-2132</p>
        
              <h2 className="h2-contact">Business Hours</h2>
              <p className="p-contact">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="p-contact">Saturday - Sunday: Out of Service</p>
        
              <h2 className="h2-contact">Location</h2>
                <p className="p-contact">699-547 IN-46, Ellettsville, Indiana, 47429, USA</p>
            </div>
            <div className="msg-form">
            <h2 className="h2-contact">Send us a Message</h2>
              <form className="contact-form">
                <label htmlFor="name" className="nmlbl">Name</label>
                <input type="text" id="name" name="name" required className="nmnp" />
        
                <label htmlFor="email" className="emllbl">Email</label>
                <input type="email" id="email" name="email" required className="emlnp" />
        
                <label htmlFor="text" className="msglbl">Message</label>
                <textarea placeholder="Enter your message" value={this.state.text} onChange={this.textInput} className="msgtxt"></textarea>
        
                <button type="submit" className="msg-sbmt">Send Message</button>
              </form>
              </div>

        
             
            </div>
        </div>
        );
    };
}      
        export default Contact;