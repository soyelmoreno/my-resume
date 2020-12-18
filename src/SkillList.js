import React from 'react';

export default function SkillList(props) {
  const strongItems = props.skills.strong.join(', ');
  const familiarItems = props.skills.familiar.join(', ');
  return (
    <ul className="jobs">
      <React.Fragment>
        <li className="job">
          <strong>Strong: </strong> {strongItems}
        </li>
        <li className="job">
          <strong>Familiar:</strong> {familiarItems}
        </li>
      </React.Fragment>
    </ul>
  );
}
