import React from "react";

function ShowDate(){
    const currentDate = new Date();
    const dateOptions =  {weekday: 'long', month: 'long', day: 'numeric'};
    const formattedDate = currentDate.toLocaleDateString('en-GB', dateOptions);

    return (
        <div>
            <h4>{formattedDate}</h4>

        </div>
    )
    
}export default ShowDate;