const Menu = () => {
    const toggleMenu = () => {
    }
    return (
        <nav id="hamburger-nav">
            <div className="logo">Gokul Das</div>
            <div className="hamburger-menu">
                <div className="hamburger-icon" onClick={toggleMenu()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="menu-links">
                    <li><a href='#' onClick={toggleMenu()}>About</a></li>
                    <li><a href='#' onClick={toggleMenu()}>Contact</a></li>
                    <li><a href='#' onClick={toggleMenu()}>Skills</a></li>
                    <li><a href='#' onClick={toggleMenu()}>Projects</a></li>
                </div>
            </div>
        </nav>
    )
}
export default Menu