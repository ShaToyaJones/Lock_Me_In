import React from "react";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const Events= [
    {
      'title': 'All Day Event',
      'allDay': true,
      'start': new Date(2018, 0, 1),
      'end': new Date(2018, 0, 2)
    },
    {
      'title': 'Long Event',
      'start': new Date(2018, 1, 7),
      'end': new Date(2018, 1, 10)
    },
    {
        'title': 'Final Presentation',
        'start': new Date(2018, 1, 1),
        'end': new Date(2018, 1, 1)
      },
    {
      'title': 'DTS STARTS',
      'start': new Date(2018, 2, 13, 0, 0, 0),
      'end': new Date(2018, 2, 20, 0, 0, 0)
    },
  
    {
      'title': 'DTS ENDS',
      'start': new Date(2018, 10, 6, 0, 0, 0),
      'end': new Date(2018, 10, 13, 0, 0, 0)
    },
  
    {
      'title': 'Some Event',
      'start': new Date(2018, 3, 9, 0, 0, 0),
      'end': new Date(2018, 3, 9, 0, 0, 0)
    },
    {
      'title': 'Conference',
      'start': new Date(2018, 3, 11),
      'end': new Date(2018, 3, 13),
      desc: 'Big conference for important people'
    },
    {
      'title': 'Meeting',
      'start': new Date(2018, 3, 12, 10, 30, 0, 0),
      'end': new Date(2018, 3, 12, 12, 30, 0, 0),
      desc: 'Pre-meeting meeting, to prepare for the meeting'
    },
    {
      'title': 'Lunch',
      'start':new Date(2018, 3, 12, 12, 0, 0, 0),
      'end': new Date(2018, 3, 12, 13, 0, 0, 0),
      'desc': 'Power lunch'
    },
    {
      'title': 'Meeting',
      'start':new Date(2018, 3, 12,14, 0, 0, 0),
      'end': new Date(2018, 3, 12,15, 0, 0, 0)
    },
    {
      'title': 'Happy Hour',
      'start':new Date(2018, 3, 12, 17, 0, 0, 0),
      'end': new Date(2018, 3, 12, 17, 30, 0, 0),
      desc: 'Most important meal of the day'
    },
    {
      'title': 'Dinner',
      'start':new Date(2018, 3, 12, 20, 0, 0, 0),
      'end': new Date(2018, 3, 12, 21, 0, 0, 0)
    },
    {
      'title': 'Birthday Party',
      'start':new Date(2018, 3, 13, 7, 0, 0),
      'end': new Date(2018, 3, 13, 10, 30, 0)
    },
    {
      'title': 'Late Night Event',
      'start':new Date(2018, 3, 17, 19, 30, 0),
      'end': new Date(2018, 3, 18, 2, 0, 0)
    },
    {
      'title': 'Multi-day Event',
      'start':new Date(2018, 3, 20, 19, 30, 0),
      'end': new Date(2018, 3, 22, 2, 0, 0)
    }
  ]

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