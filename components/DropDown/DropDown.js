import classNames from 'classnames';
import React, { Component } from 'react';
import * as styles from './DropDown.scss';

class DropDown extends Component {
  constructor() {
    super();
    this.state = {
      list: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen'],
      activeIndex: 0,
    };
  }

  componentDidMount() {
    document.getElementById('wrapper').addEventListener('wheel', this.onScroll.bind(this), { passive: false });
  }

  componentWillUnmount() {
    document.getElementById('wrapper').removeEventListener('wheel', this.onScroll.bind(this), { passive: false });
  }

  onScroll = (event) => {
    event.preventDefault();
    console.log(Math.ceil(event.deltaY / 50));
    const activeIndex = Math.ceil(event.deltaY / 100) + this.state.activeIndex;
    if (activeIndex >= 0 && activeIndex < this.state.list.length) {
      this.setState({ activeIndex }, () => console.log(this.state));
    }
    document.getElementsByClassName(styles.active)[0].scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
    // console.log(document.getElementsByClassName(styles.active)[0]);
  };


  render() {
    const { list, activeIndex } = this.state;
    return (
      <div
        id="wrapper"
        className={styles.wrapper}
      >
        {list.map((item, index) => (
          <li
            className={classNames({ [styles.active]: (index === activeIndex) })}
          >
            {item}
          </li>
        ))}
      </div>
    );
  }
}

export default DropDown;
