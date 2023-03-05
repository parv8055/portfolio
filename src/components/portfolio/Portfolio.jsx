import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/imdb.png'
import IMG2 from '../../assets/lyriks.png'
import IMG6 from '../../assets/tube.png'
import IMG9 from '../../assets/Amazon.png'
import IMG11 from '../../assets/seenunseen.png'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio__container'>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG11} alt="" />
                    </div>
                    <h3>seenUnseen(ecommerce project)</h3>
                    <div className="portfolio__item-cta">
                        <a href="" className='btn' target='_blank'>Github</a>
                        <a href="https://seen-unseen.vercel.app/" className='btn btn-primary'
                            target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG9} alt="" />
                    </div>
                    <h3>Amazon(nextjs)</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/parv8055/amazon" className='btn' target='_blank'>Github</a>
                        <a href="https://amazon-six-red.vercel.app/" className='btn btn-primary'
                            target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>imdb(Reactjs)</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/parv8055/Imdb" className='btn' target='_blank'>Github</a>
                        <a href="https://imdb-lac.vercel.app/" className='btn btn-primary'
                            target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>lyriks(Reactjs)</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/parv8055/Lyriks" className='btn' target='_blank'>Github</a>
                        <a href="https://lyriks-chi.vercel.app/" className='btn btn-primary'
                            target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG6} alt="" />
                    </div>
                    <h3>Tube(Reactjs)</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/parv8055/Tube" className='btn' target='_blank'>Github</a>
                        <a href="https://tube-xi.vercel.app/" className='btn btn-primary'
                            target='_blank'>Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio