import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='Choose Your Events Pulse Package! Stay updated on the latest happenings with our tailored packages. Select the perfect plan for your needs and never miss out on the excitement. Lets get started!' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
