import Heading from '../../UI/Deading';
import JobList from '../../UI/JobList';
import './topJob.css'


function TopJob() {
  return (
    <>
      <Heading>Top Job</Heading>
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

export default TopJob;