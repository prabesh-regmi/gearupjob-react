
import { CBreadcrumb, CBreadcrumbItem} from '@coreui/react'
import Heading from '../UI/Deading';
import img from '../../images/job.jpg'
import { Link } from 'react-router-dom';
import JobList from '../UI/JobList';


function Job() {
    return (
      <>
      <div className='col-md breadcumb'>
      <CBreadcrumb style={{"--cui-breadcrumb-divider-color": "white"}}>
        <CBreadcrumbItem ><Link className='text-white' to="/"><strong>Home</strong></Link></CBreadcrumbItem>
        <CBreadcrumbItem className='text-white' active>Job</CBreadcrumbItem>
      </CBreadcrumb>

      </div>
      
      <section class="section-hero overlay inner-page " style={{backgroundImage: `url('${img}')`}}>
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <h1 class="text-white font-weight-bold">Jobs</h1>
            </div>
          </div>
        </div>
      </section>
      <hr class="my-4"/>

  
      <Heading>Jobs</Heading>
      <JobList title={'Software Developer'}
        company={"Facebook"}
        address={'kalanki kathmandu'}
        views={10}
      />
      <JobList title={'Software Developer'}
        company={"Facebook"}
        address={'kalanki kathmandu'}
        views={10}
      />
      <JobList title={'Software Developer'}
        company={"Facebook"}
        address={'kalanki kathmandu'}
        views={10}
      />
      <JobList title={'Software Developer'}
        company={"Facebook"}
        address={'kalanki kathmandu'}
        views={10}
      />
      <JobList title={'Software Developer'}
        company={"Facebook"}
        address={'kalanki kathmandu'}
        views={10}
      />
      </>
    );
  }
  
  export default Job;