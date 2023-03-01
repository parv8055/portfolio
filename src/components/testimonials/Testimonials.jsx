import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className='container testimonials__container'
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide className='testimonial'>
                    <div className="client__avatar">
                        <img src={AVT1} alt="" />
                    </div>
                    <h5 className='client__name'>Tina Snow</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto fugiat quae dignissimos nihil qui officiis ratione
                        illo sunt aperiam expedita hic, voluptatum
                        distinctio impedit cum corrupti quis aspernatur! Molestiae, unde?
                    </small>
                </SwiperSlide>
                <SwiperSlide className='testimonial'>
                    <div className="client__avatar">
                        <img src={AVT2} alt="" />
                    </div>
                    <h5 className='client__name'>Shatta Wale</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto fugiat quae dignissimos nihil qui officiis ratione
                        illo sunt aperiam expedita hic, voluptatum
                        distinctio impedit cum corrupti quis aspernatur! Molestiae, unde?
                    </small>
                </SwiperSlide>
                <SwiperSlide className='testimonial'>
                    <div className="client__avatar">
                        <img src={AVT3} alt="" />
                    </div>
                    <h5 className='client__name'>Kwane Despite</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto fugiat quae dignissimos nihil qui officiis ratione
                        illo sunt aperiam expedita hic, voluptatum
                        distinctio impedit cum corrupti quis aspernatur! Molestiae, unde?
                    </small>
                </SwiperSlide>
                <SwiperSlide className='testimonial'>
                    <div className="client__avatar">
                        <img src={AVT4} alt="" />
                    </div>
                    <h5 className='client__name'>Ana McBrown</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto fugiat quae dignissimos nihil qui officiis ratione
                        illo sunt aperiam expedita hic, voluptatum
                        distinctio impedit cum corrupti quis aspernatur! Molestiae, unde?
                    </small>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Testimonials