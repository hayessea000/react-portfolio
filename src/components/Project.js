
function Project(props) {
    const projects = [
        { id: "1", title: "1", image: "pic 1", link: "link1", repo: "repo1" },
        { id: "2",  title: "2", image: "pic 2", link: "link2", repo: "repo2" },
        { id: "3",  title: "3", image: "pic 3", link: "link3", repo: "repo3" },
        { id: "4",  title: "4", image: "pic 4", link: "link4", repo: "repo4" },
        { id: "5",  title: "5", image: "pic 5", link: "link5", repo: "repo5" },
        { id: "6",  title: "6", image: "pic 6", link: "link6", repo: "repo6" }
    ]
    return (
        <>
            {projects.map(project => (
                <div key={project.title} style={{border: "1px solid #333"}}>
                    <p key={project.title}>{project.title}</p>
                    <p key={project.image}>{project.image}</p>
                    <p key={project.link}>{project.link}</p>
                    <p key={project.repo}>{project.repo}</p>
                </div>
            ))}
        </>
    )
}

export default Project