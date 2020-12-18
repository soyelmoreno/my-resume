import React from 'react';
import TaskList from './TaskList';

export default function RoleList(props) {
  return (
    <React.Fragment>
      {props.roles.map((role) => (
        <React.Fragment key={role.title}>
          <h4 className="title">{role.title}</h4>
          <TaskList tasks={role.tasks} />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
