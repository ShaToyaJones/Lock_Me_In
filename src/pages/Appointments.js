import React from "react";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";

const EventCalendar = require('react-event-calendar');

const events = [
    {
        start: '2015-07-20',
        end: '2015-07-02',
        eventClasses: 'optionalEvent',
        title: 'test event',
        description: 'This is a test description of an event',
    },
    {
        start: '2015-07-19',
        end: '2015-07-25',
        title: 'test event',
        description: 'This is a test description of an event',
        data: 'you can add what ever random data you may want to use later',
    },
];

<EventCalendar 
    month={7}
    year={2015}
    events={events} 
    onEventClick={(target, eventData, day) => console.log(eventData) 
    />

// const Appointments = () =>

// var indents = [];
// for (var i = 0; i < this.props.level; i++) {
//   indents.push(<span className='indent' key={i}></span>);
// }
// return (
//    <div>
//     {indents}
//     "Some text value"
//    </div>
// );

// moment.locale('it')

// class Calendar extends React.Component {
//   static defaultProps = {
//     date: moment()
//   };
    
//   static propTypes = {
//     date: React.PropTypes.object.isRequired
//   };

//   constructor(props) {
//     super(props)

//     this.days = this.days.bind(this)
//   }

//   days() {
//     var days = []

//     moment.range(
//       moment(this.props.date).startOf('month').startOf('week'), 
//       moment(this.props.date).endOf('month').endOf('week')
//     ).by('days', (day) => {
//       let belongsToAsideMonth = !day.isSame(moment(this.props.date), 'month')
      
//       days.push(<li key={day.format('YYYYMMDD')} 
//     //   push a component that holds events for day passed through the date
//     // create event (kind of like a div)
//     // ***first div to have FIXED height and width and overflow hidden
//         // click event 
//     // div for month
//     // div for week
//     // div for day
//     // refer to days as events
//     // all boxes need to be the same size
//         // have a date place
//     // inside the days we want boxes
//         // we want to pull from database to pull the events
//     // 
//       className={"day" + (belongsToAsideMonth ? ' pale' : '')}>{day.format('D')}</li>)
//     })
    
//     return days;
//   }

//   dayHeaders() {
//     var dayHeaders = []

//     moment.range(
//       moment(this.props.date).startOf('week'), 
//       moment(this.props.date).endOf('week')
//     ).by('days', function(moment) {
//       dayHeaders.push(<li key={moment.format('YYYYMMDD')} className="dayHeader">{moment.format('dd')}</li>)
//     })
    
//     return dayHeaders;
//   }
    
//   render() {
//     return (
//       <div className="calendar">
//         <div className="goPreviousMonth">
//           <i className="icono-caretLeftCircle" onClick={this.props.onMonthDecrement} />
//         </div>
//         <p className="monthHeader"><input value={this.props.date} onChange={this.props.onDateChange} /> — {moment(this.props.date).format('MMMM YYYY')}</p>
//         <div className="goNextMonth">
//           <i className="icono-caretRightCircle" onClick={this.props.onMonthIncrement} />
//         </div>
//         <ul className="days">
//           {this.dayHeaders()}
//           {this.days()}
//         </ul>
//       </div>
//     );
//   }
// }

// var store = Redux.createStore((state = {date: '1977-02-13'}, action) => {
//   switch (action.type) {
//     case 'INCREMENT_MONTH':
//       return {date: moment(state.date).add(1, 'months')}
//     case 'DECREMENT_MONTH':
//       return {date: moment(state.date).subtract(1, 'months')}
//     case 'CHANGE_DATE':
//       console.log('CHANGE_DATE', action)
//       return {date: action['date']}
//     default:
//       return state
//   }
// })

// function render() {
//   ReactDOM.render(
//     <Calendar 
//       onMonthIncrement={() => store.dispatch({ type: 'INCREMENT_MONTH' })}
//       onMonthDecrement={() => store.dispatch({ type: 'DECREMENT_MONTH' })}
//       onDateChange={(e) => { store.dispatch({type: 'CHANGE_DATE', date: e.target.value}) }}
//       {...store.getState()} 
//     />, 
//     document.getElementById('application')
//   )
// }

// render()

// store.subscribe(render)

