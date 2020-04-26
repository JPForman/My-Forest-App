import React, { useState }  from 'react';
import Calendar from './Calendar';
import Key from './Key';
import keyHole from '../img/keyhole.png';

//style sheets
import '../css/myForest.css'

function MyForest() {


  //Calendar Display Toggler
  const [calendarDisplay, setCalendarDisplay] = useState('none');

  function hideCalendar() {
    if (calendarDisplay === 'block') {
      setCalendarDisplay('none'); }
      else if(calendarDisplay === 'none') {
        setCalendarDisplay('block');
      }
    }


    // Key Display Toggler
    const [keyDisplay, setkeyDisplay] = useState('none');

    function ToggleKey() {
      if (keyDisplay === 'block') {
        setkeyDisplay('none'); }
        else if(keyDisplay === 'none') {
          setkeyDisplay('block');
        }
      }
    
    return (
      <div className='myForest'>

        <div className='sky'></div>
        <div className='sun'></div>
        <div className='ground'></div>
        <div className="mountain" onClick={hideCalendar}></div>

        <div className='calendarReact' style={{display: `${calendarDisplay}`}}>
          <Calendar className='calendar' />
        </div>

        <a onClick={ToggleKey} className='keyHoleDiv'>
          <img className='keyHole' src={keyHole}></img>
        </a>

        <div className='keyDiv' style={{display: `${keyDisplay}`}}>
          <Key />
        </div>

      </div>
    );
}

export default MyForest; 


{/* <div className='treeSet'>
<TreeSet habitEventList={habitEventList}/>
</div>

<div className='grassSet'>
<GrassSet habitEventList={habitEventList}/>
</div>

<div className='flowerSet'>
<FlowerSet habitEventList={habitEventList}/>
</div> */}