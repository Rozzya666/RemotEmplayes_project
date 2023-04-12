import React from 'react'
import '../../style.css'
import { moreInfo } from '../moreinfo'
import LiElementFifthSec from './LiElementFifthSec'
export default function SectionFifth() {
  return (
    <section className='fifth_section'>
        <div className='container_fifth_block'>
            <div>
                <h2>Sometimes and magic is fantastic...</h2>
                <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia et reiciendis modi tenetur, rem delectus laudantium vel explicabo voluptatibus. Aperiam saepe nemo fugiat sint laudantium.</h6>
            </div>
            <ul>
                {moreInfo.map((li, idx) => {
                    return <LiElementFifthSec key={idx} li={li} />
                })}
            </ul>
        </div>
    </section>
  )
}
