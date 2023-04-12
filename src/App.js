import React, { useState } from 'react';
import RangeSlider from './components/RangeSlider';
import './components/Slider.css'
import "./style.css"; 
import BtnSlider from './components/BtnSlider';
import DetailsBlock from './components/scnd_section/DetailsBlock';
import SliderThird from './components/third_section/SliderThird';
import { photosData } from './components/first_second/photosData';
import LeftSectionContenc from './components/scnd_section/LeftSectionContenc';
import SectionFourth from './components/fourth_section/SectionFourth';
import SectionFifth from './components/fifth_section/SectionFifth';
import SectionSixth from './components/sixth_section/SectionSixth';
import Footer from './components/Footer/Footer';

const App = () => {
 
  const [isActive, setIsActive] = useState(false)
  const [valueCount, setValueCount] = useState(1)
  const [valueRange, setValueRange] = useState(12.5)
  const addSlide = (e) => {
    if(valueCount < 8) {
      setValueCount(prev => prev + 1)
      setValueRange(prev => prev + 12.5)
    }
    else{
      setValueCount(1)
      setValueRange(12.5)
    }
    
  }
  const sliceSlide = (e) => {
    
      setValueCount(prev => prev - 1)
      setValueRange(prev => prev - 12.5)
    
    if (valueCount <= 1){
      setValueCount(8)
      setValueRange(100)
    }
    
  }
    
  return (
    <>

    <section className='firstSection container-slider'>
      {photosData.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={valueCount === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/images/image${index + 1}.jpg`} 
                        />
                    </div>
                )
                
            })}
            
            <header>
            
            
            {isActive 
              ?
              <div className='header'>
                <div onClick={() => setIsActive(prev => !prev)} className='close_menu'>
                  <span className='frst_elem'>|</span>
                  <span className='sec_elem'>|</span>
                </div>
                <div className='logomain'>trppd _</div>
                <ul className='header_left'>
                    <li>Home</li>
                    <li>Recommendation</li>
                    <li>Explore</li>
                    <li>Help</li>
                    <li>About Us</li>
                </ul>
              </div>
              :
              <div onClick={() => setIsActive(prev => !prev)} className={isActive ? 'burger_none' : 'burger'}>
                <span className='before_span'></span>
                <span className='main_span'></span>
                <span className='after_span'></span>
              </div>
            }
          </header>
          <div className='container_position'>
              <div className='upper_header'>
                
                <ul className='logo_upper_menu upp_pos'>
                  <li>My Collection</li>
                  <li>|</li>
                  <li className='user'>
                    <p>Galih Pambudi</p>
                    <div className='account'></div>
                  </li>
  
                </ul>
              </div>
              <div className='heroBlock'>
                <div className='heroBlockTitle'>
                  <h1>The Walchen Lake</h1>
                  <p>One of deepest and largest alpine lakes in Germany and one the the best outdoors place that you never imagine before</p>
                  <button>Read More</button>
                </div>
                
              </div>
              <div className='slider_bottom_block'>
                
                  <div className='btns_clicked'>
                    <BtnSlider className='prev_btn' moveSlide={addSlide} direction={"prev"}/>
                    <BtnSlider className='next_btn' moveSlide={sliceSlide} direction={"next"} />
                  </div>
                  <RangeSlider
                    value={valueRange}
                  />
                  <div className='countSlider'>{valueCount}/8</div>
                
                
              </div>
              
             
             
            </div>
      
    </section>



    <section className='second_section'>
      <LeftSectionContenc />
      <div className='container_second'>
          <DetailsBlock/>
      </div>
    </section>


    <section className='third_section container_slider_third_section'>
     <SliderThird valueRange={valueRange} valueCount={valueCount} addSlide={addSlide} sliceSlide={sliceSlide} />
    </section>
    <SectionFourth />
    <SectionFifth />
    <SectionSixth />
    <Footer/>


    
      
    </>
  );
};

export default App;