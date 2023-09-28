import {useRef, useEffect} from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/cover.png';
import './Header.css';

const navLinks = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/tours',
        display: 'Tours'
    },
]

const Header = () => {
    const headerReference = useRef(null);
    const stickyHeader = () => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerReference.current.classList.add('sticky-header')
            }
            else {
                headerReference.current.classList.remove('sticky-header')
            }
        })
    }

    useEffect(() => {
        stickyHeader()

        return window.removeEventListener('scroll', stickyHeader)
    })
    return <header className='header' ref={headerReference}>
        <Container>
            <Row>
                <div className="nav-wrapper d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <img src={logo} alt='' />
                    </div>
                    <div className="navigation">
                        <ul className="menu d-flex align-items-center gap-5">
                            {
                                navLinks.map((item, index) => (
                                    <li className="nav-items" key={index}>
                                        <NavLink to={item.path} className={navClass => navClass.isActive ? 'active-link' : ''}>{item.display}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="nav-right d-flex align-items-center gap-4">
                        <div className="nav-buttons d-flex align-items-center gap-4">
                            <Button className='btn secondary__btn'><Link to="/login">Login</Link></Button>
                            <Button className='btn primary__btn'><Link to="/login">Register</Link></Button>
                        </div>
                        <span className='mobile-menu'>
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Row>
        </Container>
    </header>
};

export default Header;