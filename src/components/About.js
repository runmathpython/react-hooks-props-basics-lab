import React from "react";
import Links from "./Links";

function About(props) {

  console.log(props);

  if (props.bio === undefined || props.bio === "") {
    return (
      <div id="about">
        <h2>About Me</h2>
        
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        {/* add your <Links /> component here */}
        <div>
          <Links github={props.links.github} linkedin={props.links.linkedin} />
        </div>
      </div>
    );
  } else {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{props.bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        {/* add your <Links /> component here */}
        <div>
          <Links github={props.links.github} linkedin={props.links.linkedin} />
        </div>
      </div>
    );
  }
}

export default About;
