import React, { Component } from "react";
import Profile from "./profile1.png"
import Stylekk from "./comp.css"
import "bootstrap/dist/css/bootstrap.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="container-fluid p-3">
        <div className="row">
          <div className="col">
            <ul className="nav my-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  RESUME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PORTFOLIO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row profile">
          <div class="cols profile-avatar">
            <img src={Profile} className="img-fluid img-thumbnail" alt="avatar" />
          </div>
          <div class="cols my-info">
            <h1 style={{marginLeft:"-10px"}}>Amanuel Chukala</h1>
            <h5>
                An aspiring software engineer <br/> 
                Student at UC Denver <br/>
                Denver 80231, Colorado <br/>
            </h5>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
