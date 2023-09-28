import { useState, useEffect } from 'react';
import CommonSection from "../../Shared/CommonSection/CommonSection";
import TourCard from "../../Shared/TourCard/TourCard";
import Newsletter from "../../Shared/Newsletter/Newsletter";
import SearchBar from "../../Shared/SearchBar/SearchBar";
import tourData from '../../assets/data/tours';
import { Container, Row, Col } from 'reactstrap';
import '../../Styles/Tours.css';

const Tours = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const pages = Math.ceil(5 / 2)
        setPageCount(pages);
    }, [page])
    return <>
        <CommonSection title={"All Tours"}></CommonSection>
        <section>
            <Container>
                <Row>
                    <SearchBar></SearchBar>
                </Row>
            </Container>
        </section>
        <section className="pt-0">
            <Container>
                <Row>
                    {
                        tourData?.map(tour => (<Col lg="3" className="mb-4" key={tour.id}><TourCard tour={tour}></TourCard></Col>))
                    }
                    <Col lg="12">
                        <div className="pagination d-flex align-items-center justify-content-center my-4 gap-3">
                            {[...Array(pageCount).keys()].map(number => (
                                <span key={number} onClick={() => {
                                    console.log(`Clicked on page ${number}`);
                                    setPage(number)
                                }}
                                    className={page === number ? "active-page" : ''}
                                >
                                    {number + 1}
                                </span>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <Newsletter></Newsletter>
    </>
};

export default Tours;