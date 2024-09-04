import React, { useState } from 'react';
import '../Styles/experience.css';

const experiences = [
  { id: 1, title: "Software Engineer", company: "Optum - UnitedHealth Group", duration: "Aug 2022 - Jul 2023", description: `Played a critical role in the development of the Optum Clinical Manager, a cloud-based commercial platform for
managing wellness to chronic care, aimed at driving better outcomes and operational efficiency for payers and providers.` ,
  points: [
    `Developed and maintained a responsive web application using Angular, NestJS, and GraphQL, achieving a 40%
reduction in page loading times.`,
    `Collaborated with cross-functional teams to gather requirements, analyze user needs, and delivered optimized
software solutions, resulting in a 10% faster release cycle.`,
    `Designed and developed a comprehensive microproduct named "Message Centre" like Outlook, by creating an
intuitive user interface with integration of backend APIs.`,
    `Conducted unit testing using Jasmine and Jest frameworks, improving code quality and stability by 25% and
decreasing production defects.`,
    `Utilized SonarQube for continuous code quality inspections, reducing bugs and code smells by 40%.`,
    `Built scalable and secure APIs using Hasura Console, reducing API response times by 50%.`,
    `Performed load and performance testing using NeoLoad and Blue Jay, optimizing application performance and
reducing latency by 20%.`,
    `Participated in agile sprint planning and execution, contributing to the successful deployment of scalable web
applications that met all project timelines and performance benchmarks.`
  ]},
  { id: 2, title: "Summer Research Intern", company: "SURGE - IIT Kanpur", duration: "Jun 2021 - Aug 2021", description: `Spearheaded the automation of data collection and classification system, optimizing document management processes
and coordinating a team to deliver project ahead of schedule.`,
  points: [
    `Developed a Python-based automated service to download over 1,000 documents from Electricity Regulatory
Commissions' websites across 5 Indian States using Xpath, CSS selectors, and the Scrapy in Python.`,
    `Processed and classified the downloaded documents leveraging a Naive Bayes Classifier, achieving 90% accuracy,
and implemented a robust data logging system in MySQL Database, leading to 90% reduction in duplicate data
issues.`,
    `Coordinated and led a team of three interns, meeting challenging deadlines and completing projects 20% ahead of
projected schedule allowing time for fine-tuning and enrichment of product.`
  ] },
  { id: 3, title: "Internship Trainee", company: "Internshala Trainings", duration: "Apr 2020 - May 2020", description: `Honed my expertise in machine learning by developing and optimizing models, applying advanced data analysis and
python programming skills to improve model accuracy and performance across multiple projects.`,
  points: [
      `Trained and evaluated machine learning models using Scikit-Learn, achieving an average accuracy improvement
of 15% across multiple projects.`,
      `Visualized outcomes with seaborn and Matplotlib, leading to actionable insights that drove a 10% increase in datadriven decision-making efficiency.`,
      `Mastered key Machine Learning concepts including model building, feature engineering, and evaluation metrics,
resulting in the successful deployment of 5+ predictive models that improved model accuracy by 6%.`
  ]},
];

const Experience = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="experience-container">
      <div className="experience-header">
        <div className="rectangle"></div>
        <h1>Experience</h1>
      </div>
      
      {experiences.map((exp, index) => (
        <div key={exp.id} className={`experience-block ${selectedId === exp.id ? "active" : ""}`}
             onMouseEnter={() => setSelectedId(exp.id)}
             onMouseLeave={() => setSelectedId(null)}>
          <h2>{exp.title} @ {exp.company}</h2>
          <h4>{exp.duration}</h4>
          <p className={`experience-description ${selectedId === exp.id ? "show" : ""}`}>{exp.description}</p>
          {selectedId === exp.id && (
      <div>
        <ul>
          {exp.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
        {/* <div>
          {exp.links.map((link, idx) => (
            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
          ))}
        </div> */}
      </div>
    )}
        </div>
      ))}
    </div>
  );
};

export default Experience;
