import Heading from '../../UI/Deading';
import './topCompany.css'
import { CRow } from '@coreui/react'
import CompanyList from '../../UI/CompanyList';


function TopCompany() {
  return (
    <>
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
      </div>




    </>
  );
}

export default TopCompany;