import "./Business.css";
import { FaArrowRight } from "react-icons/fa";

const Business = () => {
  return (
    <div className="business">
      <div className="hero-business">
        <div className="hero-business-content">
          <h1>Welcome to Wesbil School of Business</h1>
          <h2>Where Dreams are realized</h2>
        </div>
      </div>

      <div className="hero-about">
        <div className="about-us">
          <h3>
            <span>About School</span>
            <FaArrowRight />
          </h3>
          <p>
            Welcome to the School of Business, where innovation meets excellence
            in education. At our School, we are dedicated to shaping the
            business leaders of tomorrow through a comprehensive and dynamic
            educational experience. Our commitment is to provide a nurturing
            environment that fosters intellectual growth, ethical
            decision-making, and a global perspective.
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
              Our mission is to cultivate knowledgeable, skilled, and ethically
              responsible business professionals who can navigate the
              complexities of the modern business world. We aim to equip our
              students with the tools they need to excel in diverse careers,
              drive economic growth, and make a positive impact on society.
            </p>
          </div>
          <div className="about-academics">
            <h3>
              <span>Academic Excellence</span>
              <FaArrowRight />
            </h3>
            <p>
              At the heart of the School of Business is our unwavering
              commitment to academic excellence. Our diverse range of
              undergraduate, graduate, and executive education programs are
              designed to meet the evolving needs of the business industry. We
              offer specialized courses in areas such as finance, marketing,
              entrepreneurship, management, and international business, ensuring
              that our students receive a well-rounded education that is both
              rigorous and relevant.
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
              Our faculty comprises distinguished scholars, industry experts,
              and dedicated educators who bring a wealth of knowledge and
              experience to the classroom. They are committed to mentoring our
              students, conducting cutting-edge research, and contributing to
              the advancement of business practices. Our faculty’s research is
              frequently published in leading academic journals, and their
              insights help shape the future of business.
            </p>
          </div>
          <div className="about-experience">
            <h3>
              <span>Real-World Experience</span>
              <FaArrowRight />
            </h3>
            <p>
              We believe in the power of experiential learning. Our students
              benefit from numerous opportunities to apply their knowledge in
              real-world settings through internships, consulting projects, and
              collaborative partnerships with industry leaders. Our strong ties
              to the business community provide students with invaluable
              networking opportunities and a competitive edge in the job market.
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
              In today’s interconnected world, having a global perspective is
              crucial. Our School offers numerous international programs,
              including study abroad opportunities, international internships,
              and collaborations with leading business schools worldwide. These
              experiences enable our students to understand and navigate the
              global business landscape effectively.
            </p>
          </div>
          <div className="about-community">
            <h3>
              <span>Community and Collaboration</span>
              <FaArrowRight />
            </h3>
            <p>
              The School of Business fosters a collaborative and inclusive
              community where students, faculty, and alumni work together to
              achieve common goals. Our vibrant campus life, student
              organizations, and events provide ample opportunities for personal
              and professional growth. We encourage our students to engage with
              the community, embrace diversity, and develop strong leadership
              skills
            </p>
          </div>
          </div>
          
          
          
          <div className="about-join-us-business">
            {/* Use a background image here */}
            <div className="join-us-container-business">
              <div className="join-us-info-business">
              <h3>
                <span>Join Us</span>
                <FaArrowRight />
              </h3>
              <p>
                Whether you are a prospective student, a business professional
                seeking to advance your career, or a researcher looking to
                contribute to the field, the School of Business offers a
                supportive and dynamic environment to help you achieve your
                goals. Join us in our mission to drive innovation, foster
                leadership, and create a better future for businesses and
                communities worldwide
              </p>
            </div>
            <form className="join-us-form-business">
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

export default Business;
