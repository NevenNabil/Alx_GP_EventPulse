import React from "react"
// This line imports the React library, which is necessary for writing JSX and creating React components.

const Heading = ({ title, subtitle }) => {
  // This declares a functional component named `Heading`. It accepts props `title` and `subtitle` 
  // using object destructuring in the function parameter.
  return (
    <>
      <div className='heading'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  )
}
// This is the JSX code returned by the component. It renders a `<div>` element with the class name `'heading'`. 
// Inside the `<div>`, it renders an `<h1>` element with the value of the `title` prop, and a `<p>` element with the value of the `subtitle` prop.

export default Heading
// This line exports the `Heading` component as the default export of this file, allowing other files to import and use it.
