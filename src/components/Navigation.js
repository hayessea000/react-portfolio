import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation(props){


    function handleTabClick(e) {
        // e.preventDefault()
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
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="">Sean Hayes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link data-link="aboutMe" href="#aboutMe" onClick={handleTabClick}>About Me</Nav.Link>
            <Nav.Link data-link="portfolio" href="#portfolio" onClick={handleTabClick}>Portfolio</Nav.Link>
            <Nav.Link data-link="contact" href="#contact" onClick={handleTabClick}>Contact</Nav.Link>
            <Nav.Link data-link="resume" href="#resume" onClick={handleTabClick}>Resume</Nav.Link>
          </Nav>
      </Navbar>
        // <nav className="nav">
        //     <p style={props.tab==="aboutMe" ?({background: "blue"}):({})}><a data-link="aboutMe" href="/" onClick={handleTabClick}>About Me</a></p>
        //     <p style={props.tab==="project" ?({background: "blue"}):({})}><a data-link="portfolio" href="/" onClick={handleTabClick}>Portfolio</a></p>
        //     <p style={props.tab==="contact" ?({background: "blue"}):({})}><a data-link="contact" href="/" onClick={handleTabClick}>Contact</a></p>
        //     <p style={props.tab==="resume" ?({background: "blue"}):({})}><a data-link="resume" href="/" onClick={handleTabClick}>Resume</a></p>
        // </nav>
    )
}

export default Navigation