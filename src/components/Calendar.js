import React, { Component, useState } from 'react';
import CalendarReact from 'react-calendar';
import '../css/calendar.css'



function Calendar() {

  return (
    <div>
      <div className="calendarReactDiv">
        <CalendarReact className="calendar"
        />
      </div>
    </div>
  );
}
export default Calendar; 