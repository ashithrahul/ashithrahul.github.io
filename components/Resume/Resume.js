import React from 'react';
import classNames from 'classnames';
import { RESUME } from './Resume.constants';
import * as styles from './Resume.scss';

const Progression = () => (<div>ee</div>);


const Chart = () => (<div className={styles.chartContainer}>
  <h3 className={styles.chartTitle}>general skills</h3>
  <div className={styles.chartWrapper}>
    <div className={styles.chartLeft}>

    </div>
    <div className={styles.chartRight}>

    </div>
  </div>
</div>);

const Resume = () => (
  <section id='resume' className={classNames(styles.mainSection, 'container')}>
    <h2 className={styles.title}>Resume_</h2>
    {/*<p className={styles.description}>I am Junior Web developer able to build a Web presence from the ground up - from*/}
      {/*concept,*/}
      {/*navigation, layout and programming to UX and SEO. Skilled at writing well-designed,*/}
      {/*testable and efficient code using current best practices in Web development.*/}
      {/*Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web*/}
      {/*tools.</p>*/}
    {
      Object.entries(RESUME).map(([key, value]) => (
        <div className={styles.resumeList} key={key}>
          <h3 className={styles.listTitle}>{key}</h3>
          {value.map((details) => (
            <div key={details.year} className={styles.listBlock}>
              <p className={styles.listBlockTitle}>{details.title}</p>
              <p className={styles.listBlockDate}>{details.year}</p>
              <p>{details.role}</p>
            </div>
          ))}
        </div>
      ))
    }
  </section>
);

export default Resume;
