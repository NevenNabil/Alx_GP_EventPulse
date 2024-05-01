import React from "react"
import { featured } from "../../data/Data"

const FeaturedCard = () => {
  return (
    <>
      <div className='content grid5 mtop'>
        {/* Defines a `div` element with the class names `'content'`, `'grid5'`, and `'mtop'`. 
        This `div` likely represents a container for the featured property cards and applies grid-based layout.
 */}
        {featured.map((items, index) => (
          // Maps over the `featured` array, rendering a card for each featured property. 
          // It iterates over each object `items` in the array, along with its corresponding index.
          <div className='box' key={index}>
            {/* Defines a `div` element with the class name `'box'`. This `div` represents a box containing information about a featured property.
             The `key` attribute is set to the `index` to uniquely identify each box. */}
            <img src={items.cover} alt='' />
            {/* Renders an `img` element with the `src` attribute set to the `cover` image URL of the featured property. 
            The `alt` attribute is empty, indicating that there is no alternative text for the image. */}
            <h4>{items.name}</h4>
            {/* Renders an `h4` element containing the name of the featured property. */}
            <label>{items.total}</label>
            {/* Renders a `label` element containing the total number associated with the featured property. */}
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard
// Exports the `FeaturedCard` component as the default export of this module, 
// allowing it to be imported and used in other parts of the application.
