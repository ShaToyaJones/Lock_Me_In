import React from "react";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Events from'./Events';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment);

const MyCalendar = props => (
  <div>
    <BigCalendar
      events={Events}
      startAccessor='start'
      endAccessor='end'
      titleAccessor='title'
      descriptionAccessor='desc'
    />
  </div>
);

export default MyCalendar;