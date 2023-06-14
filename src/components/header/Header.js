import React, { useEffect, useRef ,useState } from 'react'
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = ({type}) => {
  const datePickerRef = useRef();
  const [destination, setDestination] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
   const [openOptions, setOpenOptions] = useState(false);
   const [options,setOptions] = useState({
    adult:1,
    children:0,
    room:1,
   });

   const navigate = useNavigate()

   const handleOption = (name, operation) =>{
    setOptions(prev=>{return{
      ...prev, 
      [name]: operation === 'i'? options[name] +1 : options[name] -1,
    }});
   };

   const handleSearch = ()=>{
    if(!(destination==''))
    {
      navigate('/hotels', { state:{destination,date,options}});
    }
    else{
      toast.error("Fields can not be empty");
    }
    


   }

   useEffect(() => {
    const handleDatePicker = e => { if (datePickerRef.current && !datePickerRef.current.contains(e.target)) setOpenDate(false) };
    document.body.addEventListener('click', handleDatePicker);
    return () => document.body.removeEventListener('click', handleDatePicker);
  }, [])


  return (
    <div className='header'>
      <div className={type === 'list' ? 'headerContainer listMode' : 'headerContainer'}>
        <Navigation/>
        { type !== 'list' &&
          <>
        <h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
        <p className='headerDesc'>
          Get rewardedfor your travels - unlock instant savings of 10% or more with a free Lamabooking account
        </p>
        <button className='headerBtn'>Sign in / Register</button>
        <div className='headerSearch'>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faBed} className='headerIcon' />
            <input type='text' placeholder='Where are you going?' className='headerSearchInput' onChange={e=>setDestination(e.target.value)}/>
          </div>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
            <span ref={datePickerRef} onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
            {openDate &&<DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className='date'
              minDate={new Date()}
            />}
          </div>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
            <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
             {openOptions &&<div className='options'>
              <div className='optionItem'>
                <span className='optionText'>Adult</span>
                <div className='optionCounter'>
                <button 
                disabled={options.adult <= 1}
                className='optionCounterButton' onClick={()=>handleOption('adult', 'd')}>-</button>
                <span className='optionCounterNumber'>{options.adult}</span>
                <button className='optionCounterButton' onClick={()=>handleOption('adult', 'i')}>+</button>
                </div>
              </div>
              <div className='optionItem'>
                <span className='optionText'>Children</span>
                <div className='optionCounter'>
                <button 
                disabled={options.children <= 0}
                className='optionCounterButton' onClick={()=>handleOption('children', 'd')}>-</button>
                <span className='optionCounterNumber'>{options.children}</span>
                <button className='optionCounterButton' onClick={()=>handleOption('children', 'i')}>+</button>
                </div>
              </div>
              <div className='optionItem'>
                <span className='optionText'>Room</span>
                <div className='optionCounter'>
                <button 
                disabled={options.room <= 1}
                className='optionCounterButton' onClick={()=>handleOption('room', 'd')}>-</button>
                <span className='optionCounterNumber'>{options.room}</span>
                <button className='optionCounterButton' onClick={()=>handleOption('room', 'i')}>+</button>
                </div>
              </div>
            </div>
            }
          </div>
          <div className='headerSearchItem'>
            <button className='headerBtn' onClick={handleSearch}>Search</button>
          </div>
        </div></>}
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Header