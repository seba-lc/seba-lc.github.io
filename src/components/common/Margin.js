import imgCv from './../../assets/img-cv.jpg';
import Social from './Social';

const Margin = ({width}) => {
  
  return (
    <div className="d-flex flex-column justify-content-between align-items-center w-100 text-light px-3 h-100">
      <div className={`row align-items-center ${width < 992 ? 'list-box' : null}`}>
        <div className='col-12 col-lg-6 col-xl-12 d-flex flex-column align-items-center'>
          <img src={imgCv} width='220' className='rounded-circle border border-success border-5 image-style' alt="cv-image" />
          <h4 className='fs-4 text-center mt-3'>Sebastián López Cruz</h4>
          <h4 className='fs-5 fst-italic text-center my-2'>Ing. Civil // Web Developer Tr.</h4>
        </div>
          <div className={`col-12 col-lg-6 col-xl-12`}>
            <p className='text-center lh-sm my-2 fs-7'>En el 2021 decidí perseguir un sueño, convertirme en desarrollador web. Enamorado de la profesión, muy entusiasmado y motivado por abrirme paso en este maravilloso mundo.</p>
            <p className='text-center lh-sm my-2 fs-7'>Busco la posibilidad de incorporarme como Desarrollador Trainee/Junior. Soy una persona muy entusiasta, autodidacta y comprometida en mis responsabilidades.</p>
          </div>
      </div>
      {
        width < 1200 ? null : <Social />
      }
    </div>
  );
};

export default Margin;