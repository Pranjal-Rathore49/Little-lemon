import React, { useState } from "react";
const BookingForum= (props)=>{
    const[date,setDate]=useState('');
    const[time,setTime]=useState('');
    const[guests,setGuests]=useState('');
    const[occasion,setOccasion]=useState('');
    const handleSubmit=(e)=>{
     e.preventDefault();
     props.Submitform(e);
    }
    const handleChange=(e)=>{
    setDate(e);
    props.dispatch(e);
    }
    return(
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor="book-date">
                            Choose Date
                        </label>
                        <input id="book-date" value={data}onChange={(e)=>handleChange(e.target.value)} type='data'required/>
                    </div>
                    <div>
                    <label htmlFor="book-time">Choose Time :</label>
                    <select id="book-time" value={times} onChange={(e)=> setTime(e.target.value)}>
                    <option value=""> Select A Time</option>{
                        props.availableTimes.availableTimes.map(availableTimes =>{return <option key={availableTimes}>{availableTimes}</option>})
                    }
                    </select>
                    </div>
                    <div>
                        <label htmlFor="book-guests">Number of guests:</label>
                        <input id="book-guests" min='1' value={guests} onChange={(e)=>setGuests(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="book-occasion">Occasion:</label>
                       <select id="book-occasion" key={occasion} value={occasion}onChange={(e)=> setOccasion(e.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                       </select>
                    </div>
                    <div>
                        <button type="submit">Book Now</button>
                    </div>
                    <div className="btnRecieve">
                        <input aria-label="On Click" type="submit" value={"Make your Reservation"}></input>
                    </div>
                </fieldset>

                </form>
            </section>
        </header>
    );
}
export default  BookingForum;
