import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"
// `import React from "react";`: This imports the React library, which is necessary for writing JSX and creating React components.
// `import Back from "../common/Back";`: This imports a component named `Back` from the file located at `"../common/Back"`.
// `import Heading from "../common/Heading";`: This imports a component named `Heading` from the file located at `"../common/Heading"`.
// `import img from "../images/about.jpg";`: This imports an image file named `about.jpg` from the `../images` directory and assigns it to the variable `img`.
// `import "./about.css";`: This imports the CSS file `about.css` to apply specific styles to this component.

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}
// `const About = () => { ... }`: This declares a functional component named `About` using arrow function syntax.
// `<section className='about'> ... </section>`: This defines a section with the class name `'about'`.
// `<Back name='About Us' title='About Us - Who We Are?' cover={img} />`: This renders the `Back` component, passing it props such as `name`, `title`, and `cover`.
// `<div className='container flex mtop'> ... </div>`: This defines a `<div>` element with class names `'container'`, `'flex'`, and `'mtop'`.
// `<Heading title='Our Agency Story' subtitle='Check out our company story and work process' />`: This renders the `Heading` component, passing it props such as title and `subtitle`.
// `<p>...</p>`: These paragraphs contain placeholder text.
// `<button className='btn2'>More About Us</button>`: This renders a button with the class name `'btn2'`.
// `<img src='./immio.jpg' alt='' />`: This renders an image with the source `'./immio.jpg'` and an empty alt attribute.

export default About
// This exports the `About` component as the default export of this file, allowing other files to import and use it.
