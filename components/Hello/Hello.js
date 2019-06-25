import React from 'react';
import classNames from 'classnames';
import * as styles from './Hello.scss';
import resume from '../../assets/resume.pdf';

const Hello = () => (
  <section id='hello' className={classNames(styles.mainSection, 'container')}>
    <h2 className={styles.title}>Hi_</h2>
    <p className={styles.description}>I am a software engineer in Bengaluru, IND with a focus on JS + PHP.
      I currently work at Razorthink technology pvt as Front End Developer.where I create React Component.
      Previously,
      I worked at Brahma infotek pvt, where I Severed member of Programming group of PHP team.</p>
    <p className={styles.description}>I’m interested in the following:
      JS, Redux, Redux-saga, Webpack, MySql, React Native, Python, PHP, HTML5, CSS.</p>
    <a href={resume} target='_blank' className={styles.downloadBtn}>Download CV</a>
  </section>
);

export default Hello;
