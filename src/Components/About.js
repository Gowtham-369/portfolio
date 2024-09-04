import React, { useEffect, useRef } from 'react';
import '../Styles/about.css';
import SkillBox1 from '../Helpers/SkillBox1';
import SkillBox2 from '../Helpers/SkillBox2';
import SkillBox3 from '../Helpers/SkillBox3';



const About = () => {

  return (
    <div className="about-container">
      <div className="about-title">
        <div className="rectangle"></div>
        <h1>About Me</h1>
      </div>
      <div className="about-content">
        <div className="code-editor">
          <pre>
            <code>

              
              <span className="keyword">const</span> <span className="variable">aboutMe</span> = <span className="bracket">{`{`}</span> <br />
              &nbsp;&nbsp;<span className="keyword">if</span>(education): <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">degree</span>: <span className="string">"Masters in Computer Science"</span>, <br />
              
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">institution</span>: <span className="string">"University of Cincinnati"</span>, <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">GPA</span>: <span className="string">"3.9GPA"</span>, <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">Courses</span>: <span className="string">"Cloud Computing, Data Analysis, Database Management, Large-Scale Software Engineering"</span>, <br />
              
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">description</span>: <span className="string">"A diligent and highly motivated student, specializing in cutting-edge technologies in software development, machine learning, and full-stack development."</span>, <br />


              &nbsp;&nbsp;<span className="keyword">if</span>(professional Experience): <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">IndustryExperience</span>: <span className="string">"Extensive 2 years hand on experience "</span>, <br />
              
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">Impact</span>: <span className="string" >"Leveraging technology as a powerful tool to tackle complex challenges and drive innovation. My robust academic background, coupled with hands-on industry experience, attests to my passion and pursuit of excellence."</span>, <br />
              



              &nbsp;&nbsp;<span className="keyword">if</span>(careerGoals): <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">currentStatus</span>: <span className="string">"Actively seeking Full-Time opportunites"</span>, <br />
              
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">rolesInterestedIn</span>: <span className="string">"Full Stack, Software Development, Software engineer"</span>, <br />
              
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">additionalInfo</span>: <span className="string">"Eager to contribute to open-source projects, fostering collaboration within the developer community and continuously expanding my skill repertoire."</span>, <br />
              






              
              &nbsp;&nbsp;<span className="keyword">if</span>(Technologies ): <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">Tech stack </span>: <span className="string">"Please have a look below"</span>, <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">focus</span>: <span className="string">"Holistic understanding of Software Development"</span> <br />
              <span className="bracket">{`}`}</span>;
            </code>
          </pre>
        </div>
      </div>
      <div className="skills-container">
        <h2>Skills</h2>
       
        <div className="skills">
          <div className="skill">
            <h3>Programming Languages & Databases </h3>
            <div className='skill-box-container'>
            <SkillBox1/>

            </div>
            
            
          </div>
          <div className="skill">
            <h3>Machine Learning  & Cloud </h3>
            <div className='skill-box-container'>
            <SkillBox2/>

            </div>
          </div>
         
          
        </div>
        <div className="skill">
            <h3>Web Technologies & Tools</h3>
            <div className='skill-box-container'>
            <SkillBox3/>

            </div>
            
            
          </div>
       
      </div>
    </div>
  );
}

export default About;
