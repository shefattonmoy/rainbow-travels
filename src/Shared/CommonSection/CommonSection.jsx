import './CommonSection.css';
import {Container, Row, Col} from 'reactstrap';

const CommonSection = ({title}) => {
    return (
        <div>
            <section className="common-section">
                <Container>
                    <Row>
                        <Col lg="12"><h1>{title}</h1></Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default CommonSection;