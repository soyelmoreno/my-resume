import React from 'react';
import {render} from 'react-dom';
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
          | {job.city} | {job.dates}
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
  const taskItems = tasks.map((task) => <li key={task}>{task}</li>);
  return <ul className="tasks">{taskItems}</ul>;
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
        <ul className="jobs">
          <li>
            <strong>Strong:</strong> HTML5, CSS3, Responsive Design, SASS,
            JavaScript, Oracle JET, Knockout, Require, jQuery, PHP, MySQL, Git,
            SVN, VS Code, Bash, Wordpress, JAWS, Photoshop, Illustrator
          </li>
          <li>
            <strong>Familiar:</strong> React, Node, AJAX, Java, C/C++, C#,
            ASP.NET, SQL, SSRS, Python, MATLAB, LabVIEW, VBA, Assembly
          </li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <ul className="jobs">
          <li>
            <strong>Harvard University</strong> | Cambridge, MA | May 2010 |
            Ph.D., Organismic and Evolutionary Biology
          </li>
          <li>
            <strong>University of Washington</strong> | Seattle, WA | June 2001
            | B.S. Zoology. Minor: Music
          </li>
        </ul>
      </section>
    </div>
  );
};

render(React.createElement(App), document.getElementById('root'));
