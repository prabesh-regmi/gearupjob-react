import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
import { Routes ,Route } from 'react-router-dom';
import Job from "./component/job/Job";
import Company from "./component/company/Company";
import ContactUs from "./component/contactUs/ContactUs";
import Footer from "./component/footer/Footer";
import JobSingle from "./component/job/JobSingle";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route  path ="/" element = {<Home/>}/>
      <Route  path ="/company" element = {<Company/>}/>
      <Route  path ="/job" element = {<Job/>}/>
      <Route  path ="/contact" element = {<ContactUs/>}/>
      <Route  path ="/job/single" element = {<JobSingle/>}/>


    </Routes>
    <hr class="my-4"/>
    <Footer/>
    </>
    
  );
}

export default App;
