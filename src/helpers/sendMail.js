import emailjs from '@emailjs/browser';

export default function sendMail(message) {
  emailjs
    .sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      message,
      process.env.REACT_APP_PUBLIC_KEY,
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
}
