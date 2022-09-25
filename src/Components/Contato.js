import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Andaluz | contato" description="Entre em contato!" />
      <img src={foto} alt="Máquina de Escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>contato@andaluz.group</li>
          <li>+55 27 9-9923-9423</li>
          <li>Vitória-ES</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
