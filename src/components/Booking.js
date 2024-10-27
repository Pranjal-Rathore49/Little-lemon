import React from "react";
import BookingForum from "./BookingForm";
const Booking=(props)=>{
   return(
    <BookingForum availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.SubmitForm}/>
   );
};
export default Booking; 