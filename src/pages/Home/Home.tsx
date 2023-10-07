import './Home.scss'
import React from 'react'
import Header from '../../components/Header'
import arrow from '../../assets/images/arrow.png'
import arrow2 from '../../assets/images/arrow2.png'
import character1 from '../../assets/images/Character1.png'
import character2 from '../../assets/images/Character2.png'
import character3 from '../../assets/images/Character3.png'
import character4 from '../../assets/images/Character4.png'

const Home = () => {
    return (
        <div>
            <Header />
            <div className="home">
                <div className="character">
                    <div className="box1"></div>
                    <img className='character1' src={character1} alt='3D Character'/>
                </div>
                <div className="character">
                <div className="box2"></div>
                    <img className='character2' src={character2} alt='3D Character'/>
                </div>
                <div className="rectangle__container">
                <div className="rectangle1"></div>
                <div className="rectangle2"></div>
                <div className="rectangle3"></div>
                </div>
                <div className="home__hero">
                <div className="image">
                    <img src={arrow2} alt='arrow'/>
                </div>
                <div className="home__hero__title">
                    MANAGE SOCIALS EASILY
                </div>
                <div className="image">
                    <img src={arrow} alt='arrow'/>
                </div>
                </div>
                <div className="character">
                <div className="box4"></div>
                    <img className='character4' src={character4} alt='3D Character'/>
                </div>
                <div className="character">
                <div className="box3"></div>
                    <img className='character3' src={character3} alt='3D Character'/>
                </div>
                <div className="home__fact">
                    <div className="home__fact__title">
                        CONNECT
                        </div>
                    <div className="home__fact__content">
                        Social Media is a great way to connect with friends and family, but it can also be a great way to connect with customers and clients.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home