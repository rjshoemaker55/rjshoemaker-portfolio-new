import styled from 'styled-components'
import { colors } from '../utils/theme'
import certificates from '../utils/certificates'
import skills from '../utils/skills'

const Highlight = styled.span`
  color: rgb(${(props) => props.color});
`

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
            I am a web developer from{' '}
            <Highlight color={colors.blue}>Flemington, New Jersey</Highlight>{' '}
            specializing in{' '}
            <Highlight color={colors.yellow}>front end development.</Highlight>{' '}
            After beginning my journey in web development in 2019, I've worked
            hard to acquire several{' '}
            <Highlight color={colors.red}>certificates</Highlight> and am
            currently building my skill set to create more{' '}
            <Highlight color={colors.purple}>complex applications.</Highlight>
          </div>
          <div className='bio-text'>
            With a background in the{' '}
            <Highlight color={colors.yellow}>trades</Highlight>, I have
            developed strong{' '}
            <Highlight color={colors.green}>creative problem solving</Highlight>{' '}
            and <Highlight color={colors.red}>communication</Highlight> skills
            that make me a great{' '}
            <Highlight color={colors.blue}>team member</Highlight> in a
            development setting.
          </div>
          <div className='courses-section-wrapper'>
            <div className='courses-header'>courses and certificates</div>
            <div className='courses-list-wrapper'>
              {certificates.map((certificate) => {
                return (
                  <div className='course-item-wrapper'>
                    <img className='course-item-img' src={certificate.image} />
                    <div className='course-item-name'>{certificate.name}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BioSection
