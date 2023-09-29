import ServicesCard from "./ServicesCard";
import { Col } from 'reactstrap';
import weatherImage from '../../assets/images/weather.png';
import guideImage from '../../assets/images/guide.png';
import customizationImage from '../../assets/images/customization.png';

const servicesData = [
    {
        imageURL: weatherImage,
        title: "Calculate Weather",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, voluptatem?"
    },
    {
        imageURL: guideImage,
        title: "Best Tour Guide",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, voluptatem?"
    },
    {
        imageURL: customizationImage,
        title: "Customization",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, voluptatem?"
    },
]

const ServicesList = () => {
    return <>
    {
        servicesData.map((item, index) => <Col lg="3" md="6" sm="12" className="mb-4" key={index}><ServicesCard item={item}></ServicesCard></Col>)
    }
    </>
};

export default ServicesList;