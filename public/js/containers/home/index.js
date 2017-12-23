import React from 'react'

import Filter from '../../components/Filter'
import Courseslist from '../../components/Courseslist'

const Home = () => {
    return (
        <div className="home">
            <h1 className="home__title">Витрина</h1>
            <Filter/>
            <Courseslist/>
        </div>
    )
};

export default Home