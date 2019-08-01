import React from 'react';
import classNames from 'classnames';
import { formData } from './Contact.constants';
import * as styles from './Contact.scss';

const Form = () => (<form className={styles.contactFrom}>
  {formData.map((data) => (
    <div key={data.title} className={styles.formWrapper}>
      <input type={data.type} className={classNames(styles[data.type], styles.commonInputs)} placeholder={data.title} />
    </div>
  ))}

</form>);


const Contact = () => (
  <section id='contact' className={styles.mainSection}>
    <div className={'container'}>
        <p className={styles.contactTitle}>Contact me<span className={styles.blinkCaret}>_</span></p>
      <div className={styles.contactWrapper}>
        <div className={classNames(styles.phone, styles.contactBlock)}>
          <dl className={styles.phoneWrapper}>
            <dt>Phone:</dt>
            <dd>+91 9961752623</dd>
            <dt>Skype:</dt>
            <dd><a href="skype:live:ashith.rahul_1">live:ashith.rahul_1</a></dd>
            <dt>Email:</dt>
            <dd><a href="mailto:mail@mail.com">ashith.rahul@outlook.com</a></dd>
          </dl>
          <div className={styles.contactSocial}>
            <ul>
              <li><a href={'https://github.com/ashithrahul'}>Facebook</a></li>
              <li><a href={'https://www.linkedin.com/in/ashith-rahul-3026b3104'}>Linkedin</a></li>
              <li><a href={'https://github.com/ashithrahul'}>GitHub</a></li>
              <li><a href="">Bitbucket</a></li>
            </ul>
          </div>
        </div>
        <div className={classNames(styles.emailContent, styles.contactBlock)}>
          <p className={styles.contactBlockTitle}>Or just write me a letter here_</p>
          <Form />
          <button className={styles.sendBtn}>
            Send
          </button>
        </div>

      </div>
    </div>
  </section>
);

export default Contact;
