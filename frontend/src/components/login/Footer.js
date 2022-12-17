import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="login_footer">
      <div className="footer_splitter"></div>
      <div className="login_footer_wrap">
        <Link to="/terms">Termini e Condizioni</Link>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
      <div className="login_footer_wrap">
        <p style={{ fontSize: "12px", marginTop: "10px" }}>
        @One Vision - 2023
        </p>
      </div>
    </footer>
  );
}
