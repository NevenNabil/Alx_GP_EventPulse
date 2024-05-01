import React from "react"
import Heading from "../../common/Heading"
// Imports the `Heading` component from the file located at `"../../common/Heading"`. 
// This component likely represents a heading section with a title and subtitle.
import { team } from "../../data/Data"
// Imports the `team` array from the `Data` file located at `"../../data/Data"`. 
// This array likely contains data about team members to be displayed in the Team component.
import "./team.css"
// Imports the CSS file named `"team.css"` from the current directory. 
// This CSS file likely contains styles specific to the team section.

const Team = () => {
  // Defines a functional component named `Team`.
  return (
    <>
      <section className='team background'>
        {/* Defines a section with the class names `'team'` and `'background'`. 
        This section likely represents the team section of the website and applies background styling. */}
        <div className='container'>
          {/* Defines a `div` element with the class name `'container'`. 
          This `div` is used to contain the content within the team section. */}
          <Heading title='Our Featured Agents' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
          {/* These props likely contain the title and subtitle text for the team section. */}

          <div className='content mtop grid3'>
            {/* Defines a `div` element with the class names `'content'`, `'mtop'`, and `'grid3'`.
             This `div` likely represents a container for the team members' information and applies grid-based layout. */}
            {team.map((val, index) => (
              // Maps over the `team` array, rendering a box for each team member. 
              // It iterates over each object `val` in the array, along with its corresponding index.
              <div className='box' key={index}>
                {/* Defines a `div` element with the class name `'box'`. 
                This `div` represents a box containing information about a team member. The `key` attribute is set to the `index` to uniquely identify each box. */}
                <button className='btn3'>{val.list} Listings</button>
                {/* Renders a button element with the number of listings for the team member. */}
                <div className='details'>
                  {/* Defines a `div` element with the class name `'details'`. This `div` contains details about the team member */}
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    {/* Renders an `img` element with the `src` attribute set to the `cover` image URL of the team member. */}
                    <i className='fa-solid fa-circle-check'></i>
                    {/* Renders an icon element, presumably indicating the status of the team member. */}
                  </div>
                  <i className='fa fa-location-dot'></i>
                  <label>{val.address}</label>
                  {/* Renders the address of the team member inside a `label` element. */}
                  <h4>{val.name}</h4>
                  {/* Renders the name of the team member inside an `h4` element. */}

                  <ul>
                    {val.icon.map((icon, index) => (
                      // Maps over the `icon` array of each team member, rendering an icon for each attribute.
                      //  It iterates over each `icon` in the array, along with its corresponding index.
                      <li key={index}>{icon}</li>
                      // Renders a list item with the `icon` representing a particular attribute of the team member.
                    ))}
                  </ul>
                  <div className='button flex'>
                    {/* Defines a `div` element with the class names `'button'` and `'flex'`.
                     This `div` contains buttons for contacting the team member. */}
                    <button>
                      {/* Renders a button element for sending a message to the team member. */}
                      <i className='fa fa-envelope'></i>
                      Message
                    </button>
                    <button className='btn4'>
                      {/* Renders another button element, likely for making a phone call to the team member. */}
                      <i className='fa fa-phone-alt'></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
// Exports the `Team` component as the default export of this module, 
// allowing it to be imported and used in other parts of the application.
