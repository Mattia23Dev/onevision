import Pdf from '../../../data/OneVisionPresenta.pdf';
export default function HelpSupport({ setVisible }) {
  return (
    <div className="absolute_wrap">
      <div className="absolute_wrap_header">
        <div
          className="circle hover1"
          onClick={() => {
            setVisible(0);
          }}
        >
          <i className="arrow_back_icon"></i>
        </div>
        Documentazione
      </div>
      <a href={Pdf} target='_blank'>
      <div className="mmenu_item hover3">
        <div className="small_circle">
          <i className="help_center_icon"></i>
        </div>
        <span>Leggi Documentazione</span>
      </div>
      </a>
      <a href='https://wa.me/3313869850' target='_blank' >
      <div className="mmenu_item hover3">
        <div className="small_circle">
          <i className="email_icon"></i>
        </div>
        <span>Whatsapp</span>
      </div>
      </a>
    </div>
  );
}
