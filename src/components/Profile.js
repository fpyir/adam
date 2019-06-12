import React from 'react'
import profileIcon from '../profileIcon.jpg'
import githubIcon from '../githubIcon.png'

const styles = {
  profileIcon: {
    borderRadius: '50%',
    maxWidth: '200px',
    display: 'block',
    margin: 'auto',
    paddingBottom: '25px'
  },
  font: {
    fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial, sans-serif'
  },
  inlineWidth50: {
    display: 'inline',
    width: '50%'
  },
  githubLink: {
    padding: '0',
    margin: '0',
    color: 'dodgerblue',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center'
  }
}

export default (id) => (
  <div style={{ maxWidth: '400px', padding: '50px' }}>
    <img style={styles.profileIcon} src={profileIcon} />
    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
      <h3 style={styles.font}> adam marshall</h3>
      <h3 style={{ ...styles.font }}>
        <a href='https://github.com/fpyir' style={styles.githubLink}>
          <img src={githubIcon} style={{ width: '20px', paddingRight: '8px' }} />
          fpyir
        </a>
      </h3>
    </div>
    <p style={{ ...styles.font, lineHeight: '1.5' }}>
      Hello &#128075;&#127996;! I'm an 18yr old software developer that works
      with Python, JavaScript &amp; C# to craft great products &amp; experiences.
      I write content to teach people how to write better code from the lessons I learn
      during my day job and side jobs.
    </p>
    <a style={{ ...styles.font, color: 'royalblue', fontWeight: 'bold' }}>Weekly tips newsletter coming soon!</a>
  </div>
)
