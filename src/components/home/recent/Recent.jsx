import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Upcoming Events' subtitle='Feel the heartbeat of every moment, let EventPulse guide you through the rhythm of unforgettable experiences.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
