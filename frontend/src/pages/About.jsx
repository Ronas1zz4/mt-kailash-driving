import React from 'react'
import StripeCheckoutButton from '../components/StripeCheckoutButton';


const About = () => {
  console.log('About page rendered'); // Check if this is logged to the console

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
    }}>About
           <p style={{ color: 'black', fontSize: '20px' }}>Support us by making a payment. dfafadfs</p>
      <StripeCheckoutButton />
    </div>
  )
}

export default About