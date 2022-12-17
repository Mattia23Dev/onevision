import { useRef } from "react";
import Detail from "./Detail";
import useOnCLickOutside from "../../helpers/clickOutside";
export default function EditDetails({
  details,
  handleChange,
  updateDetails,
  infos,
  setVisible,
}) {
  const modal = useRef(null);
  useOnCLickOutside(modal, () => setVisible(false));
  return (
    <div className="blur">
      <div className="postBox infosBox" ref={modal}>
        <div className="box_header">
          <div className="small_circle" onClick={() => setVisible(false)}>
            <i className="exit_icon"></i>
          </div>
          <span>Modifica Dettagli</span>
        </div>
        <div className="details_wrapper scrollbar">
          <div className="details_col">
            <span>Personalizza il tuo profilo</span>
            <span>I dettagli che selezioni saranno pubblici</span>
          </div>
          <div className="details_header">Altro nome</div>
          <Detail
            value={details?.otherName}
            img="studies"
            placeholder="Aggiungi un altro nome"
            name="otherName"
            text="altro nome"
            handleChange={handleChange}
            updateDetails={updateDetails}
            infos={infos}
          />
          <div className="details_header">Qualifica</div>
          <Detail
            value={details?.job}
            img="job"
            placeholder="Aggiungi la tua qualifica"
            name="job"
            text="la tua qualifica"
            handleChange={handleChange}
            updateDetails={updateDetails}
            infos={infos}
          />
          <Detail
            value={details?.workplace}
            img="job"
            placeholder="Aggiungi altra qualifica"
            name="workplace"
            text="altra qualifica"
            handleChange={handleChange}
            updateDetails={updateDetails}
            infos={infos}
          />
          <div className="details_header">Educazione</div>
          <Detail
            value={details?.highSchool}
            img="studies"
            placeholder="Aggiungi Educazione"
            name="highSchool"
            text="educazione"
            handleChange={handleChange}
            updateDetails={updateDetails}
            infos={infos}
          />
          <Detail
            value={details?.college}
            img="studies"
            placeholder="Aggiungi formatore"
            name="college"
            text="formatore"
            handleChange={handleChange}
            updateDetails={updateDetails}
            infos={infos}
          />
          <div className="details_header">Città</div>
          <Detail
            value={details?.currentCity}
            img="home"
            placeholder="Aggiungi la tua città"
            name="currentCity"
            text="la tua città"
            handleChange={handleChange}
            updateDetails={updateDetails}
            infos={infos}
          />
          <div className="details_header">Situazione sentimentale</div>
          <Detail
            value={details?.relationship}
            img="relationship"
            placeholder="Add instagram"
            name="relationship"
            text="situazione sentimentale"
            handleChange={handleChange}
            updateDetails={updateDetails}
            infos={infos}
            rel
          />
          <div className="details_header">Instagram</div>
          <Detail
            value={details?.instagram}
            img="home"
            placeholder="Aggiungi il tuo nome"
            name="instagram"
            text="instagram"
            handleChange={handleChange}
            updateDetails={updateDetails}
            infos={infos}
          />
            <Detail
            value={details?.hometown}
            img="home"
            placeholder="Aggiungi un diverso url"
            name="hometown"
            text="secondo url"
            handleChange={handleChange}
            updateDetails={updateDetails}
            infos={infos}
          />
        </div>
      </div>
    </div>
  );
}
