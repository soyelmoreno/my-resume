import React from 'react';
import {render} from 'react-dom';

const App = () => {
  return (
    <div className="wrapper">
      <header>
        <div className="contact">
          <div className="contact-name">CARLOS MORENO, PhD</div>
          <div className="contact-info">
            <p>
              2309 N 193<sup>rd</sup> St., Shoreline, WA 98133
              <br />
              (617) 840-9044 | soyelmoreno@gmail.com
            </p>
          </div>
        </div>
        <p>
          Versatile software engineer seeking rewarding application development
          position. Proficient with software design, development, testing and
          deployment on many platforms. Adept at analyzing complex systems and
          engineering smarter solutions. Passionate about building tools with
          superior usability that effectively handle multiple requirements.
        </p>
      </header>

      <section>
        <h2>Experience</h2>
        <ul className="jobs">
          <li className="job">
            <h3>
              <span className="company">Oracle, Inc.</span>
              <span className="city-dates">
                | Cambridge, MA | April 2013 &ndash; August 2020
              </span>
            </h3>

            <h4 className="title">Front End Web Developer</h4>
            <ul className="tasks">
              <li>
                Responsible for delivering clean, accessible HTML structure and
                CSS layouts from design wireframes in complex, high-preformance
                e-commerce applications.
              </li>
              <li>
                Principal developer for creating cutting-edge CSS page layouts,
                component layouts, and styling rules.
              </li>
              <li>
                Principal developer for adhering to accessibility guidelines and
                WAI-ARIA best practices. Proficient with JAWS.
              </li>
              <li>
                Helped create building block components for other authors to
                consume using a combination of hand-written code and Javascript
                libraries.
              </li>
              <li>
                Created working prototypes of applications, wrote technical
                documentation, gave presentations on styling and accessibility
              </li>
            </ul>
          </li>

          <li className="job">
            <h3>
              <span className="company">Daedalus Software, Inc.</span>
              <span className="city-dates">
                | Cambridge, MA | March 2011 &ndash; March 2013
              </span>
            </h3>
            <h4 className="title">Web Developer</h4>

            <ul>
              <li>
                Created custom Wordpress themes for redesign of company&rsquo;s
                website.
              </li>
              <li>
                Fixed bugs, gathered specifications, implemented new
                functionality in UI, business, and database layers of C#.NET web
                applications. Including: customized client reports, complex
                client-side user interface behaviors, refactoring database
                schema to accommodate shifting data relationships.
              </li>
              <li>
                Significantly improved application performance in a multi-user
                environment.
              </li>
              <li>
                Wrote standalone GUI tool to streamline creation of
                client-customized web forms.
              </li>
            </ul>

            <h4 className="title">Technical Support Engineer</h4>
            <ul>
              <li>
                Provided IT and technical support to clients for enterprise
                web-based biobanking applications.
              </li>
              <li>
                Performed deployments to client&rsquo;s staging and production
                servers. Key engineer in creating back-end scripts for
                deployment, testing, correcting data entry errors, and removing
                protected health information from database.
              </li>
            </ul>

            <h4 className="title">Product Manager</h4>
            <ul>
              <li>
                Managed product release scope. Gathered requirements and
                provided demos/training to clients.
              </li>
              <li>
                Wrote documentation for FDA-regulated software validation
                including functional specifications, system/integration test
                documents, and traceability matrices. Enhanced and executed test
                cases for validation.
              </li>
            </ul>
          </li>

          <li className="job">
            <h3>
              <span className="company">Independent Web Developer</span>
              <span className="city-dates">| 2002 &ndash; present</span>
            </h3>

            <ul>
              <li>
                ArturAndTailors.com: Custom-tailored suits and costumes for
                Broadway
              </li>
            </ul>
            <p className="desc">
              Converted complex Photoshop design files into website layout.
              Developed a database-driven photo gallery using modern front-end
              technologies for enhancing usability. Developed content management
              system with administration module for handling user-uploaded
              images and meta-data, featuring draggable/sortable photos and
              user-defined dropdowns.
            </p>
            <ul>
              <li>TangoDeLosMuertos.com: International tango festival</li>
            </ul>
            <p className="desc">
              Coded website from wireframe design. Developed e-commerce
              registration system (500 unique registrants) with multi-page
              client-side form. Wrote Excel macros for producing on-site
              materials.
            </p>
            <ul>
              <li>MorenoTango.com: Argentine tango dance instruction</li>
            </ul>
            <p className="desc">
              Coded website and e-commerce registration forms for dance lessons
              and tango jam events.
            </p>
            <ul>
              <li>
                Concord Field Station: Coded website for Harvard University
                research facility.
              </li>
              <li>
                CoachSandi.com, SheilaErimez.com: Websites developed from
                wireframes.
              </li>
            </ul>
          </li>

          <li className="job">
            <h3>
              <span className="company">Harvard University</span>
              <span className="city-dates">
                | Cambridge, MA | Sept 2003 &ndash; June 2010
              </span>
            </h3>
            <h4 className="title">Graduate Research Assistant</h4>

            <ul>
              <li>
                Wrote scripts, functions, and user interfaces for processing
                data and analyzing results.
              </li>
              <li>
                Designed novel experiments to assess locomotion in goats.
                Published research, presented at major conferences.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        <ul className="skills">
          <li>
            <strong>Strong:</strong> HTML5, CSS3, JavaScript, Oracle JET,
            Knockout, Require, jQuery, jQueryUI, PHP, MySQL, C#, ASP.NET, SQL,
            SSRS, MATLAB
          </li>
          <li>
            <strong>Familiar with:</strong> React, AJAX, Java, JSP, C/C++,
            Python, XML, LabVIEW, VBA, Assembly.
          </li>
          <li>
            <strong>Development Tools:</strong> Git, VS Code, JAWS, Notepad++,
            Bash, NetBeans, Microsoft Visual Studio, SVN, Wordpress, Dreamweaver
          </li>
          <li>
            <strong>Design Software:</strong> Adobe Photoshop, Illustrator,
            InDesign. Adobe Premiere.
          </li>
          <li>
            <strong>Languages/Interests:</strong> Conversational Spanish, basic
            French. Argentine tango dance/music, biomechanics.
          </li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <ul className="education">
          <li>
            <strong>Harvard University</strong> | Cambridge, MA | May 2010 |
            Ph.D., Organismic and Evolutionary Biology
          </li>
          <li>
            <strong>University of Washington</strong> | Seattle, WA | June 2001
            | B.S. Zoology. Minor: Music
          </li>
        </ul>
      </section>
    </div>
  );
};

render(React.createElement(App), document.getElementById('root'));
