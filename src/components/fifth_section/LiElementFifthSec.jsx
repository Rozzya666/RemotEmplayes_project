import React from 'react'
import '../../style.css'
export default function LiElementFifthSec({li}) {
  return (
    <li className='li_elem_fifth_section'>
        <div className='title_block_fifth_section'>
            <div className='maintext'>
                <h2>{li.title}</h2>
                <h3>{li.from}</h3>
            </div>
            <p>{li.describe}</p>
            <p>{li.readMore}</p>
            <button>Read More</button>
        </div>
        <img src={li.picture} alt="" />
    </li>
  )
}
