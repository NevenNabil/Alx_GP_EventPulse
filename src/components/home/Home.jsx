import React from "react"
// Imports the React library, necessary for creating React components.
import Awards from "./awards/Awards"
// Imports the `Awards` component from the file located at `"./awards/Awards"`. 
// This component likely represents a section displaying awards or achievements.
import Featured from "./featured/Featured"
// Imports the `Featured` component from the file located at `"./featured/Featured"`. 
// This component probably represents a section displaying featured content.
import Hero from "./hero/Hero"
// Imports the `Hero` component from the file located at `"./hero/Hero"`. 
// This component typically represents the hero section of the website, often containing a large banner or introductory content.
import Location from "./location/Location"
// This component may represent a section displaying location-related information or maps.
import Price from "./price/Price"
// This component likely represents a section displaying pricing information or options.
import Recent from "./recent/Recent"
// This component probably represents a section displaying recent updates or content.
import Team from "./team/Team"
// This component may represent a section displaying information about the team or staff.

const Home = () => {
  // Defines a functional component named `Home`.
  return (
    // Returns JSX, which describes the structure of the component.
    <>
      <Hero />
      <Featured />
      <Recent />
      <Awards />
      <Location />
      <Team />
      <Price />
    </>
    //  `<Hero />`, `<Featured />`, `<Recent />`, `<Awards />`, `<Location />`, `<Team />`, `<Price />`: Renders the imported components.
    //  Each component represents a different section of the home page and is included in the `Home` component's JSX structure.
  )
}

export default Home
// Exports the `Home` component as the default export of this module, allowing it to be imported and used in other parts of the application.
