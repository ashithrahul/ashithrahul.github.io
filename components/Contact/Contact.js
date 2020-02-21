import React, { useMemo } from 'react';
import classNames from 'classnames';
import { sentMail } from '../../services/SendMail.service';
import { useValidation } from '../../utils/validations.utils';
import { formData } from './Contact.constants';
import * as styles from './Contact.scss';

const data1 = {
  fields: {
    name: {
      validation: {
        isRequired: { message: 'Please fill out your name' },
      },
      title: 'Your name',
      type: 'input',
    },
    dest: {
      validation: {
        isRequired: { message: 'Please fill out a email' },
        // isMinLength: { length: 6, message: 'Please make it more secure' },
      },
      title: 'Your e-mail',
      type: 'email',
    },
    message: {
      validation: {
        isRequired: { message: 'Please fill out a message' },
      },
      type: 'textarea',
    },
  },
};

const onSubmitButtonClick = async (data, isFormValid) => {
  if (isFormValid) {
    const json = await (await fetch('https://us-central1-cloud-functions-sendmail-b188f.cloudfunctions.net/sendMail', {
      method: 'POST',
      body: JSON.stringify(data.values),
    })).json();
  }
};
const Form = () => {
  const {
    getFieldProps, getFormProps, errors, submitted,
  } = useValidation({ ...data1, onSubmit: onSubmitButtonClick });
  return (
    <form
      {...getFormProps()}
      className={styles.contactFrom}
    >
      {Object.entries(data1.fields).map(([key, data]) => (
        <div
          key={data.title}
          className={classNames(styles.formWrapper, { [styles.tooltip]: (errors[key] && submitted) })}
          data-tooltip={errors[key]}
        >
          <input
            {...getFieldProps(key)}
            type={data.type}
            className={classNames(styles[data.type],
              styles.commonInputs,
              { [styles.isError]: (errors[key] && submitted) })}
            placeholder={data.title}
          />
        </div>
      ))}
      <button
        // onClick={onSubmitButtonClick}
        type="submit"
        className={styles.sendBtn}
      >
        Send
      </button>
    </form>
  );
};


const Contact = () => (
  <section id="contact" className={styles.mainSection}>
    <div className="container">
      <p className={styles.contactTitle}>
        Contact me
        <span className={styles.blinkCaret}>_</span>
      </p>
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
              <li><a target="_blank" href="https://www.facebook.com/AshithRahulNR">Facebook</a></li>
              <li><a target="_blank" href="https://www.linkedin.com/in/ashith-rahul-3026b3104">Linkedin</a></li>
              <li><a target="_blank" href="https://github.com/ashithrahul">GitHub</a></li>
              <li><a target="_blank" href="https://stackoverflow.com/users/4947801/ashith">Stack Overflow</a></li>
            </ul>
          </div>
        </div>
        <div className={classNames(styles.emailContent, styles.contactBlock)}>
          <p className={styles.contactBlockTitle}>Or just write me a letter here_</p>
          <Form />
        </div>

      </div>
    </div>
  </section>
);

export default Contact;
