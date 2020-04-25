import React, { useState }  from 'react';
import Calendar from './Calendar';

//style sheets
import '../css/myForest.css'

function MyForest() {

  const [calendarDisplay, setCalendarDisplay] = useState('none');

  function hideCalendar() {
    if (calendarDisplay === 'block') {
      setCalendarDisplay('none'); }
      else if(calendarDisplay === 'none') {
        setCalendarDisplay('block');
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