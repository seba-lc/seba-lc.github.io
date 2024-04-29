import linkImg from './../../assets/linkedin.webp';
import gitImg from './../../assets/github.webp';

const Social = () => {
  return (
    <div className='d-flex'>
        <a href='https://github.com/seba-lc/' target='_blank' className='d-flex align-items-center text-light text-decoration-none'>
          <img src={gitImg} alt="gitHub-Img" className='bg-light rounded-circle p-1' width={30} />
          <span className='ms-2'>GitHub</span>
        </a>
        <a href='https://www.linkedin.com/in/sebalc' target='_blank' className='ms-4 d-flex align-items-center text-light text-decoration-none'>
          <img src={linkImg} alt="linkedIn-Img" className='bg-light rounded-circle p-1' width={30} />
          <span className='ms-2'>LinkedIn</span>
        </a>
        {/* MAÑANA HAGO UN FORMULARIO PARA MANDARME UN EMAIL */}
        {/* <a href='mailto:sebalopezx@gmail.com' target='_blank' className='ms-4 d-flex align-items-center text-light text-decoration-none'>
          <img src={linkImg} alt="linkedIn-Img" className='bg-light rounded-circle p-1' width={30} />
          <span className='ms-2'>Email</span>
        </a> */}
      </div>
  );
};

export default Social;