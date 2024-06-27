import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './Form.css'

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5goaltg', 'template_odf40lg', form.current, 
     'Ur_I_y3LsHvbROGoK')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form className="formContainer" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className='button' type="submit" value="Send" />
    </form>
  );
};