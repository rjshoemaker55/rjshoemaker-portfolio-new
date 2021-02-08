import skills from '../utils/skills'

const SkillsSection = () => {
  return (
    <div className='skills-wrapper'>
      <div className='skills-title'>skills</div>
      <div className='skills-content-wrapper'>
        {skills.map((skill) => (
          <div key={skill.name} className='skill-item'>
            <img
              className={
                skill.name === 'Next.js' ? 'skill-logo next-logo' : 'skill-logo'
              }
              src={skill.logo}
            />
            <div className='skill-name'>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsSection
