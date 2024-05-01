import React from "react"
import Heading from "../../common/Heading"
// - This line imports the `Heading` component from the relative path `"../../common/Heading"`.
//  It's likely a custom component used for rendering headings.
import "./price.css"
// - This line imports the CSS styles from the file `price.css` located in the same directory as the current component.
//  These styles will be applied to the component's markup.
import PriceCard from "./PriceCard"
// - This line imports the `PriceCard` component from the relative path `"./PriceCard"`.
//  It's likely another component used for rendering price-related content.

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}
// - This defines a functional React component named `Price`. Inside this component, it returns JSX code representing the structure of the component.
// - The component renders a `<section>` element with the class name `price` and `padding`.
// - Inside this section, there's a `<div>` element with the class name `container`.
// - Within the container, it renders a `Heading` component with a title and subtitle, likely indicating the purpose of the section.
// - It also renders a `PriceCard` component, which presumably displays different price packages.

export default Price
// - This line exports the `Price` component as the default export from this file, 
// making it available for use in other parts of the application.
