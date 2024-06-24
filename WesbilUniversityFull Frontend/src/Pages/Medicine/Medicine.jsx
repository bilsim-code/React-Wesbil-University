import './Medicine.css'
import { FaArrowRight } from 'react-icons/fa'

const Medicine = () => {
  return (
    <div className='medicine'>
      <div className="medicine-welcome">
        <div className="medicine-welcome-content">
          <h2>Welcome to Wesbil Shool of Medicine</h2>
          <h3>Advancing Health, Transforming Lives</h3>
        </div>
      </div>

      <div className="hero-about">
        <div className="about-us">
          <h3>
            <span>About School</span>
            <FaArrowRight />
          </h3>
          <p>
          Welcome to the School of Medicine, where our commitment to excellence in education, research, and patient care drives our mission to advance health and transform lives. We are dedicated to training the next generation of compassionate and skilled healthcare professionals who are prepared to meet the challenges of an ever-evolving medical landscape.
          </p>
        </div>
        <div className="about-body">
          <div className="join-abouts">
            <div className="about-mission">
            <h3>
              <span>Our Mission</span>
              <FaArrowRight />
            </h3>
            <p>
            Our mission is to educate and inspire future medical leaders who are equipped with the knowledge, skills, and empathy needed to improve health outcomes and advance the field of medicine. We strive to foster a culture of innovation, collaboration, and ethical practice.
            </p>
          </div>
          <div className="about-academics">
            <h3>
              <span>Academic Excellence</span>
              <FaArrowRight />
            </h3>
            <p>
            The School of Medicine is renowned for its rigorous academic programs that combine foundational medical knowledge with hands-on clinical experience. Our curriculum is designed to provide a comprehensive education that spans the basic sciences, clinical skills, and advanced medical specialties. We offer a range of programs, including undergraduate medical education (MD), graduate medical education (residencies and fellowships), and continuing medical education for practicing physicians.
            </p>
          </div>
          </div>

          <div className="join-abouts">
            <div className="about-faculty">
            <h3>
              <span>Faculty Expertise</span>
              <FaArrowRight />
            </h3>
            <p>
            Our faculty comprises distinguished physicians, researchers, and educators who are leaders in their respective fields. They bring a wealth of clinical experience and research expertise to the classroom and clinical settings. Our faculty is dedicated to mentoring students, advancing medical knowledge through cutting-edge research, and providing the highest quality of patient care.
            </p>
          </div>
          <div className="about-experience">
            <h3>
              <span>Research and Innovation</span>
              <FaArrowRight />
            </h3>
            <p>
            The School of Medicine is at the forefront of medical research, with a strong emphasis on translational research that bridges the gap between laboratory discoveries and clinical applications. Our research initiatives focus on a wide range of areas, including cancer, cardiovascular diseases, neuroscience, infectious diseases, and public health. We are committed to fostering a research environment that encourages innovation and collaboration.
            </p>
          </div>
          </div>

          <div className="join-abouts">
            <div className="about-perspective">
            <h3>
              <span>Global Perspective</span>
              <FaArrowRight />
            </h3>
            <p>
            In today’s interconnected world, having a global perspective is crucial. Our School offers numerous international programs, including study abroad opportunities, global internships, and partnerships with top technology institutions worldwide. These experiences help our students understand and navigate the global tech landscape effectively
            </p>
          </div>
          <div className="about-community">
            <h3>
              <span>Clinical Excellence</span>
              <FaArrowRight />
            </h3>
            <p>
            Our students and faculty have access to state-of-the-art clinical facilities and diverse patient populations, providing a rich learning environment for developing clinical skills. We are affiliated with top-tier hospitals and healthcare institutions, where our students gain invaluable hands-on experience and our faculty provide exceptional patient care. We emphasize a patient-centered approach to healthcare, ensuring that our graduates are not only skilled clinicians but also compassionate caregivers.
            </p>
          </div>
          </div>
          
          
          
          <div className="about-join-us-med">
            {/* Use a background image here */}
            <div className="join-us-container-med">
              <div className="join-us-info-med">
              <h3>
                <span>Join Us</span>
                <FaArrowRight />
              </h3>
              <p>
              Whether you are a prospective student, a healthcare professional seeking advanced training, or a researcher looking to contribute to medical science, the School of Medicine offers a supportive and dynamic environment to help you achieve your goals. Join us in our mission to advance health, transform lives, and shape the future of medicine.
              </p>
            </div>
            <form className="join-us-form-med">
              <h3>Wish to be enrolled? Got a document request or a general inquiry? Report an issue?</h3>
              <input type="text" placeholder="Your name" name="name"/>
              <input type="email" placeholder="Your email" name="email"/>
              <input type="number" name="your_number" id="your-number" placeholder="Phone Number" />
              <select name="topic" id="join-us-select" >
                <option value="program">Enroll for a program</option>
                <option value="letter">Recognition/Completion letter</option>
                <option value="exemptions">Exemptions</option>
                <option value="exam">Course Work/Exam Issues</option>
              </select>
              <textarea name="message" id="message" placeholder="message">

              </textarea>
              <button>Submit</button>
            </form>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Medicine