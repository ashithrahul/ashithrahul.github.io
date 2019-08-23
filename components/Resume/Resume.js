import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import LazyLoad, { lazyload } from 'react-lazyload';
import { GENERAL_SKILLS, GENERAL_SKILLS_INITIAL, RESUME } from './Resume.constants';
import * as styles from './Resume.scss';

const Progression = ({ skill }) => (<div>
  <div className={styles.progressTitleWrapper}>
    <span>{skill.title}</span>
    <span>{skill.value}</span>
  </div>
  <div className={styles.progressRowWrapper}>
    <div style={{ width: skill.value }} className={styles.progressContent}>

    </div>
  </div>
</div>);


const Chart = () => {
  const [skills, updateSkills] = useState(GENERAL_SKILLS_INITIAL);
  useEffect(() => {
    updateSkills(GENERAL_SKILLS);
  }, []);
  return (<div className={styles.chartContainer}>
    <h3 className={styles.chartTitle}>general skills</h3>
    <div className={styles.chartWrapper}>
      {skills.map((skill) => (
        <Progression key={skill.title} skill={skill} />
      ))}
    </div>
  </div>);
};

const Resume = () => (
  <section id='resume' className={classNames(styles.mainSection, 'container')}>
    <h2 className={styles.title}>Resume<span className={styles.blinkCaret}>_</span></h2>
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
    <LazyLoad offset={-30}>
      <Chart />
    </LazyLoad>
  </section>
);

export default lazyload({
  once: true,
  offset: -30,
})(Resume);
