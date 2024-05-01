import React from "react"
import { price } from "../../data/Data"
// - This imports React library and specifically the `price` array from a file named 
// `Data.js` located in the `../../data/` directory relative to the current file.

const PriceCard = () => {
  // - Defines a functional component named `PriceCard`.
  return (
    <>
      <div className='content flex mtop'>
        {/* - Returns JSX code representing the structure of the component.
- The code defines a `<div>` element with class names `content`, `flex`, and `mtop`. */}
        {price.map((item, index) => (
          <div className='box shadow' key={index}>
            {/* - Maps over each item in the `price` array and renders a `<div>` element with class names `box` and `shadow` for each item. */}
            <div className='topbtn'>
              <button className='btn3'>{item.best}</button>
            </div>
            {/* - Renders a `<div>` with class name `topbtn` containing a `<button>` element with class name `btn3`.
             The button text is taken from the `best` property of each `item` in the `price` array. */}
            <h3>{item.plan}</h3>
            {/* - Renders an `<h3>` element displaying the `plan` property of each `item` in the `price` array. */}
            <h1>
              <span>$</span>
              {item.price}
            </h1>
            {/* - Renders an `<h1>` element containing a dollar sign (`$`) followed by 
            the `price` property of each `item` in the `price` array. */}
            <p>{item.ptext}</p>

            <ul>
              {item.list.map((val) => {
                const { icon, text, change } = val
                return (
                  <li>
                    <label
                      style={{
                        background: change === "color" ? "#dc35451f" : "#27ae601f",
                        color: change === "color" ? "#dc3848" : "#27ae60",
                      }}
                    >
                      {icon}
                    </label>
                    <p>{text}</p>
                    {/* - Renders a `<p>` element displaying the `ptext` property of each `item` in the `price` array. */}
                  </li>
                )
              })}
            </ul>
            {/* - Maps over the `list` array of each `item` in the `price` array and renders an `<li>` element for each item.
- Each `<li>` contains a `<label>` element with a background and text color based on the `change` property of each item,
 and a `<p>` element displaying the `text` property. */}
            <button
              className='btn5'
              style={{
                background: item.plan === "Standard" ? "#27ae60" : "#fff",
                color: item.plan === "Standard" ? "#fff" : "#27ae60",
              }}
            >
              Start {item.plan}
            </button>
            {/* - Renders a `<button>` element with class name `btn5`.
- The button's background and text color are determined based on the `plan` property of each `item` in the `price` array.
- The button text is "Start" followed by the `plan` property of each `item`. */}
          </div>
        ))}
        {/* - Closes the `map` function. */}
      </div>
    </>
  )
  // - Closes the `<div>` and fragment (`<>`) opened at the beginning of the component.
// - Closes the return statement of the component.
}

export default PriceCard
// - Exports the `PriceCard` component as the default export from this file,
//  making it available for use in other parts of the application.
