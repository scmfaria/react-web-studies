import React from 'react';

import './style.scss';

import Card from '../../components/Card';

import acreditamosNoNovo from '../../assets/about-us/acreditamos-no-novo.svg';
import focamosNasPessoas from '../../assets/about-us/focamos-nas-pessoas.svg';
import formamosUmTime from '../../assets/about-us/formamos-um-time.svg';
import pensamosSimples from '../../assets/about-us/pensamos-simples.svg';
import prezamosPelaAparencia from '../../assets/about-us/prezamos-pela-transparencia.svg';
import somosInconformados from '../../assets/about-us/somos-inconformados.svg';

function AboutUs() {
    const aboutUsList = [
        {
            image: <img src={acreditamosNoNovo} alt="acreditamosNoNovo"></img>,
            title: 'acreditamos No Novo',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque culpa temporibus aut perspiciatis repellat sit accusamus quam officia adipisci! Aspernatur tempore corporis asperiores veritatis provident possimus sint inventore. Debitis, voluptates!',
        },
        {
            image: <img src={focamosNasPessoas} alt="focamosNasPessoas"></img>,
            title: 'focamos Nas Pessoas',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque culpa temporibus aut perspiciatis repellat sit accusamus quam officia adipisci! Aspernatur tempore corporis asperiores veritatis provident possimus sint inventore. Debitis, voluptates!',
        },
        {
            image: <img src={formamosUmTime} alt="formamosUmTime"></img>,
            title: 'formamos Um Time',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque culpa temporibus aut perspiciatis repellat sit accusamus quam officia adipisci! Aspernatur tempore corporis asperiores veritatis provident possimus sint inventore. Debitis, voluptates!',
        },
        {
            image: <img src={pensamosSimples} alt="pensamosSimples"></img>,
            title: 'pensamos Simples',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque culpa temporibus aut perspiciatis repellat sit accusamus quam officia adipisci! Aspernatur tempore corporis asperiores veritatis provident possimus sint inventore. Debitis, voluptates!',
        },
        {
            image: <img src={prezamosPelaAparencia} alt="prezamosPelaAparencia"></img>,
            title: 'prezamos Pela Aparencia',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque culpa temporibus aut perspiciatis repellat sit accusamus quam officia adipisci! Aspernatur tempore corporis asperiores veritatis provident possimus sint inventore. Debitis, voluptates!',
        },
        {
            image: <img src={somosInconformados} alt="somosInconformados"></img>,
            title: 'somos Inconformados',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque culpa temporibus aut perspiciatis repellat sit accusamus quam officia adipisci! Aspernatur tempore corporis asperiores veritatis provident possimus sint inventore. Debitis, voluptates!',
        },
    ];

    return (
        <section className="about-us">
            <h2 className="section-title">Sobre nós</h2>
            <div className="container">
                <Card aboutUsList={aboutUsList}/>
            </div>
        </section>
    )
}

export default AboutUs;