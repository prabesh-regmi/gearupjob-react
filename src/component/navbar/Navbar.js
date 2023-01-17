import './style.css';
import { CNavbar } from '@coreui/react';
import { CContainer } from '@coreui/react';
import { CNavbarBrand } from '@coreui/react';
import { CNavbarToggler } from '@coreui/react';
import { CCollapse } from '@coreui/react';
import { CNavItem } from '@coreui/react';
import { CNavbarNav } from '@coreui/react';
import { CDropdownItem } from '@coreui/react';
import { CDropdownMenu } from '@coreui/react';
import { CDropdownToggle } from '@coreui/react';
import { CDropdown } from '@coreui/react';
import { useState } from "react";
import logo from '../../images/logo2.png';
import { Link } from 'react-router-dom';



function Navbar() {
    const [visible, setVisible] = useState(false);
    const [activeNav, setActiveNav] = useState('home');

    return (
        <>
            <CNavbar expand="lg" colorScheme="light" className="navbar">
                <CContainer fluid>
                    <CNavbarBrand ><Link onClick={()=>setActiveNav('home')}  to="/" ><img src={logo} alt='cannot load' height={60} /></Link></CNavbarBrand>
                    <CNavbarToggler onClick={() => setVisible(!visible)} />
                    <CCollapse className={visible ? "navbar-collapse" : "navbar-collapse flex"} visible={visible}>
                        <CNavbarNav className='CNavbarNav'>
                            <CNavItem>
                                <Link className = {activeNav === 'home' ? 'active-nav nav-link': 'nav-link'}  onClick={()=>setActiveNav('home')} to="/">
                                    Home
                                </Link>
                            </CNavItem>
                            <CNavItem>
                                <Link className = {activeNav === 'company' ? 'active-nav nav-link': 'nav-link'} onClick={()=>setActiveNav('company')} to="/company">Company</Link>
                            </CNavItem>
                            <CNavItem>
                                <Link className = {activeNav === 'job' ? 'active-nav nav-link': 'nav-link'} onClick={()=>setActiveNav('job')} to="/job">
                                    Jobs
                                </Link>
                            </CNavItem>
                            <CNavItem>
                                <Link className = {activeNav === 'contact' ? 'active-nav nav-link': 'nav-link'} onClick={()=>setActiveNav('contact')} to="/contact">
                                    Contact Us
                                </Link>
                            </CNavItem>
                        </CNavbarNav>
                        <CNavbarNav className="justify-content-end CNavbarNav">
                        <CNavItem className='right-space'>
                            <CDropdown>
                                <CDropdownToggle size='sm' color="secondary">Seeker</CDropdownToggle>
                                <CDropdownMenu >
                                    <CDropdownItem ><Link to="/user/login"></Link>Login</CDropdownItem>
                                    <CDropdownItem ><Link to="/user/register"></Link>Sign In</CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                            </CNavItem>

                            <CNavItem className='right-space'>
                            <CDropdown>
                                <CDropdownToggle size='sm' color="secondary">Company</CDropdownToggle>
                                <CDropdownMenu>
                                <CDropdownItem href="#">Login</CDropdownItem>
                                    <CDropdownItem href="#">Sign In</CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                            </CNavItem>
                        </CNavbarNav>
                    </CCollapse>
                </CContainer>
            </CNavbar>
        </>
    );
}

export default Navbar;