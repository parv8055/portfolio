import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/imdb.png'
import IMG2 from '../../assets/lyriks.png'
import IMG3 from '../../assets/netmeds.png'
import IMG4 from '../../assets/spark.png'
import IMG5 from '../../assets/tindog.png'
import IMG6 from '../../assets/tube.png'
import IMG7 from '../../assets/cart.png'
import IMG8 from '../../assets/memories.png'
import IMG9 from '../../assets/Amazon.png'
import IMG10 from '../../assets/dashBoard.png'
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
                        <a href="https://github.com/parv8055/memoriesss" className='btn' target='_blank'>Github</a>
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
                        <a href="https://amaz.vercel.app/" className='btn btn-primary'
                            target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG10} alt="" />
                    </div>
                    <h3>Dashboard(React)</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/parv8055/Dashboard" className='btn' target='_blank'>Github</a>
                        <a href="https://dashbo.vercel.app/" className='btn btn-primary'
                            target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>imdb(React)</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/parv8055/Imdb" className='btn' target='_blank'>Github</a>
                        <a href="https://imdb-n.vercel.app/" className='btn btn-primary'
                            target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>lyriks(React)</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/parv8055/Lyriks" className='btn' target='_blank'>Github</a>
                        <a href="https://lyrikss.vercel.app/" className='btn btn-primary'
                            target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG6} alt="" />
                    </div>
                    <h3>Tube(React)</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/parv8055/Tube" className='btn' target='_blank'>Github</a>
                        <a href="https://uotube.vercel.app/" className='btn btn-primary'
                            target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG7} alt="" />
                    </div>
                    <h3>Cart(React)</h3>
                    <div className="portfolio__item-cta">
                        <a href="" className='btn' target='_blank'>Github</a>
                        <a href="https://caart.vercel.app/" className='btn btn-primary'
                            target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG3} alt="" />
                    </div>
                    <h3>Netmeds(HTML)</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/parv8055/Netmedsclone" className='btn' target='_blank'>Github</a>
                        <a href="https://netmedss.netlify.app/" className='btn btn-primary'
                            target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG4} alt="" />
                    </div>
                    <h3>Spark America(HTML)</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/parv8055/sparkamerica-clone" className='btn' target='_blank'>Github</a>
                        <a href="https://sparkamericaa.netlify.app/" className='btn btn-primary'
                            target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG5} alt="" />
                    </div>
                    <h3>Tindog(HTML)</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/parv8055/tindog" className='btn' target='_blank'>Github</a>
                        <a href="https://tindogggg.netlify.app/" className='btn btn-primary'
                            target='_blank'>Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio