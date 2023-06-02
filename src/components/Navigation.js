
function Navigation(props){

    function handleTabClick(e) {
        e.preventDefault()
        const navLink= e.target.dataset.link
        switch(navLink){
            case "aboutMe":
                props.setTab("aboutMe")
                break;
            case "portfolio":
                props.setTab("project")
                break;
            case "contact":
                props.setTab("contact")
                break;
            case "resume":
                props.setTab("resume")
                break;
            default:
        }
    }

    return(
        <>
            <p style={props.tab==="aboutMe" ?({background: "blue"}):({background: "white"})}><a data-link="aboutMe" href="/" onClick={handleTabClick}>About Me</a></p>
            <p style={props.tab==="project" ?({background: "blue"}):({background: "white"})}><a data-link="portfolio" href="/" onClick={handleTabClick}>Portfolio</a></p>
            <p style={props.tab==="contact" ?({background: "blue"}):({background: "white"})}><a data-link="contact" href="/" onClick={handleTabClick}>Contact</a></p>
            <p style={props.tab==="resume" ?({background: "blue"}):({background: "white"})}><a data-link="resume" href="/" onClick={handleTabClick}>Resume</a></p>
        </>
    )
}

export default Navigation