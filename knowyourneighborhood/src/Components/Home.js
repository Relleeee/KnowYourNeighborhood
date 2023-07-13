import React, {Component} from "react";
import './css/all.css';
import { Link } from "react-router-dom";
import explore from './Images/explore.jpg'
import connect from './Images/connect.jpg'
import share from './Images/share.jpg'
class Home extends Component {

    render(){
        return (
            <div className="home">
       
        <section className="cta">
          <h2>Ready to know your neighborhood?</h2>
          <button className="cta-button"><Link to="/register">Get Started</Link></button>
        </section> 
        <section className="features">
          <div className="feature">
            <i className="fas fa-map-marker-alt"></i>
            <h2>Explore</h2>
            <img src={explore} alt="share" height={("200")}/>
            <p>Find local attractions, restaurants, parks, and more.</p>
          </div>
          <div className="feature">
            <i className="fas fa-users"></i>
            <h2>Connect</h2>
            <img src={connect} alt="share" height={("200")}/>
            <p>Connect with your neighbors and join community events.</p>
          </div>
          <div className="feature">
            <i className="fas fa-comments"></i>
            <h2>Share</h2>
            <img src={share} alt="share" height={("200")} width={("355")}/>
            <p>Share your experiences and recommendations with others.</p>
          </div>
        </section>
      </div>
          );
        };
}
        export default Home;