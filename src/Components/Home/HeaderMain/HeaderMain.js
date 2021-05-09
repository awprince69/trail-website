import React from 'react';
import './HeaderMain.css'
import TypewriterComponent from 'typewriter-effect';
const HeaderMain = () => {
    return (
        <main style={{height:'600px',width:'99%'}} className='row d-flex align-items-center'>
        <div className="col-md-4 offset-md-1">
            <h1 style={{color:'#3A4256',marginLeft:'10px'}}>Your New Smile <br/> Starts Here</h1>
            <p className='text-secondary type-text'>
            <TypewriterComponent
                                options={{
                                    strings: ['Join with us'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
            </p>
        </div>
        <div className="col-md-6 headerMain" style={{marginLeft:'6px'}}>
            <div className='headerMain-media'>
                <img  src='https://images.prismic.io/ueno-www/ec540bbd-bb41-4e3b-a09c-f8712b8a83a7_uber-poster.jpg?auto=compress,format' alt="" width='100%'/>
            </div>
        </div>
    </main>
    );
};

export default HeaderMain;