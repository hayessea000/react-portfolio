import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Resume(props) {
    const skills = [
        'Proficient in front-end development technologies such as HTML 5, CSS 3, and JavaScript, with a focus on creating responsive and user-friendly medium to large scale web/mobile interfaces.',
        'Strong understanding of back-end development frameworks, including Node, React, and Express, for building robust server-side applications.',
        'Experience with database management systems like MySQL and MongoDB, including data modeling, querying, and integration.',
        'Knowledge of version control systems such as Git, enabling efficient collaboration and code management within development teams.',
        'Familiarity with front-end frameworks/libraries like React.js and PWAs, facilitating the creation of dynamic and interactive web applications.',
        'Solid understanding of RESTful API design principles and experience in building and consuming APIs for seamless integration between front-end and back-end components.',
        'Proficient in working with serverless architectures, utilizing cloud platforms like Heroku to develop scalable and cost-effective applications.',
        'Strong problem-solving and debugging skills, with the ability to identify and resolve issues efficiently to ensure optimal application performance.',
        'Effective communication and collaboration abilities, enabling seamless teamwork and coordination with cross-functional stakeholders, including designers and product managers.',
        'Continuous learner with a passion for staying up-to-date with industry trends and emerging technologies in full-stack development.'
    ]

    return (
        <div className="shiftD">
            <div className="row w-100">
                <div className="col-lg-5 p-5">
                    <Carousel variant="dark" style={{ width: "75%" }}>
                        <Carousel.Item interval={6000}>
                            <img
                                className="d-block w-100 rounded"
                                src="./images/Resume1.PNG"
                                alt="resume page one"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                            <img
                                className="d-block w-100 rounded"
                                src="./images/Resume2.PNG"
                                alt="resume page two"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <a href="./images/resume.pdf" download>Download resume here</a>
                </div>
                <div className="text-light col-lg-5 p-5 text-center">
                    <h2>Skills</h2>
                    <ul className="text-light text-start">
                        {skills.map(skill => (
                            <li>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume