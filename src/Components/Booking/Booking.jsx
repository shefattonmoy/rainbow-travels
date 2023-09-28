import {useState} from 'react';
import '../../Styles/Booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {useNavigate} from 'react-router-dom';

const Booking = ({ tour, averageRating }) => {
    const { price, reviews } = tour;
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail: 'example@gmail.com',
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    })

    const handleChange = (event) => {
        setCredentials(prev => ({...prev, [event.target.id]: event.target.value}))
    };

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee);

    const handleClick = (event) => {
        event.preventDefault();
        navigate("/thank-you");
    }

    return (
        <div className="booking">
            <div className="booking-top d-flex align-items-center justify-content-between">
                <h3>${price}<span>/person</span></h3>
                <span className='tour-rating d-flex align-items-center'>
                    <i className="ri-star-fill"></i> {averageRating === 0 ? null : averageRating} ({reviews?.length})</span>
            </div>

            {/* Booking Form */}
            <div className="booking-form">
                <h5>Information</h5>
                <Form onSubmit={handleClick} className='booking-info-form'>
                    <FormGroup>
                        <input type="text" placeholder='Full Name' id='fullName' required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type="number" placeholder='Phone' id='phone' required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type="date" placeholder='Full Name' id='bookAt' required onChange={handleChange} />
                        <input type="number" placeholder='Guest' id='guestSize' required onChange={handleChange} />
                    </FormGroup>
                </Form>
            </div>
            <div className="booking-bottom">
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                        <h5 className='d-flex align-items-center gap-1'>${price} <i className="ri-close-line"></i>1 person</h5>
                        <span>${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0'>
                        <h5>Service Charge</h5>
                        <span>${serviceFee}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0 total'>
                        <h5>Total</h5>
                        <span>${totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>
                <Button onClick={handleClick} className='btn primary__btn w-100 mt-4'>Book Now</Button>
            </div>
        </div>
    );
};

export default Booking;