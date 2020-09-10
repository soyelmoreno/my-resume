import React from 'react';
import FormattedAddr from './FormattedAddr';

// @param user Object
function formatName(user) {
  let output;
  // Duplicating some markup, but showing that JSX can go inside conditional branching
  if (user.suffix) {
    output = (
      <div className={`contact-name ${user.firstName}`}>
        {`${user.firstName} ${user.lastName} ${user.suffix}`}
      </div>
    );
  } else {
    output = (
      <div className={`contact-name ${user.firstName}`}>
        {`${user.firstName} ${user.lastName}`}
      </div>
    );
  }
  return output;
}

class Contact extends React.Component {
  render() {
    const user = this.props.user;
    return (
      <div className="contact">
        <div className="contact-name">{formatName(user)}</div>
        <div className="contact-info">
          <p>
            <FormattedAddr user={user} />
            {user.addr ? <br /> : null}
            {user.phone} | <a href={`mailto:${user.email}`}>{user.email}</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
