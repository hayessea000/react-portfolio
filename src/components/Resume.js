
function Resume(props) {
    const skills = [
        'Html',
        'Css',
        'Javascript',
        'Mysql',
        'Mongo',
        'React',
        'Express'
    ]

    return (
        <div className="shiftD">
            <div className="row w-100">
                <div className="col-5 p-5">
                    <div>
                        <img className="figure-img img-fluid rounded" style={{ width: "75%" }} src="./images/resumesample.png" alt="resume" />
                    </div>
                    <a href="./images/resume.pdf" download>Download resume here</a>
                </div>
                <div className="text-light col-5 p-5 text-center">
                    <h2>Proficiencies</h2>
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