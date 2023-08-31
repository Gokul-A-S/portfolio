import profile from '../assets/profile-pic.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
const Profile = () => {
    return (
        <section id="profile">
            <div className="section_pic_container">
                <img src={profile} alt='Gokul' />
            </div>
            <div className='section_text'>
                <p className='section_text_p1'>Hello, I'm</p>
                <h1 className='title'>Gokul Das</h1>
                <p className='section_text_p2'>Software Developer</p>
            </div>
            <div className='btn-container'>
                <button className='btn btn-color-2' onClick={()=>{window.open('./resume.pdf')}}>Download Resume</button>
                <button className='btn btn-color-1' onClick={()=>{window.location.href='./#contact'}}>Contact</button>
            </div>
            <div id='socials-container'>
                <img src={linkedin} alt='My LinkedIn Profile' onClick={()=>{window.location.href='https://www.linkedin.com/in/gokul271/'}} />
                <img src={github} alt='My Github Profile' onClick={()=>{window.location.href='https://github.com/Gokul-A-S'}} />
            </div>
        </section>
    )
}
export default Profile