import React from 'react'

export default async function File({params}) {
    console.log("params is ", await params);
    const { filepath } = await params
    console.log("filepath is ", filepath);

  return (
    <div>
      <h1>file is here /{filepath.join("/")}</h1>
    </div>
  )
}
