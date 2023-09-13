import './Home.scss'
import React from 'react'
import Header from '../../components/Header'

const Home = () => {
    return (
        <div>
            <Header />
            <div className="home">
                <div className="home__title">
                    MANAGE SOCIALS EASILY
                </div>
            </div>
        </div>
    )
}

export default Home