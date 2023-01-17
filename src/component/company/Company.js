
import { CBreadcrumb, CBreadcrumbItem, CRow, CPaginationItem, CPagination } from '@coreui/react'
import { Link } from 'react-router-dom';
import img from '../../images/company.jpg'
import CompanyList from '../UI/CompanyList';
import Heading from '../UI/Deading';
import './company.css'
function Company() {
  return (
    <>
      <div className='col-md breadcumb'>
        <CBreadcrumb>
          <CBreadcrumbItem ><Link to="/">Home</Link></CBreadcrumbItem>
          <CBreadcrumbItem active>Company</CBreadcrumbItem>
        </CBreadcrumb>
      </div>

      <section class="section-hero overlay inner-page " style={{ backgroundImage: `url('${img}')` }}>
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <h1 class="text-white font-weight-bold">Top Companies</h1>
            </div>
          </div>
        </div>
      </section>
      <hr class="my-4" />


      <Heading>Top Company</Heading>
      <div className='company-container'>
        <CRow className='cRow' xs={{ cols: 'auto', gutterY: 5 }}>
          <CompanyList title={" Card Title"}
            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
            job={3}

          />
          <CompanyList title={" Card Title"}
            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
            job={3}

          />
          <CompanyList title={" Card Title"}
            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
            job={3}

          />
          <CompanyList title={" Card Title"}
            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
            job={3}

          />
          <CompanyList title={" Card Title"}
            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
            job={3}

          />
          <CompanyList title={" Card Title"}
            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
            job={3}

          />
        </CRow>
        <CPagination align="end" aria-label="Page navigation example" style={{ marginTop: '10px' }}>
          <CPaginationItem aria-label="Previous" disabled>
            <span aria-hidden="true">&laquo;</span>
          </CPaginationItem>
          <CPaginationItem active>1</CPaginationItem>
          <CPaginationItem>2</CPaginationItem>
          <CPaginationItem>3</CPaginationItem>
          <CPaginationItem aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </CPaginationItem>
        </CPagination>

      </div>

    </>
  );
}

export default Company;