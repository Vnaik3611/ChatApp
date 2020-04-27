import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Chat application for current affairs! </h1>
      <h2>
        Created By Vishesh Naik &copy; 2020{" "}
        <a href="https://vnaik3611.github.io/" target="__blank">
          Portfolio!
        </a>{" "}
      </h2>
      <h2>
        For more information: visheshnaik12@gmail.com || call:+1-226-978-1301{" "}
      </h2>
    </div>
    {users ? (
      <div>
        <h1>People currently chatting:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
