import React from 'react'
import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  Link,NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {

    let isActive = true;

    const clickHandler = (e)=>{
        resetLinks();
        let node = e.target.parentNode.parentNode
        node.className = 'headerListItem active';
    };

    function resetLinks()
    {
        let parent = document.getElementsByClassName('headerList')[0];
        for(var item of parent.childNodes)
        {
            item.className = 'headerListItem';
        }
    }


  return (
    <div className='headerList'>
      
            <div className='headerListItem active'>
            <Link to='/hotel' onClick={(e)=>clickHandler(e)}>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </Link>
          </div>
          <div className='headerListItem'>
            <Link to='/flight' onClick={(e)=>clickHandler(e)}>
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
            </Link>
          </div>
          <div className='headerListItem'>
          <Link to='/#' onClick={(e)=>clickHandler(e)}>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rental</span>
            </Link>
          </div>
          <div className='headerListItem'>
          <Link to='/attraction' onClick={(e)=>clickHandler(e)}>
            <FontAwesomeIcon icon={faBed} />
            <span>Attraction</span>
            </Link>
          </div>
          <div className='headerListItem'>
          <Link to='/#' onClick={(e)=>clickHandler(e)}>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
            </Link>
          </div>
        </div>
  )
}

export default Navigation