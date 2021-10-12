import React, {useState} from "react";
import "flatpickr/dist/themes/dark.css";

import Flatpickr from "react-flatpickr";

const DatePickerLegal = (props) => {

    const [date, setDate] = useState(new Date());

    return (
        <>
            <div className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg">
            <Flatpickr
                    defaultValue={date}
                    value={date}
                    onChange={props.onChangeDateLegal}
                />
            </div>
        </>
    );
}

export default DatePickerLegal