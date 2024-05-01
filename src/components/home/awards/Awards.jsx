import React from "react"
import Heading from "../../common/Heading"
import { awards } from "../../data/Data"
import "./awards.css"

const Awards = () => {
  // Defines a functional component named `Awards`.
  return (
    <>
      <section className='awards padding'>
        {/* Defines a section with the class names `'awards'` and `'padding'`. 
        This section likely represents the awards section of the website and applies padding. */}
        <div className='container'>
          <Heading title='Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services' subtitle='Our Awards' />
          {/* Renders the `Heading` component, passing it props such as `title` and `subtitle`. 
          These props likely contain the title and subtitle text for the awards section. */}

          <div className='content grid4 mtop'>
            {/* This `div` likely represents a container for the award items and applies grid-based layout. */}
            {awards.map((val, index) => (
              // Maps over the `awards` array, rendering a box for each award item. 
              // It iterates over each object `val` in the array, along with its corresponding index.
              <div className='box' key={index}>
                <div className='icon'>
                  {/* Defines a `div` element with the class name `'icon'`. This `div` contains the icon representing the award. */}
                  <span>{val.icon}</span>
                  {/* Renders a `span` element containing the icon for the award. */}
                </div>
                <h1>{val.num}</h1>
                {/* Renders an `h1` element containing the number of the award.
 */}
                <p>{val.name}</p>
                {/* Renders a `p` element containing the name of the award. */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Awards
// Closes the JSX tags and the `Awards` component definition.

//  `export default Awards;`: Exports the `Awards` component as the default export of this module, 
// allowing it to be imported and used in other parts of the application.
