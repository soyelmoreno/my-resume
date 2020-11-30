import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Contact';
import users from './users.json';

// Data

//let userObj = users[bob];
//let userObj = users[superuser];
let userObj = users['cm'];

// A small function/component
function Summary(props) {
  if (props.user.summary) {
    return <p>{props.user.summary}</p>;
  }
  return null;
}

function JobList(props) {
  const jobItems = props.jobs.map((job) => (
    <li className="job" key={job.company}>
      {/* Print out each company */}
      <h3>
        <span className="company">{job.company}</span>
        <span className="city-dates">
          {job.city ? ' |' : ''} {job.city} | {job.dates}
        </span>
      </h3>

      {/* Print out the title and tasks of each role in the company */}
      <RoleList roles={job.roles} />
    </li>
  ));
  return <ul className="jobs">{jobItems}</ul>;
}

function RoleList(props) {
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

function TaskList(props) {
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

function SkillList(props) {
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

function EducationList(props) {
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

// Put it all together
const App = () => {
  return (
    <div className="wrapper">
      <header>
        <Contact user={userObj} />
        <Summary user={userObj} />
      </header>

      <section>
        <h2>Experience</h2>
        <JobList jobs={userObj.jobs} />
      </section>

      <section>
        <h2>Technical Skills</h2>
        <SkillList skills={userObj.skills} />
      </section>

      <section>
        <h2>Education</h2>
        <EducationList education={userObj.education} />
      </section>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
