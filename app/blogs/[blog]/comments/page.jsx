import React from "react";

export default async function Comments({ params }) {
  console.log("params", await params);
  const { comments } = await params;
  console.log("comments", comments);

  return (
    <div>
      <h1>hey this is my first commit from {comments}</h1>
    </div>
  );
}
