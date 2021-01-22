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
  box-shadow: 2px 2px rgb(${colors.yellow});
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

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(projects[0])
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    window.addEventListener('resize', setWindowWidth(window.innerWidth))
  })
  return (
    <div className='projects-wrapper'>
      <div className='projects-section-title'>projects</div>
      <div className='projects-content-wrapper'>
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
          <div className='project-footer-wrapper'>
            <div className='project-footer-info'>
              <div className='project-display-title'>{currentProject.name}</div>
              <div className='project-display-description'>
                {currentProject.description}
              </div>
              {/* eslint multiline-ternary: ["error", "never"] */}
              {windowWidth > 768 ? (
                <>
                  <div className='project-display-link project-repo-link'>
                    Visit Repo:{' '}
                    <a
                      href={currentProject.repo}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {currentProject.deployed}
                    </a>
                  </div>
                  <div className='project-display-link project-deployed-link'>
                    Visit Deployed:{' '}
                    <a
                      href={currentProject.deployed}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {currentProject.deployed}
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div className='project-display-link project-repo-link'>
                    Visit Repo <a href={currentProject.repo}>Here</a>
                  </div>
                  <div className='project-display-link project-deployed-link'>
                    Visit Deployed <a href={currentProject.deployed}>Here</a>
                  </div>
                </>
              )}
            </div>
            <div className='project-tech-wrapper'>
              <div className='project-tech-header'>Technologies used:</div>
              {currentProject.tech.map((tech) => (
                <div className='project-tech-item' key={tech}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection
