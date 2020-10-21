import React from 'react';
import './style.scss';

import Character from '../../assets/home/character-home.svg';
import Icon from '@mdi/react';
import { mdiHome } from '@mdi/js';

function Home() {
    return (
        <section className="home normal-height">
            <div className="container flex">
                <div className="title">
                    <h1>
                        Mais que soluções tecnologicas na área de saúde,
                        <span> somos <b> CloudSaude. </b> </span>
                    </h1>
                </div>
                <div className="character">
                    <img src={Character} alt="character-home" height="300px" />
                </div>
            </div>
        </section>
    )
}

export default Home;