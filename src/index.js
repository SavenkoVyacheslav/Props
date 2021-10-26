import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.image} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beuonce"
      image="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Chack"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoX1WYJ2Q4r5eQBls1BFH2XF4fYGnI6qxggQ&usqp=CAU"
      tel="+987 654 321"
      email="x@chack.com"
    />
  </div>,
  document.getElementById("root")
);
