import { useState } from "react";
import { useTranslation } from "react-i18next";
import { usePageTheme } from "../../themes/PageThemeContext";
import { sendForm } from "../../../api/contentApi";


import "./ContactForm.css";

function ContactForm() {
  const { pageTheme } = usePageTheme();
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setEmail("");
    setMessage("");

    try {    
      sendForm(email, message)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      style={{
        "--background-color": pageTheme.dark ? "#1a1a1a" : "white",
        "--text-color": pageTheme.dark ? "white" : "#1a1a1a",
        "--input-background": pageTheme.dark ? "#2a2a2a" : "#f8f8f8",
        "--border-color": pageTheme.dark ? "#555" : "#ccc",
        "--button-background": pageTheme.dark ? "#333" : "#222",
        "--button-color": "white",
      }}
    >
      <label>
        {t('about.form.email.instruction')}
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder={t('about.form.email.placeholder')}
            onInvalid={(e) => {
                if (e.target.validity.valueMissing) {
                    e.target.setCustomValidity(t('about.form.error'));
                } else if (e.target.validity.typeMismatch) {
                    e.target.setCustomValidity(t('about.form.email.error'));
                }
            }}
            onInput={(e) => {
                e.target.setCustomValidity("");
            }}
        />
      </label>

      <label>
        {t('about.form.message.instruction')}
        <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder={t('about.form.message.placeholder')}
            onInvalid={(e) => {
                e.target.setCustomValidity(t('about.form.error'));
            }}
            onInput={(e) => {
                e.target.setCustomValidity("");
            }}
            rows="6"
        />
      </label>

      <button type="submit">
        {t('about.form.send')}
      </button>
    </form>
  );
}

export default ContactForm;