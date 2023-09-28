import { useRef, useState } from 'react';
import '../../Styles/TourDetails.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tourData from '../../assets/data/tours';
import calculateAverageRating from '../../Utilities/AverageRating';
import Booking from '../../Components/Booking/Booking';
import avatar from '../../assets/images/avatar.jpg';
import Newsletter from '../../Shared/Newsletter/Newsletter';

const TourDetails = () => {
    const { id } = useParams();
    const reviewMessageReference = useRef('');
    const [tourRating, setTourRating] = useState(null);

    const tour = tourData.find(tour => tour.id === id);

    const { title, photo, description, price, address, reviews, city, distance, maxGroupSize } = tour;

    const { totalRating, averageRating } = calculateAverageRating;

    const options = { day: "numeric", month: "long", year: "numeric" };

    const handleSubmit = (event) => {
        event.preventDefault();
        const reviewText = reviewMessageReference.current.value;
    }

    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg="8">
                            <div className="tour-content">
                                <img src={photo} alt="" />
                                <div className="tour-info">
                                    <h2>{title}</h2>
                                    <div className='d-flex align-items-center gap-5'>
                                        <span className='tour-rating d-flex align-items-center gap-1'>
                                            <i className="ri-star-fill" style={{ 'color': 'var(--secondary-color)' }}></i> {averageRating === 0 ? null : averageRating} {totalRating === 0 ? ('Not rated') : (<span>({reviews?.length})</span>)}
                                        </span>
                                        <span>
                                            <i className="ri-map-pin-user-fill"></i> {address}
                                        </span>
                                    </div>
                                    <div className="tour-extra-details">
                                        <span><i className="ri-map-pin-2-line"></i>{city}</span>
                                        <span><i className="ri-money-dollar-box-line"></i>${price}/person</span>
                                        <span><i className="ri-map-pin-time-line"></i>{distance} k/m</span>
                                        <span><i className="ri-group-line"></i>{maxGroupSize} people</span>
                                    </div>
                                    <h5>Description</h5>
                                    <p>{description}</p>
                                </div>

                                {/* Tour Review Section */}
                                <div className="tour-reviews mt-4">
                                    <h4>Reviews ({reviews?.length} reviews)</h4>
                                    <Form onSubmit={handleSubmit}>
                                        <div className="rating-group d-flex align-items-center gap-3 mb-4">
                                            <span onClick={() => setTourRating(1)}>1 <i className="ri-star-fill"></i></span>
                                            <span onClick={() => setTourRating(2)}>2 <i className="ri-star-fill"></i></span>
                                            <span onClick={() => setTourRating(3)}>3 <i className="ri-star-fill"></i></span>
                                            <span onClick={() => setTourRating(4)}>4 <i className="ri-star-fill"></i></span>
                                            <span onClick={() => setTourRating(5)}>5 <i className="ri-star-fill"></i></span>
                                        </div>
                                        <div className="review-input">
                                            <input type="text" ref={reviewMessageReference} placeholder='Share Your Thoughts' required />
                                            <button className='btn primary__btn text-white' type='submit'>Submit</button>
                                        </div>
                                    </Form>
                                    <ListGroup className='user-reviews'>
                                        {
                                            reviews?.map((review, index) => (
                                                <div className="review-item" key={index}>
                                                    <img src={avatar} alt="" />
                                                    <div className="w-100">
                                                        <div className='d-flex align-items-center justify-content-between'>
                                                            <div>
                                                                <h5>Shefat</h5>
                                                                <p>{
                                                                    new Date("09-29-2023").toLocaleDateString("en-US", options)}</p>
                                                            </div>
                                                            <span className='d-flex align-items-center'>
                                                                5<i className="ri-star-fill"></i>
                                                            </span>
                                                        </div>
                                                        <h6>Amazing tour</h6>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </ListGroup>
                                </div>

                            </div>
                        </Col>
                        <Col lg="4">
                            <Booking tour={tour} averageRating={averageRating}></Booking>
                        </Col>
                    </Row>
                </Container>
                <Newsletter></Newsletter>
            </section>
        </>
    );
};

export default TourDetails;