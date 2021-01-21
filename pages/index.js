import styled from 'styled-components'
import Background from '../components/Background'
import Button from '../components/Button'
import ProjectsSection from '../components/ProjectsSection'
import BioSection from '../components/BioSection'
import { colors } from '../utils/theme'

const HeaderText = styled.div`
  color: white;
  line-height: 1;
  padding-bottom: 3px;
  display: table;
  text-align: center;
  font-size: 45px;
  font-weight: bold;
  margin: auto;

  /* Tables and large phones */
  @media only screen and (min-width: 600px) {
    border-bottom: 3px solid rgb(${colors.green});
    font-size: 55px;
  }
`

const HeaderLinkWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    margin-top: 25px;
  }
`

const Index = () => {
  return (
    <>
      <Background />
      <div className='index-wrapper'>
        <div className='header-wrapper'>
          <HeaderText>Hello, I'm RJ Shoemaker</HeaderText>
          <HeaderLinkWrapper>
            <Button
              color='red'
              href='https://www.github.com/rjshoemaker55'
              rel='noreferrer'
              target='_blank'
            >
              <img src='/images/logos/GitHub_Logo.png' />
            </Button>
            <Button
              color='yellow'
              href='https://www.linkedin.com/in/r-joseph-shoemaker/'
              rel='noreferrer'
              target='_blank'
            >
              <img src='/images/logos/linkedin-logo.png' />
            </Button>
          </HeaderLinkWrapper>
        </div>
        <ProjectsSection />
        <BioSection />
      </div>
    </>
  )
}

export default Index
