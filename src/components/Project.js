
function Project(props) {
    const projects = [
        { id: "1", title: "Discussion Board", image: "pic 1", link: "https://discussion-board-hayessea000.herokuapp.com/", repo: "https://github.com/hayessea000/discussion-board" },
        { id: "2",  title: "What To Eat", image: "pic 2", link: "https://hayessea000.github.io/what-to-eat", repo: "https://github.com/hayessea000/what-to-eat" },
        { id: "3",  title: "Tech Blog", image: "pic 3", link: "https://tech-blog-hayessea000.herokuapp.com/", repo: "https://github.com/hayessea000/tech-blog" },
        { id: "4",  title: "Weather Forecast", image: "pic 4", link: "https://hayessea000.github.io/weather-forecast/", repo: "https://github.com/hayessea000/weather-forecast" },
        { id: "5",  title: "J.A.T.E", image: "pic 5", link: "https://jate-hayessea000.herokuapp.com/", repo: "https://github.com/hayessea000/JATE" },
        { id: "6",  title: "Todo Calendar", image: "pic 6", link: "https://hayessea000.github.io/todo-calendar/", repo: "https://github.com/hayessea000/todo-calendar" }
    ]
    return (
        <>
            {projects.map(project => (
                <div key={project.title} style={{border: "1px solid #333"}}>
                    <p key={project.title}>{project.title}</p>
                    <p key={project.image}>{project.image}</p>
                    <p key={project.link}><a href={project.link}>Deployed App</a></p>
                    <p key={project.repo}><a href={project.repo}>Repo</a></p>
                </div>
            ))}
        </>
    )
}

export default Project