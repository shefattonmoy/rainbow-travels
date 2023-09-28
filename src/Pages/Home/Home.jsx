import '../../Styles/Home.css';
import { Container, Row, Col } from 'reactstrap';
import worldImage from '../../assets/images/world.png'
import heroImage01 from '../../assets/images/hero-img01.jpg';
import heroImage02 from '../../assets/images/hero-img02.jpg';
import heroVideo from '../../assets/images/hero-video.mp4';
import Subtitle from '../../Shared/Subtitle/Subtitle';
import SearchBar from '../../Shared/SearchBar/SearchBar';
import ServicesList from '../../Components/Services/ServicesList';
import FeaturedToursList from '../../Components/FeaturedTours/FeaturedToursList';

const Home = () => {
    return <>

        {/* Hero Section */}

        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero-content">
                            <div className='hero-subtitle d-flex align-items-center'>
                                <Subtitle subtitle={'Your Ultimate Travel Companion'}></Subtitle>
                                <img src={worldImage} alt="" />
                            </div>
                            <h1>Travelling Unlocks the Gateway to Lifelong {" "}<span className="highlight">Memories</span></h1>
                            <p>Travel is the gateway to enduring memories. It's in the excitement of new discoveries, the bonds forged with fellow explorers, and the captivating scenery that lasting moments are etched. From famous landmarks to hidden treasures, every journey paints a distinct chapter in life's tapestry. Embark on your next adventure, for travel is the bridge to a world filled with cherished memories, ready to be embraced and cherished.</p>
                        </div>
                    </Col>
                    <Col lg="2">
                        <div className="hero-image-box">
                            <img src={heroImage01} alt="" />
                        </div>
                    </Col>
                    <Col lg="2">
                        <div className="hero-image-box mt-4">
                            <video src={heroVideo} alt="" controls />
                        </div>
                    </Col>
                    <Col lg="2">
                        <div className="hero-image-box mt-5">
                            <img src={heroImage02} alt="" />
                        </div>
                    </Col>
                    <SearchBar></SearchBar>
                </Row>
            </Container>
        </section>

        {/* Services Section */}
        <section>
            <Container>
                <Row>
                    <Col lg="3">
                        <h5 className="services-subtitle">Our Services</h5>
                        <h2 className='services-title'>We offer our best services</h2>
                    </Col>
                    <ServicesList></ServicesList>
                </Row>
            </Container>
        </section>

        {/* Featured Tour Section */}
        <section>
            <Container>
                <Row>
                    <Col lg="12" className='mb-5'>
                        <Subtitle subtitle={"Explore"}></Subtitle>
                        <h2 className='featured-tour-title'>Our Featured Tours</h2>
                    </Col>
                    <FeaturedToursList></FeaturedToursList>
                </Row>
            </Container>
        </section>
    </>
};

export default Home;