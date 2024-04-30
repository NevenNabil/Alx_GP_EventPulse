import React from "react"
//  Imports the React library, which is necessary for creating React components.
import img from "../images/services.jpg"
// Imports an image file named `"services.jpg"` from the `"../images"` directory.
//  This image will likely be used as the background image for the services section.
import Back from "../common/Back"
// Imports the `Back` component from the file located at `"../common/Back"`. This component probably
//  represents a section with a background image and some text or content overlaid on it, typically used for section headings.
import "../home/featured/Featured.css"
// Imports a CSS file named `"Featured.css"` from the `"../home/featured"` directory. 
// This CSS file likely contains styles specific to the featured section of the website.
import FeaturedCard from "../home/featured/FeaturedCard"
// Imports the `FeaturedCard` component from the file located at `"../home/featured/FeaturedCard"`. 
// This component presumably represents a card displaying featured content or services.

const Services = () => {
  // Defines a functional component named `Services`.
  return (
    // Returns JSX, which describes the structure of the component.
    <>
      <section className='services mb'>
        {/* Defines a section with the class name `'services'` and an additional class `'mb'`, 
        likely indicating margin-bottom. This section likely represents the services section of the website. */}
        <Back name='Services' title='Services -All Services' cover={img} />
        {/* Renders the `Back` component, passing it props such as `name`, `title`, and `cover`. 
        These props likely contain information about the services section, such as the title and the background image. */}
        <div className='featured container'>
          {/* Defines a `div` element with the class name `'featured container'`. This `div` likely contains the `FeaturedCard`
           component or other featured content related to services. */}
          <FeaturedCard />
          {/* Renders the `FeaturedCard` component. This component presumably represents a card displaying featured content or services. */}
        </div>
      </section>
    </>
  )
}

export default Services
// Exports the `Services` component as the default export of this module, 
// allowing it to be imported and used in other parts of the application.
