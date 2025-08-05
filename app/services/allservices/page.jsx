import React from "react";

export const metadata = {
  title: {
    absolute: 'all services files is here',
  },
}
 
// Output: <title>About</title>
export default function page() {
  return (
    <div>
      <h1>all services files is here</h1>
      <ul>
        <li>WEB</li>
        <li>APP</li>
        <li>AI</li>
        <li>DATA SCIENCE</li>
        <li>CYBERSECURITY</li>
      </ul>
    </div>
  );
}
