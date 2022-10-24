
import React from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import avatar from '../../assets/images/avatar.svg'
// import headshot from '../../assets/images/i-peaks.jpeg'
import linkedin from '../../assets/icons/linkedin-brands.svg'
import github from '../../assets/icons/github-square-brands.svg'
import emaillogo from '../../assets/icons/envelope-square-solid.svg'

const Contact = (props) => {

  const navigate = useNavigate()

  const [name, setName] = React.useState('')
	const [email, setEmail] = React.useState('')
	const [message, setMessage] = React.useState('')

	function encode(data) {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
			)
			.join('&')
	}

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name,
        email,
        message
      })})
      .then(() => alert('Thank you for reaching out!')).then(navigate('/'))
			.catch((error) => alert(error))
  }

  return (
    <div className='contact'>
      <div 
        className='headshotContainer'>
          <img className='headshot' src={avatar} alt="avatar" />
      </div>
      <p>
        Feel free to reach out! I'd love to hear from you!
      </p>
      <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <div className='form'>
        <div className='leftform'>
          <label>Name:</label>   
          <label>Email: </label>
          <label>Message: </label>
        </div>

        <div className='rightform'>
          <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
          <textarea name="message" onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        </div>
        <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.9 }}
            style={{padding: "4px"}}
            type="submit"
            className='submit'>
              Submit
          </motion.button>
      </form>
      <div id='icons'>
        <a href='https://www.linkedin.com/in/mattgefen/'
          target="_blank"
          rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{backgroundColor: "transparent", border: "none"}}>
              <img className='icon' src={linkedin} alt='linkedin-logo' />
          </motion.button>
        </a>
        <a href='https://github.com/matt-gefen'
          target="_blank"
          rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{backgroundColor: "transparent", border: "none"}}
          >
            <img className='icon' src={github} alt='github-logo'/>
          </motion.button>
        </a>
        <a class='link' href='mailto: matt.gefen@gmail.com'
          target="_blank"
          rel="noopener noreferrer">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{backgroundColor: "transparent", border: "none"}}>
            <img className='icon' src={emaillogo} alt='email-logo'/>
        </motion.button>
        </a>
      </div>
    </div>
  )
}

export default Contact
