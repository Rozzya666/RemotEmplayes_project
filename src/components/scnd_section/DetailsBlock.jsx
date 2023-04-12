import React from 'react'
import { moreInfo } from '../moreinfo'
import '../../style.css'
import '../Slider.css'
import ChildDetail from './ChildDetail'

export default function DetailsBlock() {
  
  return (
    <div className='blockInfo'>
              {moreInfo.map((box, idx) => {
                return (
                  <ChildDetail key={idx + 1} box={box}/>
                )
              })}
            </div>
  )
}
