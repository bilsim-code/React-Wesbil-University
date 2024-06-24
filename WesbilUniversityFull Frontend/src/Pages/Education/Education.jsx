import './Education.css'
import { FaArrowRight } from 'react-icons/fa'

const Education = () => {
  return (
    <div className='education'>
      <div className="education-welcome">
        <div className="education-welcome-content">
          <h2>Welcome to Wesbil School of Education</h2>
          <h3>Inspiring Educators, Transforming Futures</h3>
        </div>
      </div>

      <div className="hero-about">
        <div className="about-us">
          <h3>
            <span>About School</span>
            <FaArrowRight />
          </h3>
          <p>
          Welcome to the School of Education, where we are dedicated to inspiring educators and transforming futures through exceptional teaching, research, and community engagement. Our commitment is to prepare passionate, knowledgeable, and innovative educators who are equipped to make a positive impact in the lives of their students and the broader educational landscape.
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
            Our mission is to develop educators who are not only skilled and knowledgeable but also empathetic and responsive to the diverse needs of students. We strive to foster a culture of excellence, equity, and inclusion in education.
            </p>
          </div>
          <div className="about-academics">
            <h3>
              <span>Academic Excellence</span>
              <FaArrowRight />
            </h3>
            <p>
            At the heart of the School of Education is our commitment to academic excellence. We offer a wide range of undergraduate, graduate, and doctoral programs designed to prepare educators for success in various educational settings. Our curriculum integrates theory with practice, providing students with the foundational knowledge and practical skills necessary to excel in teaching, administration, counseling, and educational research.
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
            Our faculty is composed of distinguished educators, researchers, and practitioners who bring a wealth of experience and knowledge to our programs. They are dedicated to mentoring our students, conducting groundbreaking research, and contributing to the advancement of educational practices and policies. Our faculty’s research is frequently published in leading academic journals and informs best practices in education.
            </p>
          </div>
          <div className="about-experience">
            <h3>
              <span>Real-World Experience</span>
              <FaArrowRight />
            </h3>
            <p>
            We believe in the importance of experiential learning. Our students benefit from extensive field experiences, including student teaching placements, internships, and community-based projects. These hands-on opportunities allow our students to apply their learning in real-world settings, develop practical teaching skills, and build professional networks.
            </p>
          </div>
          </div>

          <div className="join-abouts">
            <div className="about-perspective">
            <h3>
              <span>Commitment to diversity and Inclusion</span>
              <FaArrowRight />
            </h3>
            <p>
            We are committed to fostering an inclusive and equitable educational environment. Our programs emphasize the importance of culturally responsive teaching, social justice, and advocacy. We prepare our students to create inclusive classrooms that respect and celebrate diversity, and to advocate for policies and practices that promote equity in education.
            </p>
          </div>
          <div className="about-community">
            <h3>
              <span>Community Engagement</span>
              <FaArrowRight />
            </h3>
            <p>
            We believe in the power of community engagement and service. Our School is actively involved in partnerships with local schools, educational organizations, and community groups. These collaborations provide our students with opportunities to contribute to the community, address local educational needs, and gain valuable experience in diverse educational settings.
            </p>
          </div>
          </div>
          
          
          
          <div className="about-join-us-education">
            {/* Use a background image here */}
            <div className="join-us-container-education">
              <div className="join-us-info-education">
              <h3>
                <span>Join Us</span>
                <FaArrowRight />
              </h3>
              <p>
              Whether you are a prospective student, a current educator seeking advanced training, or a researcher aiming to contribute to the field of education, the School of Education offers a supportive and dynamic environment to help you achieve your goals. Join us in our mission to inspire educators, transform futures, and shape the future of education.
              </p>
            </div>
            <form className="join-us-form-education">
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

export default Education