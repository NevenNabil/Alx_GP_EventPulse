import React from "react"
import { list } from "../../data/Data"
// Imports the `list` array from the `Data` file located at `"../../data/Data"`.
//  This array likely contains data about recent properties to be displayed in the recent card component.

const RecentCard = () => {
  // Defines a functional component named `RecentCard`.
  return (
    // Returns JSX, which describes the structure of the component.
    <>
      <div className='content grid3 mtop'>
      {/* Defines a `div` element with the class names `'content'`, `'grid3'`, and `'mtop'`. 
      // This `div` likely represents a container for the recent property cards and applies grid-based layout. */}
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val
          // Destructures the properties `cover`, `category`, `location`, `name`, `price`, and `type` from the current item `val` in the `list` array.
          return (
            <div className='box shadow' key={index}>
              {/* Defines a `div` element with the class names `'box'` and `'shadow'`, applying a shadow effect. 
              The `key` attribute is set to the `index` to uniquely identify each card. */}
              <div className='img'>
                {/* Defines a `div` element with the class name `'img'`, likely representing the container for the property image. */}
                <img src={cover} alt='' />
                {/* Renders an `img` element with the `src` attribute set to the `cover` image URL, displaying the property image. */}
              </div>
              <div className='text'>
                {/* Defines a `div` element with the class name `'text'`, representing the container for property text content. */}
                <div className='category flex'>
                  {/* Defines a `div` element with the class name `'text'`, representing the container for property text content. */}
                  {/* Defines a `div` element with the class names `'category'` and `'flex'`, 
                  likely representing the container for property category information. */}
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  {/* Renders a `span` element with a background color and text color determined by the `category` property of 
                  the property object. If the category is "For Sale", it sets greenish colors, otherwise orangish colors. */}
                  <i className='fa fa-heart'></i>
                  {/* Renders an icon element, likely representing a favorite or like button. */}
                </div>
                <h4>{name}</h4>
                {/* Renders the name of the property inside an `h4` element. */}
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
                {/* Renders the location of the property inside a `p` element, preceded by a location icon. */}
              </div>
              <div className='button flex'>
                {/* Defines a `div` element with the class names `'button'` and `'flex'`, likely representing the container for 
                property price and type information. */}
                <div>
                  <button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label>
                  {/* Renders a button element with the price of the property, followed by a label indicating "/sqft". */}
                </div>
                <span>{type}</span>
                {/* Renders the type of the property inside a `span` element. */}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
// Exports the `RecentCard` component as the default export of this module, allowing it to be imported 
// and used in other parts of the application.
