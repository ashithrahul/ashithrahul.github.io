import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { FaBars } from 'react-icons/fa';
import * as styles from './Menu.scss';

const navbarItems = [{
  label: 'Hello',
  target: '#hello',
}, {
  label: 'resume',
  target: '#resume',
}, {
  label: 'portfolio',
  target: '#portfolio',
}, {
  label: 'testimonials',
  target: '#testimonials',
}, {
  label: 'blog',
  target: '#blog',
}, {
  label: 'contact',
  target: '#contact',
}];

const Menu = () => {
  const [menuActive, setMenuActive] = useState(false);
  useEffect(() => {
    document.body.onscroll = () => {
      (window.scrollY > 0 && !menuActive) ? setMenuActive(true) : setMenuActive(false);
    };
  }, []);
  return (
    <div className={classNames(styles.menu, { [styles.active]: menuActive })}>
      <div className="container">
        <div className={classNames(styles.navWrapper, styles.navWrapperList)}>
          <nav className={styles.nav}>
            {
            navbarItems.map((nav) => (
              <span key={nav.label}>
                <a href={nav.target}>{nav.label}</a>
                {' '}
              </span>
            ))
          }
          </nav>
        </div>
        <div className={styles.navWrapper}>
          <button className={styles.hamburgerBtn}>
            <FaBars
              size={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Menu;
