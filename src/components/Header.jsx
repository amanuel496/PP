import React, { Component } from "react";
import Profile from "./profile1.png";
import "./comp.css";
import "bootstrap/dist/css/bootstrap.css";

class Header extends Component {
  render() {
    return (
      <header className="container p-0">
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

        <div className="row">
          <div className="col-sm-4 ">
            <img
              src={Profile}
              style={{
                backgroundColor: "transparent",
                border: "none",
              }}
              className="img-fluid img-thumbnail"
              alt="avatar"
            />
          </div>
          <div className="col-sm-8">
            <p>
              <div style={{ position: "absolute", bottom: "0px" }}>
                <h1>Amanuel Chukala</h1>
                <h5>
                  An aspiring software engineer <br />
                  Student at UC Denver <br />
                  Denver 80231, Colorado <br />
                </h5>
              </div>
            </p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
