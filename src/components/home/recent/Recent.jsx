import React from "react"
// Imports the React library, necessary for creating React components.
import Heading from "../../common/Heading"
//  Imports the `Heading` component from the file located at `"../../common/Heading"`. 
// This component likely represents a heading section with a title and subtitle.
import "./recent.css"
// Imports the CSS file named `"recent.css"` from the current directory. 
// This CSS file likely contains styles specific to the recent section.
import RecentCard from "./RecentCard"
// This component presumably represents a card displaying information about a recently listed property.

const Recent = () => {
  // Defines a functional component named `Recent`.
  return (
    <>
      <section className='recent padding'>
        {/* Defines a section with the class name `'recent'` and an additional class `'padding'`. 
        This section likely represents the recent properties section of the website and adds padding. */}
        <div className='container'>
          {/* Defines a `div` element with the class name `'container'`. 
          This `div` is used to contain the content within the recent properties section. */}
          <Heading title='Recent Property Listed' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
          {/* These props likely contain the title and subtitle text for the recent properties section. */}
          <RecentCard />
          {/* Renders the `RecentCard` component. This component presumably represents a card displaying information
           about a recently listed property. */}
        </div>
      </section>
    </>
  )
}

export default Recent
// Exports the `Recent` component as the default export of this module, allowing it to be imported and used in other parts of the application.