import Navigation from "./Navigation"

function Header(props){

    return(
        <header>
            <Navigation tab={props.tab} setTab={props.setTab}/>
        </header>
    )
}

export default Header