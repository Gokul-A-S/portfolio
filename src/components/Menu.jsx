import { useRef } from "react"
const Menu = () => {
    const menuRef=useRef(null)
    const iconRef=useRef(null)

    const toggleMenu = () => {
        const menu=menuRef.current
        const icon=iconRef.current
        menu.classList.toggle('open')
        icon.classList.toggle('open')

    }
    return (
        <nav id="hamburger-nav">
            <div className="logo">Gokul Das</div>
            <div className="hamburger-menu">
                <div className="hamburger-icon" onClick={toggleMenu} ref={iconRef}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="menu-links" ref={menuRef}>
                    <li><a href='#' onClick={toggleMenu}>About</a></li>
                    <li><a href='#' onClick={toggleMenu}>Contact</a></li>
                    <li><a href='#' onClick={toggleMenu}>Skills</a></li>
                    <li><a href='#' onClick={toggleMenu}>Projects</a></li>
                </div>
            </div>
        </nav>
    )
}
export default Menu