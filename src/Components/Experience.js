import React, { useState } from 'react';
import '../Styles/experience.css';

const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "University of Cincinnati",
    duration: "Sep 2024 - Present",
    description: `Developed and enhanced a web application by improving data management, user interface performance, and system reliability. Focused on optimizing workflows, reducing latency, and ensuring scalable deployments, while collaborating with a team to deliver efficient solutions and improve user engagement.`,
    points: [
      `💻 Designed and deployed RESTful APIs using Node.js and Express to manage MySQL data, reducing processing latency by 10% and enhancing system reliability.`,
      `🎨 Improved a React-based user interface, increasing accessibility and user engagement by 15%.`,
      `⚡ Boosted website performance by 20% through advanced caching and memoization techniques, reducing server calls and improving load times.`,
      `🔍 Diagnosed and resolved performance bottlenecks with Chrome Dev Tools, achieving a 30% improvement in page load speed and enhancing user interactions.`,
      `🎵 Integrated multiprocessing in JavaScript to enable parallel audio processing, significantly improving web app performance and responsiveness.`,
      `🚀 Orchestrated Docker containerization and deployment, ensuring scalable, reliable hosting capable of handling a 50% increase in concurrent users.`,
      `🤝 Collaborated with a team of 5 developers, managing workflows via Git and GitHub, resolving conflicts, and ensuring successful deployments in every iteration.`,
      `🧰 Optimized development workflows with Visual Studio Code, reducing debugging and issue resolution time by 30%.`
    ]
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Optum - UnitedHealth Group",
    duration: "Aug 2022 - Jul 2023",
    description: `Played a critical role in the development of the Optum Clinical Manager, a cloud-based commercial platform for
managing wellness to chronic care, aimed at driving better outcomes and operational efficiency for payers and providers.` ,
    points: [
      `💻 Architected and developed scalable microservices and Java-based applications using Java 11, Spring Boot, and Kafka, boosting system uptime by 40%.`,
      `📊 Led a team of 3 developers to design and implement GraphQL APIs, optimizing data retrieval and reducing network overhead by 10%.`,
      `🎨 Built dynamic front-end applications using React, TypeScript, and AJAX, enhancing user engagement and application performance.`,
      `🧪 Improved code quality by conducting unit and integration testing with JUnit and Jest, reducing defects by 30%.`,
      `🚀 Streamlined deployment workflows by automating CI/CD pipelines with Jenkins, GitLab, Docker, and Kubernetes, cutting deployment time by 5%.`,
      `⚙️ Automated deployment workflows using Ansible scripts, boosting productivity and minimizing manual effort.`,
      `☁️ Optimized cloud infrastructure with AWS services (Lambda, S3, RDS, Cloud Formation, DynamoDB), reducing operational costs by 10%.`,
      `🔗 Implemented secure API management using AWS API Gateway, achieving 30% faster response times.`,
      `📦 Managed containerized application hosting on Amazon EKS and improved workflows with Gradle and Git, ensuring seamless source code management.`,
      `🤝 Collaborated cross-functionally with product managers, analysts, and developers to translate business requirements into precise technical solutions, ensuring timely and successful project delivery.`,
      `🔍 Enhanced development efficiency by leveraging advanced debugging tools like IntelliJ IDEA, ensuring faster issue resolution.`
    ]
  },
  {
    id: 3,
    title: "Full Stack Software Engineer",
    company: "Citi Group",
    duration: "Apr 2021 - Jul 2022",
    description: "Contributed to the development of enterprise-level banking applications by improving system performance, data processing efficiency, and user experience. Focused on optimizing workflows, enhancing system reliability, and collaborating with cross-functional teams to deliver high-quality, scalable solutions aligned with business requirements.",
    points: [
      `💻 Developed and optimized enterprise-level applications using Java 8, improving transaction processing and increasing Net Promoter Score (NPS) by 25%.`,
      `⚡  Enhanced application performance with Spring MVC, Hibernate, and JDBC, reducing database response times by 20%.`,
      `🔗 Implemented SOAP-based architecture with Spring Web, ensuring seamless internal communication and platform interoperability.`,
      `🎨 Designed responsive UI components using Angular and jQuery, improving user experience and functionality.`,
      `📊 Redesigned dataflow APIs with MongoDB, achieving a 15% improvement in data retrieval speeds.`,
      `🧪 Improved reliability and integrity by conducting unit and integration testing with TestNG and Selenium.`,
      `🚀 Streamlined deployment workflows with Maven and Bitbucket, enhancing version control and collaboration efficiency.`,
      `☁️ Leveraged Microsoft Azure services (SQL Databases, Functions, App Service, Blob Storage) to boost scalability and system performance by 15%.`,
      `📈 Monitored system performance with Grafana dashboards, reducing downtimes by 10% and enhancing reliability.`,
      `🤝 Collaborated in architectural design discussions and conducted code reviews, fostering team productivity and delivering high-quality solutions.`
    ]
  },
  {
    id: 4,
    title: "Full Stack Software Developer",
    company: "eBay",
    duration: "Jun 2020 - Mar 2021",
    description: "Developed secure and scalable applications by optimizing back-end services and enhancing front-end performance using modern technologies. Collaborated with cross-functional teams to deliver business-driven solutions, ensuring code quality, system reliability, and seamless deployments through Agile practices.",
    points: [
      `💻 Developed scalable and secure Java applications for the eBay’s eCommerce platform using Java, Spring, and RESTful APIs, increasing user satisfaction by 15%.`,
      `🤝 Collaborated with designers and product managers to deliver solutions aligned with business requirements, following Agile and Scrum methodologies.`,
      `🔍 Applied Object-Oriented Programming (OOP) principles to create reusable, maintainable code adhering to industry best practices.`,
      `🎨 Enhanced front-end usability by revamping UI elements with HTML5, CSS3, and ES6 JavaScript, reducing load times by 20%.`,
      `📊 Optimized database performance by integrating PostgreSQL and designing efficient RESTful APIs.`,
      `🧪 Improved code quality by conducting unit testing with JUnit and Mockito, reducing defects by 15%.`,
      `📦 Promoted effective team collaboration through Git-based version control, ensuring smooth workflows and code integrity.`,
      `🚀 Deployed backend applications on Apache Tomcat Server, ensuring seamless hosting and performance.`
    ]
  },
  {
    id: 5,
    title: "Summer Research Intern",
    company: "SURGE - IIT Kanpur",
    duration: "Jun 2021 - Aug 2021",
    description: `Spearheaded the automation of data collection and built a scalable data management system, optimizing document management processes
and coordinating a team to deliver project ahead of schedule.`,
    points: [
      `🌐 Developed a responsive web platform for the Central Electricity Regulatory Commission using Java Spring Boot, Angular, jQuery, and Bootstrap, significantly improving user engagement and accessibility for thousands of stakeholders.`,
      `👥 Led a team of three interns to build a data management system utilizing Amazon S3 for scalable document storage and MongoDB for metadata handling, enhancing document retrieval speed by 30% and effectively managing version control for over 5,000 documents.`,
      `✅ Achieved 95% test coverage by implementing comprehensive unit and integration tests using JUnit and Mockito, ensuring high code reliability and reducing production defects.`,
      `🚀 Optimized platform performance and delivery through agile methodologies, ensuring on-time project completion and seamless user experience while meeting all regulatory compliance standards.`
    ]
  },
  {
    id: 6, title: "Internship Trainee",
    company: "Internshala Trainings",
    duration: "Apr 2020 - May 2020",
    description: `Honed my expertise in machine learning by developing and optimizing models, applying advanced data analysis and
python programming skills to improve model accuracy and performance across multiple projects.`,
    points: [
      `🤖 Trained and tested machine learning models using Scikit-Learn, and visualized outcomes with Matplotlib, driving data-driven insights and enhancing decision-making processes.`,
      `📊 Mastered key Machine Learning concepts such as model building, feature engineering, and evaluation metrics through hands-on practical applications, strengthening foundational knowledge and skills.`,
      `🐍 Applied advanced technical skills in Python for data manipulation and model optimization across multiple projects, delivering impactful and effective machine learning solutions.`
    ]
  },
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
