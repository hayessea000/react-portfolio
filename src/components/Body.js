import AboutMe from"./AboutMe";
import Contact from "./Contact";
import Project from"./Project";
import Resume from "./Resume";

function Body(props){

    const renderPage = () => {
        if (props.tab === "aboutMe") {
          return <AboutMe/>;
        }
        if (props.tab === "project") {
          return <Project/>;
        }
        if (props.tab === "contact") {
          return <Contact/>;
        }
        return <Resume/>;
      };

    return(
        <>
            {renderPage()}
        </>
    )
}

export default Body