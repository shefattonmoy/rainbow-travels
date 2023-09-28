import '../../Styles/Home.css';
import { Container, Row, Col } from 'reactstrap';

import worldImage from '../../assets/images/world.png'
import heroImage01 from '../../assets/images/hero-img01.jpg';
import heroImage02 from '../../assets/images/hero-img02.jpg';
import heroVideo from '../../assets/images/hero-video.mp4';
import experienceImage from '../../assets/images/experience.png';

import Subtitle from '../../Shared/Subtitle/Subtitle';
import SearchBar from '../../Shared/SearchBar/SearchBar';
import ServicesList from '../../Components/Services/ServicesList';
import FeaturedToursList from '../../Components/FeaturedTours/FeaturedToursList';
import MasonryGallery from '../../Components/Gallery/MasonryGallery';

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

        {/* Experience Section */}

        <section>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="experience-content">
                            <Subtitle subtitle={"Our Experience"}></Subtitle>
                            <h2>Creating Memories:<br /> Our Signature Experiences</h2>
                            <p>At Rainbow Travels, we redefine travel experiences. Our mission is to immerse you in the heart of your chosen destination, ensuring every moment is a memorable one. We believe in crafting journeys that are as unique as you are, tailored to your interests, preferences, and desires.</p>

                            <p>Our team of travel experts is passionate about uncovering hidden gems, securing exclusive access, and curating one-of-a-kind adventures that immerse you in the local culture. Whether you're seeking luxury and relaxation or adrenaline-pumping escapades, our diverse range of experiences is designed to cater to every traveler's dream.</p>

                            <p>Expect seamless logistics, expert guidance, and the freedom to explore at your own pace. Our commitment to excellence ensures that your travel experience with us will be nothing short of extraordinary. Join us on a journey that will leave you with unforgettable memories, stories to share, and a deep connection to the world's most captivating destinations.</p>
                        </div>
                        <div className="counter-wrapper d-flex align-items-center gap-5">
                            <div className="counter-box">
                                <span>26k+</span>
                                <h6>Successful trips</h6>
                            </div>
                            <div className="counter-box">
                                <span>14k+</span>
                                <h6>Regular clients</h6>
                            </div>
                            <div className="counter-box">
                                <span>22</span>
                                <h6>Years experiences</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="experience-image">
                            <img src={experienceImage} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        {/* Gallery Section */}

        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <Subtitle subtitle={"Gallery"}></Subtitle>
                        <h2 className='gallery-title'>Visit Our Gallery</h2>
                    </Col>
                    <Col lg="12">
                        <MasonryGallery></MasonryGallery>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
};

export default Home;