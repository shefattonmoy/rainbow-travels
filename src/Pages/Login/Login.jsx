import '../../Styles/Login.css';
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import loginImage from '../../assets/images/login.png';
import userIcon from '../../assets/images/user.png';
import { useState } from 'react';

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined,
    })

    const handleChange = (event) => {
        setCredentials(prev => ({...prev, [event.target.id]: event.target.value}))
    };

    const handleClick = (event) => {
        event.preventDefault();
    }
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="8">
                        <div className="login-container d-flex justify-content-between">
                            <div className="login-image">
                                <img src={loginImage} alt="" />
                            </div>
                            <div className="login-form">
                                <div className="user">
                                    <img src={userIcon} alt="" />
                                </div>
                                <h2>Login</h2>
                                <Form onSubmit={handleClick}>
                                    <FormGroup>
                                        <input type="email" id="email" placeholder='Your Email' required onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="password" id="password" placeholder='Your Password' required onChange={handleChange} />
                                    </FormGroup>
                                    <Button className='btn secondary__btn auth-button' type='submit'>Login</Button>
                                </Form>
                                <p>Don't have an account? <Link to="/register">Create account</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Login;