import React from "react"
// Imports the React library, which is necessary to define React components.
import img from "../images/pricing.jpg"
// Imports an image file named `pricing.jpg` from the `images` directory and assigns it to the variable `img`.
import Back from "../common/Back"
// Imports the `Back` component from the `common` directory, which is used for displaying a background image with a title.
import "./contact.css"
// Imports the CSS file `contact.css` for styling this component.

const Contact = () => 
// Defines a functional component named `Contact`.
{
  return (
    <>
      <section className='contact mb'>
        {/* Starts a section element with the class name `contact` and `mb` for margin bottom. */}
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        {/* Renders the `Back` component, passing props for the name, title, and cover image. */}
        <div className='container'>
          {/* Starts a div element with the class name `container`, used for styling purposes. */}
          <form className='shadow'>
            {/* Starts a form element with the class name `shadow`, which adds a shadow effect to the form. */}
            <h4>Fillup The Form</h4> <br />
            {/* Displays a heading "Fillup The Form". */}
            <div>
              <input type='text' placeholder='Name' />
              {/* Renders an input field for entering the name with a placeholder "Name". */}
              <input type='text' placeholder='Email' />
              {/* Renders an input field for entering the email with a placeholder "Email". */}
            </div>
            <input type='text' placeholder='Subject' />
            {/* Renders an input field for entering the subject with a placeholder "Subject". */}
            <textarea cols='30' rows='10'></textarea>
            {/* Renders a textarea for entering a message with 30 columns and 10 rows. */}
            <button>Submit Request</button>
            {/* Renders a button labeled "Submit Request". */}
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
// Exports the `Contact` component as the default export of the file.
