import "./Maths_Stats.css";
import { FaArrowRight } from "react-icons/fa";
const Maths_Stats = () => {
  return (
    <div className="maths-stats">
      <div className="maths-stats-welcome">
        <div className="maths-stats-welcome-content">
          <h2>Welcome to Wesbil School of Mathematics and Statistics</h2>
          <h3>Unlocking the Power of Numbers, Shaping the Future</h3>
        </div>
      </div>

      <div className="hero-about">
        <div className="about-us">
          <h3>
            <span>About School</span>
            <FaArrowRight />
          </h3>
          <p>
          Welcome to the School of Technology, where the future of innovation and excellence in education converge. Our School is dedicated to preparing the next generation of technology leaders through a robust and forward-thinking educational experience. We are committed to fostering a dynamic environment that promotes intellectual growth, creative problem-solving, and a global perspective on technology.
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
            Our mission is to develop skilled, innovative, and ethically responsible technology professionals who can navigate and drive the advancements in the tech industry. We strive to equip our students with the knowledge, skills, and mindset necessary to excel in various tech-related careers, contribute to technological advancements, and make a positive impact on society.
            </p>
          </div>
          <div className="about-academics">
            <h3>
              <span>Academic Excellence</span>
              <FaArrowRight />
            </h3>
            <p>
            At the core of the School of Technology is our steadfast commitment to academic excellence. We offer a comprehensive range of undergraduate, graduate, and professional programs designed to meet the rapidly evolving demands of the technology sector. Our curriculum covers critical areas such as computer science, information technology, cybersecurity, data science, artificial intelligence, and software engineering, ensuring our students receive a rigorous and relevant education.
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
            Our faculty consists of distinguished scholars, industry veterans, and dedicated educators who bring a wealth of expertise and real-world experience to the classroom. They are passionate about mentoring our students, conducting groundbreaking research, and contributing to the advancement of technology. Their research is regularly published in prestigious academic journals, and their insights help shape the future of technology.
            </p>
          </div>
          <div className="about-experience">
            <h3>
              <span>Real-World Experience</span>
              <FaArrowRight />
            </h3>
            <p>
            We believe in the power of experiential learning. Our students gain practical experience through internships, research projects, hackathons, and collaborations with leading tech companies. These hands-on opportunities enable our students to apply their theoretical knowledge in real-world settings, enhancing their problem-solving skills and preparing them for successful careers in technology
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
              <span>Community and Collaboration</span>
              <FaArrowRight />
            </h3>
            <p>
            The School of Technology fosters a collaborative and inclusive community where students, faculty, and alumni work together to achieve common goals. Our vibrant campus life, tech clubs, and events provide ample opportunities for personal and professional growth. We encourage our students to engage with the community, embrace diversity, and develop strong leadership and teamwork skills.
            </p>
          </div>
          </div>
          
          
          
          <div className="about-join-us-math">
            {/* Use a background image here */}
            <div className="join-us-container-math">
              <div className="join-us-info-math">
              <h3>
                <span>Join Us</span>
                <FaArrowRight />
              </h3>
              <p>
              Whether you are a prospective student, a tech professional seeking to advance your career, or a researcher aiming to contribute to the field, the School of Technology offers a supportive and dynamic environment to help you achieve your goals. Join us in our mission to drive technological innovation, foster leadership, and create a better future through technology.
              </p>
            </div>
            <form className="join-us-form-math">
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
  );
};

export default Maths_Stats;
