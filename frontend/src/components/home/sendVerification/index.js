import { useState } from "react";
import "./style.css";
import axios from "axios";
export default function SendVerification({ user }) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const sendVerificationLink = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/sendVerification`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setSuccess(data.message);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <div className="send_verification">
      <span>
        Il tuo account non è verificato, verifica l'account prima di 30 giorni o 
        verrà eliminato.
      </span>
      <a
        onClick={() => {
          sendVerificationLink();
        }}
      >
        Clicca qui per reinviare il link di verifica
      </a>
      {success && <div className="success_text">{success}</div>}
      {error && <div className="error_text">{error}</div>}
    </div>
  );
}
