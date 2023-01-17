
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png'
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

import './footer.css'
function Footer() {
	return (
		<footer className='footer' style={{backgroundColor:"#011627",color:"white"}}>
			<div className="container">
					<img id="logo" src={logo} alt="can not load" height="60" width="200" style={{ background: 'white' }} />
					<div className="float-right">
						<div >
							<h4><strong>Connect</strong></h4>
						</div>
						<div id="social"><Link className="facebookBtn smGlobalBtn" to="#" style={{ margiLeft: "20px", color: '#0F90EC' }}><FaFacebook /></Link>
							<Link className="twitterBtn smGlobalBtn" to="#" style={{ color: '#1DA1F2' }}><FaTwitter /></Link>
							<Link className="googleplusBtn smGlobalBtn" to="#" style={{ color: '#DB5441' }}><FaGooglePlusG /></Link>
							<Link className="linkedinBtn smGlobalBtn" to="#" style={{ color: '#0077B5' }}><FaLinkedin /></Link>
						</div>
					</div>
					<hr className="light-100" />
				<div className="row">
					<div className="col-md">
						<h2 className="ftco-heading-2">About</h2>
						<hr className="light-100" />
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
					</div>
					<div className="col-md">
						<div className="ftco-footer-widget mb-4">
							<h2 className="ftco-heading-2">Employers</h2>
							<hr className="light-100" />
							<ul className="list-unstyled">
								<li><Link to="#" >Register</Link></li>
								<li><Link to="#" >How it works</Link></li>
								<li><Link to="#" >Post a Job</Link></li>
								<li><Link to="#" >Advance Skill Search</Link></li>
								<li><Link to="#" >Recruiting Service</Link></li>
								<li><Link to="#" >Blog</Link></li>
								<li><Link to="#" >Faq</Link></li>
							</ul>
						</div>
					</div>
					<div className="col-md">
						<div className="ftco-footer-widget mb-4 ml-md-4">
							<h2 className="ftco-heading-2">Workers</h2>
							<hr className="light-100" />
							<ul className="list-unstyled">
								<li><Link to="#" >How it works</Link></li>
								<li><Link to="#" >Register</Link></li>
								<li><Link to="#" >Post Your Skills</Link></li>
								<li><Link to="#" >Job Search</Link></li>
								<li><Link to="#" >Emploer Search</Link></li>
							</ul>
						</div>
					</div>
					<div className="col-md">
							<h2 className="ftco-heading-2">Have a Querry?</h2>
							<hr className="light-100" />
							<div className="block-23 mb-3">
								<ul>
									<li><span className="icon icon-map-marker"></span><span className="text">Kalanki ,Kathmandu,Nepal</span></li>
									<li><Link to="#"><span className="icon icon-phone"></span><span className="text">+977 9841999999</span></Link></li>
									<li><Link to="#"><span className="icon icon-envelope"></span><span className="text">gearupjob@gmail.com</span></Link></li>
								</ul>
							</div>
					</div>
				</div>
					<hr className="light-100" />
					<div className="col-md text-center">
						<p>
							Copyright &copy;<script>
								document.write(new Date().getFullYear());
							</script> All rights reserved | gearupjob.com
						</p>
					</div>
			</div>
		</footer>
	);
}

export default Footer;