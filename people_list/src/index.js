import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// DEFINE PERSON COMPONENT &
// DESTRUCTOR PROPS &
// DEFINE CHILDREN PROPS
const Person = props => {
  // Destructor props
  const { img, name, occupation } = props.personInfo;
  // Put image url into a variable to make 
  // dynamic selection of image
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`

  //Children prop
  const { children } = props;

  return (
    <article className="person">
      <img
        src={url} alt="person"
      />
      <h4>{name}</h4>
      <h5>{occupation}</h5>
      {children}
    </article>
  );
}


const PersonList = () => {
  const personInfo = [
    {
      img: "34",
      name: "John",
      occupation: "Developer"
    },
    {
      img: "22",
      name: "Andrew",
      occupation: "Designer"
    },
    {
      img: "56",
      name: "Dillon",
      occupation: "Manager"
    },
    {
      img: "54",
      name: "Brandon",
      occupation: "CEO"
    },
  ]

  return (
    <section className="person__list">
      <Person personInfo={personInfo[0]} >
        <p>
          Lorem ipsum dolor sit amet. Sit amet consectetur adipisicing elit. Recusandae, quis.
        </p>
      </Person>

      <Person personInfo={personInfo[1]}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, minima!
        </p>
      </Person>

      <Person personInfo={personInfo[2]}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, minima!
        </p>
      </Person>

      <Person personInfo={personInfo[3]}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, minima!
        </p>
      </Person>
    </section>
  );
}

ReactDOM.render(<PersonList />, document.getElementById('root'));
