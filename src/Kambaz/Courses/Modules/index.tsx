export default function Modules() {
    return (
      <div>
        <button type="button"
              onClick={() => alert("Life is Good!")}
              id="wd-all-good">
        Collapse All
      </button>
      <button type="button"
              onClick={() => alert("Life is Good!")}
              id="wd-all-good">
        View Progress
      </button>
      <select id="wd-select-one-genre">
        <option value="Publish All">Publish All</option>
        <option selected value="Publish All">
            Publish All</option>
      </select>
      <button type="button"
              onClick={() => alert("Life is Good!")}
              id="wd-all-good">
        + Modules
      </button>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating Us</li>
                </ul>
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Development</li>
                  <li className="wd-content-item">Creating an HTTP Server with Node.js</li>
                  <li className="wd-content-item">Creating a React Application</li>
                </ul>
              </li>
            </ul>
            <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn How to Create User Interfaces with HTML</li>
                  <li className="wd-content-item">Deploy the assignment to Netlify</li>
                </ul>
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the HTML and the DOM</li>
                  <li className="wd-content-item">Formatting Web Content with the Headings and</li>
                  <li className="wd-content-item">Formatting Content with Lists and Tables</li>
                </ul>
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">HTML Lists and Tables</li>
                  <li className="wd-content-item">HTML Headings</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 3</div>
          </li>
        </ul>
      </div>
  );}
  