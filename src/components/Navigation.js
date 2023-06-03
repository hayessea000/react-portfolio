import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation(props){


    function handleTabClick(e) {
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
        <Navbar className="fixed-top" bg="dark" variant="dark">
          <Navbar.Brand className='p-3' href="">Sean Hayes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link data-link="aboutMe" href="#aboutMe" onClick={handleTabClick}>About Me</Nav.Link>
            <Nav.Link data-link="portfolio" href="#portfolio" onClick={handleTabClick}>Portfolio</Nav.Link>
            <Nav.Link data-link="contact" href="#contact" onClick={handleTabClick}>Contact</Nav.Link>
            <Nav.Link data-link="resume" href="#resume" onClick={handleTabClick}>Resume</Nav.Link>
          </Nav>
      </Navbar>
    )
}

export default Navigation