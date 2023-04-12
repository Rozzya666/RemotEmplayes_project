import React from 'react'
import { imagesFourth } from './imagesFourth'
import '../../style.css'
export default function SectionFourth() {
  return (
    <section className='fourth_section'>
      <div className='left_block_fourth_section'>
            <h5>Editor`s Pick</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, possimus consequatur? Ea expedita at culpa ad et, asperiores porro a!</p>
      </div>
      <div className='grid_box'>
        <ul className='first_ex'>
            <li>
                <img src={imagesFourth.url1} alt="" />
            </li>
            <li className='sec_li'>
                <img src={imagesFourth.url2}></img>
                <img src={imagesFourth.url3}></img>
            </li>
        </ul>
        <div className='second_ex'>
            <li>
                <img className='long_picture' src={imagesFourth.url4} alt=""  />
                <img className='small_picture' src={imagesFourth.url5} alt=""  />
            </li>
        </div>
      </div>
    </section>
  )
}
