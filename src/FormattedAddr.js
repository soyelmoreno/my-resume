import React from 'react';

/**
 * Takes a string (addr) and formats a certain part (sub) by wrapping it in
 * a tag that you provide (tag). If both sub and tag are not defined then it
 * just returns the addr string.
 * @param add <String>
 * @param sub <String>
 * @param tag <String>
 */
function formatAddr(addr, sub, tag) {
  let output = addr;
  const CustomTag = `${tag}`;
  if (sub && tag) {
    let parts = addr.split(sub); //[ '2309 N 193', ' St., Shoreline, WA 98133' ]
    output = [
      <span key="1">{parts[0]}</span>,
      <CustomTag key="2">{sub}</CustomTag>,
      <span key="3">{parts[1]}</span>,
    ];
  }
  return output;
}

// @params user <Object> The user object, with these optional strings
// @params addr <String> optional The unformatted string
// @params addrhtml <Object> optional Object with these keys
//   sub <String> The substring you want wrapped in a tag
//   tag <String> The HTML tag
const FormattedAddr = function (props) {
  let output = null;
  let user = props.user;
  if (user.addr) {
    output = user.addr;
    if (user.addrhtml) {
      output = formatAddr(user.addr, user.addrhtml.sub, user.addrhtml.tag);
    }
  }
  return output;
};

export default FormattedAddr;
