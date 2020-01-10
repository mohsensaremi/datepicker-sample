import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DatePickerContextProvider from './datepicker/src/context/DatePickerContextProvider';
import JalaliUtils from "@date-io/jalaali";
import jMoment from "moment-jalaali";
import './datepicker/src/styles/style.css';

jMoment.loadPersian({dialect: "persian-modern"});

ReactDOM.render((
    <DatePickerContextProvider adapter={JalaliUtils}>
        <App/>
    </DatePickerContextProvider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
