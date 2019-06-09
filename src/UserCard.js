import React from 'react';

function UserCard (props) {
  let data;
if (!props.hide) {
   data = (
    <div>
      <h3 className = "name">{props.firstName + " " + props.lastName}</h3>
      <p className = "phoneNumber">{props.phone}</p>
    </div>
  )
} else data = null;

let buttonText;
if (props.hide) {
  buttonText = "Show Details"
} else buttonText = "Hide Details";


  return (
    <div className= "main">
      <img className = "picture" src={props.picture}/>
      {data}
      <button className = "button" onClick = {props.onClick}>{buttonText}</button>
    </div>
  )
}

export default UserCard;