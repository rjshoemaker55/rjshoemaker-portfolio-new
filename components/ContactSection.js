const ContactSection = () => {
  return (
    <div className='contact-wrapper'>
      <div className='contact-title'>contact</div>
      <div className='contact-content-wrapper'>
        <address
          className='contact-item email-item'
          href='rjshoemaker55@gmail.com'
        >
          rjshoemaker55@gmail.com
        </address>
        <a
          className='contact-item'
          href='http://www.github.com/rjshoemaker55'
          rel='noreferrer'
          target='_blank'
        >
          github.com/rjshoemaker55
        </a>
      </div>
    </div>
  )
}

export default ContactSection
