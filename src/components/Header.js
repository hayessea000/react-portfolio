import Navigation from "./Navigation"

function Header(props){

    return(
        <>
            <p>Sean Hayes</p>
            <Navigation tab={props.tab} setTab={props.setTab}/>
        </>
    )
}

export default Header