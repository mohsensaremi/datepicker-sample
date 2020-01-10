import React from 'react';
import './App.css';
import Sample from './Sample';
import Calendar from './datepicker/src/containers/Calendar';
import Day from './datepicker/src/containers/Day';
import CalendarRange from './datepicker/src/containers/CalendarRange';
import DayRange from './datepicker/src/containers/DayRange';

function App() {
    return (
        <div className="App">
            <Sample
                {...{
                    CalendarComponent: Calendar,
                    CalendarComponentProps: {months: 1},
                    DayComponent: Day,
                    isRange: false,
                    title: "Simple Datepicker",
                }}
            />
            <Sample
                {...{
                    CalendarComponent: CalendarRange,
                    CalendarComponentProps: {months: 2},
                    DayComponent: DayRange,
                    isRange: true,
                    title: "Range picker 2 months",
                }}
            />
            <Sample
                {...{
                    CalendarComponent: CalendarRange,
                    CalendarComponentProps: {months: 3},
                    DayComponent: DayRange,
                    isRange: true,
                    title: "Range picker 3 months",
                }}
            />
        </div>
    );
}

export default App;
