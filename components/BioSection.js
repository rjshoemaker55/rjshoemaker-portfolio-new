const BioSection = () => {
  return (
    <div className='bio-wrapper'>
      <div className='bio-title'>bio</div>
      <div className='bio-content-wrapper'>
        <div className='profile-picture-wrapper'>
          <img className='profile-picture' src='/images/profile-picture.jpg' />
        </div>
        <div className='bio-text-wrapper'>
          <div className='bio-text'>
            Hello, thanks for visiting my portfolio site! I am a web developer
            from Flemington, New Jersey. I have been studying web development
            since 2019, and have earned several certificates along the way.
            While my main focus is in front end development, I have been
            building my skillset to incldude backend functionality for more
            complex applications.
          </div>
          <div className='bio-text'>
            In my free time, I enjoy writing and playing music. Currently, I
            play guitar and keyboard, as well as sing. My creative abilities
            allow be to create beautiful, aesthetic applications that are sure
            to please the eye of users.
          </div>
        </div>
      </div>
    </div>
  )
}

export default BioSection
