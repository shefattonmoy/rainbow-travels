import { useRef } from 'react';
import '../../Styles/SearchBar.css';
import { Col, Form, FormGroup } from 'reactstrap';

const SearchBar = () => {
    const locationReference = useRef('');
    const distanceReference = useRef(0);
    const maxGroupReference = useRef(0);

    const handleSearch = () => {
        const location = locationReference.current.value;
        const distance = distanceReference.current.value;
        const maxGroupSize = maxGroupReference.current.value;

        if(location === '' || distance === '' || maxGroupSize === '') {
            return alert('All fields are required!');
        }
    }

    return <Col lg="12">
        <div className="search-bar">
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 form-group form-group-fast'>
                    <span><i className="ri-map-pin-line"></i></span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder='Where are you going?' ref={locationReference} />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form-group form-group-fast'>
                    <span><i className="ri-map-pin-time-line"></i></span>
                    <div>
                        <h6>Distance</h6>
                        <input type="number" placeholder='Distance (k/m)' ref={distanceReference}/>
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form-group form-group-last'>
                    <span><i className="ri-group-line"></i></span>
                    <div>
                        <h6>Maximum People</h6>
                        <input type="number" placeholder='0' ref={maxGroupReference}/>
                    </div>
                </FormGroup>
                <span onClick={handleSearch} className='search-icon' type='submit'>
                    <i className="ri-search-line"></i>
                </span>
            </Form>
        </div>
    </Col>
};

export default SearchBar;