import React from 'react'

export const About = () => {
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.header}>About Carry Bag</h1>
        <p style={styles.text}> Welcome to Carry Bag, your number one source for all things grocery. We're dedicated to giving you the very best of fresh produce, dairy, and pantry staples, with a focus on quality, customer service, and convenience. </p>
        <p style={styles.text}> Founded in 2023, Carry Bag has come a long way from its beginnings. When we first started out, our passion for providing the best grocery products drove us to start our own business. </p>
        <p style={styles.text}> We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us. </p>
        <p style={styles.signature}>Sincerely,<br />The Carry Bag Team</p>
      </div>
    </>
  )
}
const styles =
{
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '10px',
    // boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginTop:'50px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight:'bolder'
  },
  text: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  signature: {
    textAlign: 'center',
    marginTop: '20px',
    fontStyle: 'italic',
  },
};