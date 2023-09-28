import TourCard from "../../Shared/TourCard/TourCard";
import tourData from '../../assets/data/tours';
import { Col } from 'reactstrap';

const FeaturedToursList = () => {
    return (
        <>
            {
                tourData?.map(tour => (
                    <Col lg="3" className="mb-4" key={tour.id}>
                        <TourCard tour={tour}></TourCard></Col>
                ))
            }
        </>
    )
};

export default FeaturedToursList;