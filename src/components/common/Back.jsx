import React from "react"
// This line imports the React library, which is necessary for writing JSX and creating React components.

const Back = ({ name, title, cover }) => {
  // This declares a functional component named `Back`. It accepts props `name`, `title`, 
  // and `cover` using object destructuring in the function parameter.
  return (
    <>
      <div className='back'>
        <div className='container'>
          <span>{name}</span>
          <h1>{title}</h1>
        </div>
        <img src={cover} alt='' />
      </div>
    </>
  )
}
// This is the JSX code returned by the component. It renders a `<div>` element with the class name `'back'`, containing another `<div>` 
// with the class name `'container'`. Inside the container, it renders a `<span>` element with the value of the `name` prop, and an `<h1>` element 
// with the value of the `title` prop. Below the container, it renders an `<img>` element with the `src` attribute set to the value of the `cover` prop.

export default Back
// This line exports the `Back` component as the default export of this file, allowing other files to import and use it.
