import React from 'react';

const ServiceCard = ({ service }) => {
    const { img, title, description } = service
    return (
        <div className='col-md-6 service-card mt-5'>
            <div className='service-img'>
                <img  src={img} alt="" />
            </div>
            <div className='mt-4'>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default ServiceCard;