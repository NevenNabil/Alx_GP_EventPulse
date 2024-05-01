import React from "react"
// Imports the React library, necessary for creating React components.
import Heading from "../../common/Heading"
// Imports the `Heading` component from the file located at `"../../common/Heading"`.
//  This component likely represents a heading section with a title and subtitle.
import "./Featured.css"
// Imports the CSS file named `"Featured.css"` from the current directory. 
// This CSS file likely contains styles specific to the featured section.
import FeaturedCard from "./FeaturedCard"
// Imports the `FeaturedCard` component from the file located at `"./FeaturedCard"`. 
// This component likely represents individual cards for featured properties.

const Featured = () => {
  // Defines a functional component named `Featured`
  return (
    // Returns JSX, which describes the structure of the component.
    <>
      <section className='featured background'>
        {/* Defines a section with the class names `'featured'` and `'background'`.
         This section likely represents the featured section of the website and applies background styling. */}
        <div className='container'>
          {/* Defines a `div` element with the class name `'container'`. 
          This `div` is used to contain the content within the featured section. */}
          <Heading title='Featured Property Types' subtitle='Find All Type of Property.' />
          {/* Renders the `Heading` component, passing it props such as `title` and `subtitle`. 
          These props likely contain the title and subtitle text for the featured section. */}
          <FeaturedCard />
          {/* Renders the `FeaturedCard` component. 
          This component is responsible for displaying individual cards for featured properties. */}
        </div>
      </section>
    </>
  )
}

export default Featured
// Exports the `Featured` component as the default export of this module, 
// allowing it to be imported and used in other parts of the application.
