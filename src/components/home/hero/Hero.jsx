import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  // Defines a functional component named `Hero`.
  return (
    <>
      <section className='hero'>
        {/* Defines a section with the class name `'hero'`. This section likely represents the hero section of the website. */}
        <div className='container'>
          {/* Defines a `div` element with the class name `'container'`. 
          This `div` is used to contain the content within the hero section. */}
          <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' />
          {/* Renders the `Heading` component, passing it props such as `title` and `subtitle`. 
          These props likely contain the title and subtitle text for the hero section. */}

          <form className='flex'>
            {/* Defines a form element with the class name `'flex'`. This form likely contains inputs for searching properties. */}
            <div className='box'>
              {/* Defines a `div` element with the class name `'box'`. These `div` elements likely represent input fields or 
              labels within the form. */}
              <span>City/Street</span>
              <input type='text' placeholder='Location' />
              {/* Renders an input field of type text with a placeholder attribute set to 'Location'. 
              This input field is likely used for entering the location of the property. */}
            </div>
            <div className='box'>
              {/* Defines a `div` element with the class name `'box'`. 
              These `div` elements likely represent input fields or labels within the form. */}
              <span>Property Type</span>
              <input type='text' placeholder='Property Type' />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
              {/* Renders an `h4` element with the text 'Advance Filter'. 
              This is likely a label for an advanced filter section in the form. */}
            </div>
            <button className='btn1'>
              {/* Defines a button element with the class name `'btn1'`. This button likely triggers the property search. */}
              <i className='fa fa-search'></i>
              {/* Renders an icon element using Font Awesome's icon class `'fa fa-search'`. This icon represents a search icon. */}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
// Exports the `Hero` component as the default export of this module, 
// allowing it to be imported and used in other parts of the application.
