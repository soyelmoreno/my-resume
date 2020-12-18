import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Contact';
import Summary from './Summary';
import JobList from './JobList';
import SkillList from './SkillList';
import EducationList from './EducationList';
import users from './users.json';

// Get data from JSON object
//let userObj = users[bob];
//let userObj = users[superuser];
let userObj = users['cm'];
const { summary, jobs, skills, education } = userObj;

// Put it all together
const App = () => {
  return (
    <div className="wrapper">
      <header>
        <Contact user={userObj} />
        <Summary summary={summary} />
      </header>

      <section>
        <h2>Experience</h2>
        <JobList jobs={jobs} />
      </section>

      <section>
        <h2>Technical Skills</h2>
        <SkillList skills={skills} />
      </section>

      <section>
        <h2>Education</h2>
        <EducationList education={education} />
      </section>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
