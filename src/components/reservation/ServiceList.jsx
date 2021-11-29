import React from 'react';
import ServiceCard from './ServiceCard';
import "./ServiceList.css"

const ServiceList = ({roomList}) => {    
    
    return (
        <section>
            {roomList.map(room => (
                <ServiceCard room={room} />           
            ))}       
        </section>
    );
};

export default ServiceList;

