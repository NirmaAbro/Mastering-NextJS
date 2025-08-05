import React from 'react'

export default async function Commit({params}) {
    console.log("params is ", await params);
    const { blog , commit } = await params;
    console.log("blog and commit is ", blog, commit);
  return (
    <div>
      <h1>this is blog { blog} and commit {commit}</h1>
    </div>
  )
}
