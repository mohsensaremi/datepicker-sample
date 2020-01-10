import React, {useState} from 'react';

const Sample = (props) => {

    const {
        CalendarComponent,
        CalendarComponentProps,
        DayComponent,
        isRange,
        title,
    } = props;

    const [value, onChange] = useState(isRange ? [] : null);

    return (
        <div className={"sample"}>
            <h2>
                {title}
            </h2>
            <CalendarComponent
                value={value}
                onChange={onChange}
                DayComponent={DayComponent}
                {...CalendarComponentProps}
            />
        </div>
    );
};

export default Sample;
