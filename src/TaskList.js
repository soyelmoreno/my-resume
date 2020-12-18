import React from 'react';

export default function TaskList(props) {
  const tasks = props.tasks;
  const taskItems = tasks.map((task) => {
    if (typeof task === 'string') {
      return <li key={task}>{task}</li>;
    } else {
      // `task` is an object
      if (task.enabled) {
        return (
          <li key={task.itemtext}>
            <a href={task.linkurl} target="_blank" rel="noopener noreferrer">
              {task.linktext}
            </a>
            {task.itemtext}
          </li>
        );
      }
    }
  });
  return <ul className="tasks">{taskItems}</ul>;
}
