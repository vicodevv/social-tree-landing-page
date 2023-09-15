import './Home.scss'
import React from 'react'
import Header from '../../components/Header'
import arrow from '../../assets/images/arrow.png'
import arrow2 from '../../assets/images/arrow2.png'
import character1 from '../../assets/images/Character1.png'

const Home = () => {
    return (
        <div>
            <Header />
            <div className="home">
                <div className="character">
                    <img className='character1' src={character1} alt='3D Character'/>
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