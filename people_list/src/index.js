import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// DEFINE PERSON COMPONENT
// DESTRUCTOR PROPS
// CHILDREN PROPS
const Person = ({ img, name, occupation, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`

  return (
    <article>
      <img
        src={url} alt="person"
      />
      <h4>{name}</h4>
      <h4>{occupation}</h4>
      {children}
    </article>
  );
}


const PersonList = () => {
  return (
    <section>
      <Person img="34" name="John" occupation="developer" />
      <Person img="22" name="Andrew" occupation="designer">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, minima!
        </p>
      </Person>
      <Person img="56" name="Dillon" occupation="manager" />
    </section>
  );
}









ReactDOM.render(<PersonList />, document.getElementById('root'));