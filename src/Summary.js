import React from 'react';

// A small function component
export default function Summary({ summary }) {
  if (summary) {
    return <p>{summary}</p>;
  }
  return null;
}
