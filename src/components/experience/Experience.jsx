import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What skills I Have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>React-Redux</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>

                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Material Ui</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>react-icons</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                            <h4>Node.js</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                            <h4>Express</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                            <h4>Mongodb</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Experience