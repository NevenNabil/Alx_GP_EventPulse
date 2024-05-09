import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Featured Events Types' subtitle='Welcome To Event Manager Your ultimate Eevnt Planning Partiner.' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
