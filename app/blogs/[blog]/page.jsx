import React from 'react'

export default async function page({params}) {
    console.log("params is ", await params);
    const { blog } = await params
  return (
    <div>
      <h1>this is blog { blog}</h1>
    </div>
  )
}
