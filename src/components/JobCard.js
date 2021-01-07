import React from 'react';

function JobCard(props) {
  return (
    <div key={props.id}>
      <img src={props.logo} alt='' />
      <p>{props.company}</p>
      <p>{props.title}</p>
      <p>{props.type}</p>
      <p>{props.location}</p>
      <p>{props.date}</p>
    </div>
  );
}

export default JobCard;