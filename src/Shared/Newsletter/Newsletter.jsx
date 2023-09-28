import '../../Styles/Newsletter.css';
import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../../assets/images/male-tourist.png';

const Newsletter = () => {
    return (
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="newsletter-content">
                            <h2>Subscribe now to get your desired travel information</h2>
                            <div className="newsletter-input">
                                <input type="email" placeholder='Your Email' />
                                <button className="btn newsletter-button">Subscribe</button>
                            </div>
                            <p>Stay in the Loop! Subscribe to Our Newsletter for Exclusive Travel Updates, Tips, and Offers. Join our community of wanderers and receive the latest travel inspiration directly in your inbox. Don't miss out on exciting adventures – sign up today!</p>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="newsletter-image">
                            <img src={maleTourist} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Newsletter;