import React from 'react';

export default function EducationList(props) {
  const items = props.education.map((item) => {
    return (
      <li key={item.id}>
        <strong>{item.school}</strong>
        {' | '}
        {item.location}
        {' | '}
        {item.graduation}
        {' | '}
        {item.description}
      </li>
    );
  });
  return <ul className="jobs">{items}</ul>;
}
