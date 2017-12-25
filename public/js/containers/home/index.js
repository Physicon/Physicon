import React from 'react'

import Filter from '../../components/Filter'
import Courseslist from '../../components/Courseslist'
import Switch from '../../components/Switch'

const Home = () => {
    return (
        <div className="home">
            <div className="home__top">
                <h1 className="home__title">Витрина</h1>
                <Switch />
            </div>
            <Filter/>
            <Courseslist/>
        </div>
    )
};

export default Home