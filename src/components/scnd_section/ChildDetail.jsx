import React, { useState } from 'react'
import '../../style.css'
export default function ChildDetail({box}) {
    const [isActive, setIsActive] = useState(false)
  return (
    <div className='box'>
        <img src={box.picture}></img>
        <h2>{box.title}</h2>
        <h3>{box.from}</h3>
        <h6>{box.describe}</h6>
        <button onClick={() => setIsActive(prev => !prev)}>{isActive ? 'Hide Information' : 'Read More'}</button>
        <div className='moredetails'>
          {isActive && box.readMore}
        </div>            
    </div>
  )
}
