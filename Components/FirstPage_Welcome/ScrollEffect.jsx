import React from 'react'
import ScrollingBackground from './Components/ScrollEffect/ScrollingBackground'
import Scrolling2 from './Components/ScrollEffect/Scrolling2'
import EmptyScrollforName from './Components/ScrollEffect/EmptyScrollforName'

const ScrollEffect = () => {
  return (
    <div className="p-5 -z-10 opacity-20">
        <ScrollingBackground />
        <Scrolling2 />
        <ScrollingBackground />
        <EmptyScrollforName/>
        <ScrollingBackground />
        <Scrolling2 />
        <ScrollingBackground />

      </div>
  )
}

export default ScrollEffect