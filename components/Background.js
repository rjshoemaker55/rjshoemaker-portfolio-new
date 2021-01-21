import Particles from 'react-tsparticles'

const Background = (props) => {
  return (
    <Particles
      id='tsparticles'
      options={{
        background: {
          color: {
            value: '#000000'
          }
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: '#ffffff'
          },
          collisions: {
            enable: true
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 6,
            straight: false
          },
          number: {
            value: 35
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            random: true,
            value: 4
          }
        },
        detectRetina: true
      }}
    />
  )
}

export default Background
