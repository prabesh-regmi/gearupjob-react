import './heading.css'
import { CCol, CCard, CCardImage, CCardTitle, CCardBody, CCardText, CButton } from '@coreui/react'
import img from '../../images/Search.png'
import './companyList.css'



function CompanyList(props) {
    return (
        <>
            <CCol >
                <CCard className='company-card'>
                    <CCardImage orientation="top" src={img} />
                    <CCardTitle className='card-title'>{props.title}</CCardTitle>
                    <CCardText className='card-text'>
                        {props.description}
                    </CCardText>
                    <div className='card-bottom'>
                    <CButton className='btn-success' href="#">Detail</CButton>
                    <span> {props.job} Jobs</span>

                    </div>

                </CCard>
            </CCol>

        </>
    );
}

export default CompanyList;