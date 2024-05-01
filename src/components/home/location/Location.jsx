import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "./style.css"

const Location = () => {
  return (
    <>
      <section className='location padding'>
        {/* Defines a section with the class names `'location'` and `'padding'`. 
        This section likely represents the location section of the website and applies padding. */}
        <div className='container'>
          {/* Defines a `div` element with the class name `'container'`. This `div` is used to contain the content within the location section. */}
          <Heading title='Explore By Location' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
          {/* Renders the `Heading` component, passing it props such as `title` and `subtitle`. 
          These props likely contain the title and subtitle text for the location section. */}

          <div className='content grid3 mtop'>
            {/* Defines a `div` element with the class names `'content'`, `'grid3'`, and `'mtop'`. 
            This `div` likely represents a grid layout for displaying location items. */}
            {location.map((item, index) => (
              //  Maps over the `location` array, rendering location items. It iterates over each object `item` in the array,
              //  along with its corresponding index.
              <div className='box' key={index}>
                {/* Defines a `div` element with the class name `'box'`. These `div` elements likely represent individual location items. */}
                <img src={item.cover} alt='' />
                {/* Renders an `img` element with the `src` attribute set to the `cover` image URL of the location item. The `alt` attribute is empty,
                 indicating that there is no alternative text for the image. */}
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  {/* Renders an `h5` element containing the name of the location item. */}
                  <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                    {/* `<label>{item.Villas}</label>`, `<label>{item.Offices}</label>`, `<label>{item.Apartments}</label>`: Renders `label` elements 
                    containing information about the number of villas, offices, and apartments in the location item. */}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
// Exports the `Location` component as the default export of this module, 
// allowing it to be imported and used in other parts of the application.
