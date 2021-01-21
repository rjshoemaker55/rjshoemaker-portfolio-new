import styled from 'styled-components'
import { colors } from '../utils/theme'

const BioText = styled.div`
  color: rgb(${colors.blue});
  line-height: 1.8;
  font-size: 18px;
`

const ProfilePicture = styled.img`
  width: 100%;
  border: 2px solid rgb(${colors.red});
  border-radius: 5px;
  opacity: 0.85;
`

const BioSection = () => {
  return (
    <div className='bio-wrapper'>
      <div className='profile-picture-wrapper'>
        <ProfilePicture
          className='profile-picture'
          src='/images/profile-picture.jpg'
        />
      </div>
      <div className='bio-para-wrapper'>
        <BioText>
          Hello, thanks for visiting my portfolio site! I am a web developer
          from Flemington, New Jersey. I have been studying web development
          since 2019, and have earned several certificates along the way. While
          my main focus is in front end development, I have been building my
          skillset to incldude backend functionality for more complex
          applications.
        </BioText>
        <BioText>
          In my free time, I enjoy writing and playing music. Currently, I play
          guitar and keyboard, as well as sing. My creative abilities allow be
          to create beautiful, aesthetic applications that are sure to please
          the eye of users.
        </BioText>
      </div>
    </div>
  )
}

export default BioSection
