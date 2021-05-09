import React from 'react';
import './services.css'
import img1 from '../../../images/img1.webp'
import img2 from '../../../images/body.webp'
import img3 from '../../../images/bike.webp'
import img4 from '../../../images/m.webp'
import ServiceCard from './ServiceCard/ServiceCard';
import Mobile from './Mobile/Mobile';

const Services = () => {
    const serviceData = [
        {
            img: img1,
            title: 'Dorsia',
            description: 'Branding,Product,Marketing'
        },
        {
            img: img2,
            title: 'ESPN',
            description: 'Branding,Product'
        },
        {
            img: img3,
            title: 'Hunter Tv',
            description: 'Development,Product,Marketing'
        },
        {
            img: img4,
            title: 'Computer Mania',
            description: 'Design,Branding,Product'
        },
    ]
    return (
        <section>
            <h1 className='mx-4'>Projects</h1>
            <div className='d-flex justify-content-center container' >
                <div className='row' style={{ marginLeft: '50px' }}>
                    {
                        serviceData.map(service => <ServiceCard service={service}></ServiceCard>)
                    }
                    <div className='col-md-6 service-card mt-5'>
                        <Mobile></Mobile>
                        <div className='mt-4'>
                            <h5>Tech</h5>
                            <p>Branding,Product</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;