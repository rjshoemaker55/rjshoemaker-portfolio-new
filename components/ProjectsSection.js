import { useState, useEffect } from 'react'
import styled from 'styled-components'
import projects from '../utils/projects'
import { colors } from '../utils/theme'
import LazyImage from '../components/LazyImage'

const ProjectListItem = styled.div`
  color: rgb(${colors.purple});
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
  border: 2px rgb(${colors.purple}) solid;
  border-radius: 5px;
  text-align: center;
  transition-duration: 0.3s;
  padding: 7px 10px;

  &:hover {
    background-color: rgb(${colors.purple});
    color: black;
    cursor: pointer;
  }

  &:nth-child(${(props) => props.currentProject.id + 1}) {
    background-color: rgb(${colors.purple});
    color: black;
  }

  &:nth-child(n + 0) {
    margin-left: 10px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 24px;
    padding: 2px 10px;
    display: block;
  }

  @media only screen and (min-width: 992px) {
    padding: 5px;
    margin-left: 0px;
  }
`

const ProjectDisplayFooter = styled.div`
  border: 2px solid rgb(${colors.yellow});
  border-radius: 5px;
  margin-top: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const TechHeader = styled.div`
  display: block;
  color: rgb(${colors.yellow});
  font-weight: bold;
  font-size: 18px;
`

const ProjectTechItem = styled.div`
  color: rgb(${colors.red});
  display: inline-block;
`

const ProjectDisplayTitle = styled.div`
  font-weight: bold;
  color: rgb(${colors.yellow});
  font-size: 25px;
`

const ProjectDisplayDesc = styled.div`
  color: rgb(${colors.purple});
`

const ProjectDisplayRepo = styled.div`
  color: rgb(${colors.red});
  margin-top: 7px;

  > a {
    text-decoration: underline;
    transition-duration: 0.3s;
    background-color: rgb(${colors.red});
    color: black;
    padding: 0px 10px;

    &:hover {
      background-color: rgb(${colors.red});
      color: black;
    }

    @media only screen and (min-width: 768px) {
      background-color: transparent;
      color: rgb(${colors.red});
      padding: 0;
      margin-top: 0;
      line-height: auto;
    }
  }
`

const ProjectDisplayDeployed = styled.div`
  color: rgb(${colors.green});
  margin-top: 7px;

  > a {
    text-decoration: underline;
    transition-duration: 0.3s;
    background-color: rgb(${colors.green});
    color: black;
    padding: 0px 10px;

    &:hover {
      background-color: rgb(${colors.green});
      color: black;
    }

    @media only screen and (min-width: 768px) {
      background-color: transparent;
      color: rgb(${colors.green});
      padding: 0;
      margin-top: 0;
    }
  }
`

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(projects[0])
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    window.addEventListener('resize', setWindowWidth(window.innerWidth))
  })
  return (
    <div className='projects-section-wrapper'>
      <div className='project-list'>
        {projects.map((project) => (
          <ProjectListItem
            key={project.id}
            currentProject={currentProject}
            onClick={() => setCurrentProject(project)}
          >
            {project.name}
          </ProjectListItem>
        ))}
      </div>
      <div className='project-display'>
        <LazyImage src={currentProject.gif} />
        {/* <ProjectDisplayGif src={currentProject.gif} /> */}
        <ProjectDisplayFooter>
          <div className='project-display-info'>
            <ProjectDisplayTitle>{currentProject.name}</ProjectDisplayTitle>
            <ProjectDisplayDesc>
              {currentProject.description}
            </ProjectDisplayDesc>
            {/* eslint multiline-ternary: ["error", "never"] */}
            {windowWidth > 768 ? (
              <>
                <ProjectDisplayRepo>
                  Visit Repo:{' '}
                  <a
                    href={currentProject.repo}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {currentProject.deployed}
                  </a>
                </ProjectDisplayRepo>
                <ProjectDisplayDeployed>
                  Visit Deployed:{' '}
                  <a
                    href={currentProject.deployed}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {currentProject.deployed}
                  </a>
                </ProjectDisplayDeployed>
              </>
            ) : (
              <>
                <ProjectDisplayRepo>
                  Visit Repo <a href={currentProject.repo}>Here</a>
                </ProjectDisplayRepo>
                <ProjectDisplayDeployed>
                  Visit Deployed <a href={currentProject.deployed}>Here</a>
                </ProjectDisplayDeployed>
              </>
            )}
          </div>
          <div className='project-display-tech'>
            <TechHeader>Technologies used:</TechHeader>
            {currentProject.tech.map((tech) => (
              <ProjectTechItem key={tech}>{tech}</ProjectTechItem>
            ))}
          </div>
        </ProjectDisplayFooter>
      </div>
    </div>
  )
}

export default ProjectsSection
