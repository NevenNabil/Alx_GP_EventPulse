import React from "react"
// This line imports the React library, which is necessary for creating React components.
import Back from "../common/Back"
// This imports the `Back` component from the file located at `"../common/Back"`. 
// It seems like this component represents a section with a background image and some text or content overlaid on it.
import PriceCard from "../home/price/PriceCard"
// This imports the `PriceCard` component from the file located at `"../home/price/PriceCard"`. Presumably, 
// this component represents a card displaying pricing information or options.
import img from "../images/pricing.jpg"
// This imports an image file named `"pricing.jpg"` from the `"../images"` directory. The imported image is assigned 
// to the variable `img` and is likely used as the background image for the pricing section.
import "../home/price/price.css"
// This imports a CSS file named `"price.css"` from the `"../home/price"` directory. 
// This CSS file likely contains styles specific to the pricing section of the website.

const Pricing = () => { 
  //  This defines a functional component named `Pricing`.
  return (
    // This function returns JSX, which describes the structure of the component.
    <>
      <section className='pricing mb'>
        {/* This defines a section with the class name `'pricing'` and an additional class `'mb'`, presumably for margin-bottom.
         This section likely represents the pricing section of the website. */}
        <Back name='30 days money back guarantee' title='No Extra Fees. Friendly Support' cover={img} />
        {/* This renders the `Back` component, passing it props such as `name`, `title`, and `cover`. 
        These props likely contain information about the guarantee, fees, support, and the background image for the section. */}
        <div className='price container'>
          {/* This defines a `div` element with the class name `'price container'`. This `div` likely contains the `PriceCard` component or other pricing-related content.
 */}
          <PriceCard />
          {/* This renders the `PriceCard` component. It represents the card displaying pricing information or options. */}
        </div>
      </section>
    </>
  )
}
// 

export default Pricing
// This exports the `Pricing` component as the default export of this module, allowing it to be imported
//  and used in other parts of the application.
