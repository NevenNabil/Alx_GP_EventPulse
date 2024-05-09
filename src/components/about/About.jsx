import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Who We Are' subtitle='Check out our company story and work process' />

            <p>Are you ready to turn your dream event into a reality? Look no further! Event Manager is here to transform your vision into an unforgettable experience. Whether it’s a wedding, corporate gathering, birthday bash. or any special occasion, we’ve got you covered.</p>
            <p>Our team of seasoned event planners brings years of experience to the table. We know the ins and outs of event management. ensuring every detail is perfect.</p>
            <p>We are the masters of creativity! From unique themes to innovative decor, we’ll make your event stand out.</p>
            <p>Sit back, relax, and let us handle the logistics. We take care of ever-yttrg. so you can enjoy your event without worries.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./events.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
