const Header = (props)=>{
    return (
        <header>
            <h1>{props.title}</h1>
            {props.link}
        </header>
    )
}

export default Header;