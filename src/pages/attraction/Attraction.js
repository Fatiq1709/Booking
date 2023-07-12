import React from 'react'
import './attraction.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark,  } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Attraction = () => {
  
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg',
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5395bf36e4b08d48e3de15c9/1631191778843-4ZX1BQUHKS7FTDS45AKI/pexels-gajendra-bhati-3145426.jpg',
    },
    {
      src: 'https://images.pexels.com/photos/15193546/pexels-photo-15193546.jpeg?cs=srgb&dl=pexels-artem-yellow-15193546.jpg&fm=jpg',
    },
    {
      src: 'https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?cs=srgb&dl=pexels-chris-molloy-1308940.jpg&fm=jpg',
    },
    {
      src: 'https://images.pexels.com/photos/534757/pexels-photo-534757.jpeg?cs=srgb&dl=pexels-kai-pilger-534757.jpg&fm=jpg',
    },
    {
      src: 'https://images.pexels.com/photos/165799/pexels-photo-165799.jpeg',
    },
    {
      src: 'https://web.izi.travel/sites/default/files/pexels-ronald-pang-4392569.jpg',
    },
    {
      src: 'https://images.pexels.com/photos/783683/pexels-photo-783683.jpeg?cs=srgb&dl=pexels-belle-co-783683.jpg&fm=jpg',
    },
    {
      src: 'https://images.pexels.com/photos/3076104/pexels-photo-3076104.jpeg?cs=srgb&dl=pexels-bui-howard-3076104.jpg&fm=jpg',
    },
    {
      src: 'https://images.pexels.com/photos/12887713/pexels-photo-12887713.jpeg?cs=srgb&dl=pexels-paparazzi-ratzfatzzi-12887713.jpg&fm=jpg',
    },
    {
      src: 'https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?cs=srgb&dl=pexels-alex-azabache-3757144.jpg&fm=jpg',
    },
    {
      src: 'https://images.pexels.com/photos/2611104/pexels-photo-2611104.jpeg?cs=srgb&dl=pexels-antone-adi-2611104.jpg&fm=jpg',
    },
  ];

  const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) =>{
    let newSliderNumber;

    if(direction === 'l'){
      newSliderNumber = slideNumber === 0 ? 5 : slideNumber-1
    }
    else{
      newSliderNumber = slideNumber === 5 ? 0 : slideNumber+1
    }
    setSlideNumber(newSliderNumber)
  }
  return (
    
    <div>
      <Navbar/>
      <Header type ='list'/>
      <div className='hotelContainer'>
        {open && <div className='slider'>
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove('l')}/>
          <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove('r')}/>
        </div>}
        <div className='hotelWrapper'>
          
          <h1 className='hotelTitle'>Attractions, activities and experiences</h1>
          <div className='hotelAddress'>
            
            <span>Discover new and experiences to much your interest and travel style</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className='hotelImages'>
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt='' className='hotelImg'/>             
            </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsTexts'>
            <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className='hotelDetailsPrice'>
            <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Attraction