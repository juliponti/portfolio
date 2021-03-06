import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import apiKey from "./emailkey.js";

import "./contact.scss";

function Contact() {
  const [inputValue, setInputValue] = useState();
  const [buttonActive, setButtonActive] = useState(false);

  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        apiKey.SERVICE_ID,
        apiKey.TEMPLATE_ID,
        form.current,
        apiKey.USER_ID
      )
      .then(
        (result) => {
          alert("¡Mensaje enviado!", result.text);
        },
        (error) => {
          alert("Ha ocurrido un error, por favor intenta de nuevo", error.text);
        }
      );

    setInputValue("");
  };

  function handleButtonActive() {
    inputValue !== "" ? setButtonActive(true) : setButtonActive(false);
  }

  return (
    <div id="contact" className="footer-contact">
      <h3 className="section__subtitle">Contáctame</h3>
      <div className="footer-contact__container">
        <div className="footer-contact__info">
          <h4>¡Enviame un mensaje!</h4>
        </div>
        <form
          ref={form}
          className="footer-contact__form"
          onSubmit={handleSubmit}
        >
          <fieldset className="footer-contact__form-atributes-group">
            <input
              className="form-input"
              type="text"
              placeholder="Nombre"
              name="user_name"
              value={inputValue}
              onChange={handleButtonActive}
            />
            <input
              className="form-input"
              type="email"
              placeholder="Email"
              name="user_email"
              value={inputValue}
              onChange={handleButtonActive}
            />
          </fieldset>
          <textarea
            className="form-input"
            placeholder="Mensaje"
            id="areatext"
            spellCheck="false"
            name="message"
            value={inputValue}
            onChange={handleButtonActive}
          />
          <button
            type="submit"
            className="button-primary"
            disabled={!buttonActive}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
