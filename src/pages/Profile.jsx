import profile from '../assets/profile-pic.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
const Profile = () => {
    return (
        <section id="profile">
            <div className="section_pic-container">
                <img src={profile} alt='Gokul' />
            </div>
                <div className='section_text'>
                    <p className='section_text_p1'>Hello, I'm</p>
                    <h1 className='title'>Gokul Das</h1>
                    <p className='section_text_p2'>Software Developer</p>
                
                <div className='btn-container'>
                    <button className='btn btn-color-2' onClick={() => { window.open('./resume.pdf') }}>Download CV</button>
                    <button className='btn btn-color-1' onClick={() => { window.location.href = './#contact' }}>Contact</button>
                </div>
                <div id='socials-container'>
                    <img src={linkedin} className='icon' alt='My LinkedIn Profile' onClick={() => { window.location.href = 'https://www.linkedin.com/in/gokul271/' }} />
                    <img src={github} className='icon' alt='My Github Profile' onClick={() => { window.location.href = 'https://github.com/Gokul-A-S' }} />
                </div>
            </div>
        </section>
    )
}
export default Profile