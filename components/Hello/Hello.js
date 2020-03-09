import React from 'react';
import classNames from 'classnames';
import * as styles from './Hello.scss';
import resume from '../../assets/resume.pdf';

const Hello = () => (
  <section id="hello" className={classNames(styles.mainSection, 'container')}>
    <h2 className={styles.title}>
Hi
      <span className={styles.blinkCaret}>_</span>
    </h2>
    <p className={styles.description}>
      I am a software developer based in
      Bengaluru, IND with a focus on JS and PHP.
      I currently work at Razorthink Technologiesas a Front end developer,
      where I mainly deal with creating components using ReactJS. Previously,
      I worked at Brahma Infotek Pvt, where I served as a member of the programming group of PHP team.
    </p>
    <p className={styles.description}>
I’m interested in the following:
      JS, Redux, Redux-saga, Webpack, MySql, React Native, Python, PHP, HTML5, CSS.
    </p>
    <a href={resume} target="_blank" className={styles.downloadBtn}>Download CV</a>
  </section>
);

export default Hello;
