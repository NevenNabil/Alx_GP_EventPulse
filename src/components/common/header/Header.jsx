import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
// `import React, { useState } from "react";`: This imports the React library and the `useState` hook from the React package. The `useState` hook is used to manage state within functional components.
//  `"./header.css";`: This imports the CSS file `header.css` to apply specific styles to this component.
//  `{ nav }`: This imports the `nav` array from a data file located at `"../../data/Data"`.
//  `{ Link } from "react-router-dom";`: This imports the `Link` component from the `react-router-dom` package, which is used to create links within a React application.

const Header = () => {
  const [navList, setNavList] = useState(false)
  // This initializes a state variable `navList` using the `useState` hook. `navList` is set to `false` initially,
  //  and `setNavList` is the function used to update its value.

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <h4>
              <span>2</span> My List
            </h4>
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> Sign In
            </button>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}
// This is the JSX code that defines the header component. It consists of:
// - A header element with several nested elements.
// - Inside the header, there's a logo, navigation links, a button, and a toggle button.
// - The navigation links are generated dynamically using the `nav` array, and each link is wrapped inside a `Link` component provided by `react-router-dom`.
// - The toggle button controls the visibility of the navigation links based on the `navList` state variable.
// - When clicked, the toggle button toggles the value of `navList` between `true` and `false`, thereby controlling the visibility of the navigation links.

export default Header
// This exports the `Header` component as the default export of this file, allowing other files to import and use it.
