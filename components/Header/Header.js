import React from 'react';
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import * as styles from './Header.scss';
import dp from '../../assets/img_avatar2.jpg';

const Header = () => (
  <div className={styles.wrapper}>
    <div className="container">
      <div className={styles.rowWrapper}>
        <div className={styles.profilePic}>
          <img alt="ashith" className={styles.dp} src={dp} />
        </div>
        <div className={styles.profileDescription}>
          <p className={styles.name}>Ashith Rahul</p>
          <p className={styles.designation}>Full stack developer</p>
          <div className={styles.profileDetails}>
            <dl className={styles.personalDetails}>
              {/*<dt>Age:</dt>*/}
              {/*<dd>25</dd>*/}
              <dt>Phone:</dt>
              <dd><a href="tel:+91 9961752623">+91 9961752623</a></dd>
              <dt>Email:</dt>
              <dd><a href="mailto:ashith.rahul@outlook.com">ashith.rahul@outlook.com</a></dd>
              <dt>Address:</dt>
              <dd>BSK 2 Bengaluru Karnataka India</dd>
            </dl>

          </div>
          <div className={styles.socials}>
            <a href="https://github.com/ashithrahul">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ashith-rahul-3026b3104">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/AshithRahulNR">
              <FaFacebookSquare />
            </a>

          </div>

        </div>

      </div>

    </div>

  </div>
);
export default Header;
