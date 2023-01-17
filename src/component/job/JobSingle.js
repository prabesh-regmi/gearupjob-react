

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'
import { Link } from 'react-router-dom';
import img from '../../images/hero_1.jpg'
import thumbnail from '../../images/Thumbnail.jpg'
import Heading from '../UI/Deading';
import JobList from '../UI/JobList';
import './jobSingle.css'




function JobSingle() {
    return (
        <>
            <div className='col-md breadcumb'>
                <CBreadcrumb style={{ "--cui-breadcrumb-divider-color": "white" }}>
                    <CBreadcrumbItem ><Link className='text-white' to="/"><strong>Home</strong></Link></CBreadcrumbItem>
                    <CBreadcrumbItem ><Link className='text-white' to="/job"><strong>Job</strong></Link></CBreadcrumbItem>
                    <CBreadcrumbItem className='text-white' active>Title</CBreadcrumbItem>
                </CBreadcrumb>

            </div>

            <section class="section-hero overlay inner-page " style={{ backgroundImage: `url('${img}')` }}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-7">
                            <h1 class="text-white font-weight-bold">Jobs</h1>
                        </div>
                    </div>
                </div>
            </section>
            <hr class="my-4" />


            <section class="site-section">
                <div class="container">
                    <div class="row align-items-center mb-5">
                        <div class="col-lg-8 mb-4 mb-lg-0">
                            <div class="d-flex align-items-center">
                                <div class="border p-2 d-inline-block mr-3 rounded">
                                    {/* <img class="circular_landscape" src="{{ q.Company_Username.profile_pic.url }}" width="100" height="90" alt="can not load"/> */}
                                    <i id='ip' class="fas fa-user"></i>

                                </div>
                                <div>
                                    <h2>Title</h2>
                                    <div>
                                        <span class="ml-0 mr-2 mb-2"><span class="icon-briefcase mr-2"></span>Company name</span>
                                        <span class="m-2"><span class="icon-room mr-2"></span>Location</span>

                                        <span class="bg-warning text-white badge py-2 px-3">Full Time</span>

                                        {/* 
                                            {% if q.job_type == 'Full Time' %}
                <span class="bg-warning text-white badge py-2 px-3">Full Time</span>
                {% else %}
                {% if q.job_type == 'Freelance' %}
                <span class="bg-info text-white badge py-2 px-3">Freelance</span>
                {% else %}
                {% if q.job_type == 'Internship' %}
                <span class="bg-secondary text-white badge py-2 px-3">Internship</span>
                {% else %}
                {% if q.job_type == 'Temporary' %}
                <span class="bg-danger text-white badge py-2 px-3">Temporary</span>
                {% else %}
                <span class="bg-primary text-white badge py-2 px-3">Part Time</span>
                {% endif %}
                {% endif %}
                {% endif %}
                {% endif %} */}



                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="row">
                                <div class="col-4">
                                    <Link to="#" class="btn btn-block btn-warning btn-md">Edit</Link>
                                </div>
                                <div class="col-4">
                                    <button id="myBtn" type="button" class="btn btn-danger ">Delete</button>
                                </div>
                                <div class="col-4">
                                    <Link to="#" class="btn btn-block btn-primary btn-md">Apply</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="mb-5">
                                <figure class="mb-5">
                                    {/* {% if q.image %} */}
                                    {/* <img src="{{ q.image.url }}" alt="can not load" height="500" width="100%"/> */}
                                    {/* {% else %} */}
                                    <img src={`${thumbnail}`} alt="can not load" className='thumnail-img' />
                                    {/* {% endif %} */}
                                </figure>
                                <h3 class="h5 d-flex align-items-center mb-4 text-primary"><span class="icon-align-left mr-3"><i
                                    class="fas fa-align-left"></i></span>Job
                                    Description</h3>
                                <p>Description</p>
                            </div>
                            <div class="mb-5">
                                <h3 class="h5 d-flex align-items-center mb-4 text-primary "><span><i class="fas fa-rocket"></i></span>
                                    <p class="m"></p>Responsibilities
                                </h3>
                                <ul class="list-unstyled m-0 p-0">
                                    <li class="d-flex align-items-start mb-2"><span class="icon-check_circle mr-2 text-muted"><i
                                        class="fas fa-check_circle"></i></span><span>Responsibilities</span>
                                    </li>


                                </ul>
                            </div>

                            <div class="mb-5">
                                <h3 class="h5 d-flex align-items-center mb-4 text-primary "><span> <i class="fas fa-book"></i></span>
                                    <p class="m"></p>Experience
                                </h3>
                                <ul class="list-unstyled m-0 p-0">
                                    <li class="d-flex align-items-start mb-2"><span class="icon-check_circle mr-2 text-muted"></span><span>Experience</span>
                                    </li>

                                </ul>
                            </div>

                        </div>
                        <div class="col-lg-4">
                            <div class="bg-light p-3 border rounded mb-4">
                                <h3 class="text-success  mt-3 h5 pl-3 mb-3 ">Job Summary</h3>
                                <ul class="list-unstyled pl-3 mb-0">
                                    <li class="mb-2"><strong class="text-black">Published
                                        on:</strong> Published
                                        on
                                    </li>
                                    <li class="mb-2"><strong class="text-black">Category:</strong> Category</li>
                                    {/* {% if q.vacancy %} */}
                                    <li class="mb-2"><strong class="text-black">Vacancy:</strong> Vacancy</li>
                                    {/* {% else %} */}
                                    <li class="mb-2"><strong class="text-black">Vacancy:</strong> Not mention</li>
                                    {/* {% endif %} */}
                                    <li class="mb-2"><strong class="text-black">Employment
                                        Status:</strong> Employment
                                        Status</li>
                                    <li class="mb-2"><strong class="text-black">Experience:</strong> Experience</li>
                                    <li class="mb-2"><strong class="text-black">Job Location:</strong> Job Location</li>
                                    <li class="mb-2"><strong class="text-black">Salary:</strong>{/*{% if q.salary %} {{ q.Salary }} {% else %} */}As
                                        per Company Rule</li>
                                    <li class="mb-2"><strong class="text-black">Gender:</strong> Gender</li>
                                    <li class="mb-2"><strong class="text-black">Application
                                        Deadline:</strong> ApplicationDeadline</li>
                                </ul>
                            </div>



                        </div>
                    </div>
                </div>
            </section>
            <hr class="my-4"></hr>

            <Heading>Related Jobs</Heading>
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

export default JobSingle;