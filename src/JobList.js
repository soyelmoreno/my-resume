import React from 'react';
import RoleList from './RoleList';

export default function JobList(props) {
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
