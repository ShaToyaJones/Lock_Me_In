import React from "react";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Events from'./Events';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Hero from "../components/Hero";

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
    <Hero backgroundImage="https://cdn.pixabay.com/photo/2014/10/15/16/42/hairdresser-489915_960_720.jpg">
    </Hero>
  </div>
);

export default MyCalendar;