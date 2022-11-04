import "./behindesme.css";
import behindImag from '../../assets/behind_esme.png';

const Behindesme = () => {
  return (
    <div className="behindesmess">
      <div className="behind_one">
        <div>ESME</div>
        <h1>Meet the inspiration behind ESME</h1>
        <p>
          At Esmé, we celebrate your beauty from within. We empower your
          lifestyle by heightening your beauty through your immunity.{" "}
        </p>

        <p>
          "Beauty through immunity", Esmé’s first formula, is a blend of
          advanced active ingredients with clinically proven efficacy.
        </p>

        <p>
          Patent Marine Collagen Peptides work together with Propolis,
          Elderberry concentrate and a whole array of vitamins and minerals to
          empower your cells and body defences, resulting in a hydrated, healthy
          skin.
        </p>

        <p>
          This exquisite food supplement program is composed of 14 glass vials
          holding our highly qualitative liquid formula, known to be the best
          way to facilitate the assimilation of nutritive needs for body and
          skin health.{" "}
        </p>

        <p>
          This first ever Esmé cure is the result of two years of dedication,
          bringing nothing but the best to women’s health and beauty.
        </p>

        <p>Esmé + Celebrate your Essence.</p>
      </div>
      <div className="behind_twoss">
      <img src={behindImag} alt="behind_two"/>
      </div>
    </div>
  );
};

export default Behindesme;
