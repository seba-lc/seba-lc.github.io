import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import brandImg from './../../assets/brand-img.webp';
import Social from '../Social/Social';
import useMediaQuery from '../../hooks/useMediaQuery';


const Home = () => {
  const {width} = useMediaQuery();

  const aboutmeText1 = `My name is Sebastian, I like maths and solving problems, that is why I've got my Civil Engineer degree,
  then worked as a structural designer so finally finding my true passion Developing Software.`;

  const aboutmeText2 = `I know, it's a long path, but definitely worthwhile. I'm a Software Developer based in Argentina. 
  Years ago, I was drawn to Software Development by the challenge of creating innovative solutions to real-world problems 
  using my programming skills. I currently work as a freelancer developing software for businesses (using NodeJS & 
  ReactJS mostly). But also experience in the logistic field using Java and Spring Boot, Kotlin and Android.`

  return (
    <Container fluid className='page-style d-flex flex-column justify-content-center align-items-center p-4'>
      <Row className='d-flex flex-column justify-content-center align-items-center'>
        <Col xs={12} lg={8} >
          <div className={`d-flex align-items-center my-5 px-5 ${width < 768 ? 'justify-content-center' : 'justify-content-between'}`}>
            <img src={brandImg} alt='brand-image' className='light' width={70} />
            {
              width >= 768 ? <Social /> : null
            }
          </div>
          <div className='display-2 text-start w-100 mb-3'>Welcome.</div>
          <div className='fs-6 text-start'>
            <p>{aboutmeText1}</p>
            <p>{aboutmeText2}</p>
          </div>
          {
            width < 768 ? (
              <div className='mt-5'> 
                <Social />
              </div>
            ) : null
          }
        </Col>
      </Row>
    </Container>
  );
};

export default Home;