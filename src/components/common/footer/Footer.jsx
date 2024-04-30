import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"
// `import React from "react";`: This imports the React library, which is necessary for writing JSX and creating React components.
//  `{ footer }`: This imports the `footer` array from a data file located at `"../../data/Data"`. It presumably contains the data for the footer section.
// `"./footer.css"`: This imports the CSS file `footer.css` to apply specific styles to this component.

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section>
      {/* This section defines the footer contact section. It contains a title, a description, and a button to contact. 
      It's wrapped in a `<section>` with the class name `'footerContact'`. */}

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      {/* This section defines the footer itself. It contains a logo, a description, an email subscription form,
       and a list of footer links dynamically rendered from the `footer` array. */}
      <div className='legal'>
        <span>© 2021 RentUP. Designd By GorkCoder.</span>
      </div>
      {/* This section defines the legal information of the footer, such as copyright information and design attribution. */}
    </>
  )
};
// This closes the functional component and returns the JSX code.

export default Footer
// This exports the `Footer` component as the default export of this file, allowing other files to import and use it.
