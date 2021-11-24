import React from 'react';
import "./Booking.css"
import BookingCard from '../BookingCard/BookingCard'
import BookingResume from '../BookingResume/BookingResume'

const Booking = () =>{
    return(
        <div>
            <h1 className="title">Booking Process</h1>    
            <div className="container">
                
                <BookingCard />
                

                <BookingResume />

                

            </div>    
        </div>
    )
}

export default Booking;