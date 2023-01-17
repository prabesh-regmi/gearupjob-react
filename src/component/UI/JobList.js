import './jobList.css'
import { CCard, CCardBody, CBadge, CButton } from '@coreui/react'
import { Link } from 'react-router-dom';
import React, { useNavigate } from "react";




function JobList(props) {
    // const navigate = useNavigate();
    function navigateToSingleJob(){
        // navigate('/job/single', { state: { id: 7, color: 'green' } });
    };
    return (
        <>
            <CCard className='card-container'>
                <CCardBody className='card-body'>
                    <div >
                        <div className='card-item' >
                            <h2> {props.title}</h2>
                            <CBadge className='margin-left' color="secondary">New</CBadge>
                        </div>
                        <div className='card-item'>
                            <Link to='/company'>{props.company}</Link>
                            <span className='margin-left'>{props.address}</span>
                        </div>
                    </div>

                    <div className='card-item'>

                        <CBadge color="success">{props.views} Views</CBadge>
                        <Link to="#" onClick={navigateToSingleJob} className="btn btn-sm btn-primary  margin-left">Detail</Link>

                    </div>

                </CCardBody>
            </CCard>
        </>
    );
}

export default JobList;