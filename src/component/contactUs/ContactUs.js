
import './contact.css'
function ContactUs() {
  return (
    <>
      <div class="map-section">
        <iframe title="map" style={{ border: '0', width: '100%', height: '350px' }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.359276981222!2d85.28330917588335!3d27.69906977346677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb185c1fcc3ec9%3A0xf8c5026f6458e0ef!2sKathmandu%20Engineering%20College!5e0!3m2!1sen!2snp!4v1600054993738!5m2!1sen!2snp"
          frameborder="0" allowfullscreen></iframe>
      </div>
      <hr class="my-4" />
      <section class="contact">
        <div class="container">

            <div class="col-lg-12">
              <div class="info-wrap">
                <div class=" info-container row">
                  <div class="col-lg-4 info">
                    <i class="fab fa-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>A108 Adam Street<br/>New York, NY 535022</p>
                  </div>

                  <div class="col-lg-4 info mt-4 mt-lg-0">
                    <i class="fas fa-envelope-square"></i>
                    <h4>Email:</h4>
                    <p>info@example.com<br/>contact@example.com</p>
                  </div>

                  <div class="col-lg-4 info mt-4 mt-lg-0">
                    <i class="icofont-phone"></i>
                    <h4>Call:</h4>
                    <p>+1 5589 55488 51<br/>+1 5589 22475 14</p>
                  </div>
                </div>
              </div>
            </div>

          <div class="row mt-5 justify-content-center" data-aos="fade-up">
            <div class="col-lg-10">
              <form method="POST" role="form" class="email-form">
                <div class="form-row">
                  <div class="col-md-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div class="validate"></div>
                  </div>
                  <div class="col-md-6 form-group">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div class="validate"></div>
                  </div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div class="validate"></div>
                </div>
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                  <div class="validate"></div>
                </div>
                <div class="mb-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>

          </div>

        </div>
      </section>

    </>
  );
}

export default ContactUs;