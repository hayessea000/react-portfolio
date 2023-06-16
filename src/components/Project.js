
function Project(props) {
    const projects = [
        { id: "1", title: "Discussion Board", image: "discussionBoardImage.png", link: "https://discussion-board-hayessea000.herokuapp.com/", repo: "https://github.com/hayessea000/discussion-board" },
        { id: "2", title: "What To Eat", image: "whattoeat.png", link: "https://hayessea000.github.io/what-to-eat", repo: "https://github.com/hayessea000/what-to-eat" },
        { id: "3", title: "Gradebook", image: "gradebook-homepage.png", link: "https://umb-gradebook.herokuapp.com/", repo: "https://github.com/JoshuaMartinez1014/gradebook" },
        { id: "4", title: "Weather Forecast", image: "weather-forecast.png", link: "https://hayessea000.github.io/weather-forecast/", repo: "https://github.com/hayessea000/weather-forecast" },
        { id: "5", title: "J.A.T.E", image: "jateimage.png", link: "https://jate-hayessea000.herokuapp.com/", repo: "https://github.com/hayessea000/JATE" },
        { id: "6", title: "Tech Blog", image: "techblogimage.png", link: "https://tech-blog-hayessea000.herokuapp.com/", repo: "https://github.com/hayessea000/tech-blog" },
        { id: "7", title: "E-commerce Back-end", image: "e-commerce.png", link: "n/a", repo: "https://github.com/hayessea000/e-commerce-back-end" },
        { id: "8", title: "Readme Generator", image: "readmeGen.png", link: "n/a", repo: "https://github.com/hayessea000/readme-generator" },
        { id: "9", title: "Todo Calendar", image: "todo-calendar.png", link: "https://hayessea000.github.io/todo-calendar/", repo: "https://github.com/hayessea000/todo-calendar" }
    ]
    return (
        <div className="shiftD d-flex flex-wrap justify-content-around">
            {projects.map(project => (
                <div className="card m-5 projectCard" >
                    <img style={{border: "2px solid #333", height: "15rem"}} className="card-img-top" src={"./images/"+project.image} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                    </div>
                    <div className="card-body d-flex">
                        {project.link==="n/a"?(<p style={{marginRight: "5px"}}>Nothing Deployed</p>):(<a href={project.link} className="card-link">Deployed App</a>)}
                        <a href={project.repo} className="card-link">Repo Link</a>
                    </div>
                {/* </div> */}
                {/* <div className="text-light" key={project.title} style={{border: "1px solid #333"}}>
                    <p key={project.title}>{project.title}</p>
                    <img style={{width: "10%"}} key={project.image} src= {"./images/"+project.image} alt=""/>
                    <p key={project.link}><a href={project.link}>Deployed App</a></p>
                    <p key={project.repo}><a href={project.repo}>Repo Link</a></p>*/}
                </div>
            ))}
        </div>
    )
}

export default Project