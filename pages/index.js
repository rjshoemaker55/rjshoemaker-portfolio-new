import Head from 'next/head'
import Background from '../components/Background'
import Button from '../components/Button'
import ProjectsSection from '../components/ProjectsSection'
import BioSection from '../components/BioSection'
import SkillsSection from '../components/SkillsSection'
import ContactSection from '../components/ContactSection'

const Index = () => {
  return (
    <>
      <Head>
        <title>RJ Shoemaker</title>
        <desc>RJ Shoemaker's Portfolio Site</desc>
      </Head>
      <Background />
      <div className='index-wrapper'>
        <div className='header-wrapper'>
          <div className='header-text'>Hello, I'm RJ Shoemaker</div>
          <div className='header-link-wrapper'>
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
          </div>
        </div>
        <ProjectsSection />
        <BioSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </>
  )
}

export default Index
