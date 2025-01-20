import React, { useState } from 'react'

export const Profile = () => {
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const handlePhotoChange = (event) => { setPhoto(URL.createObjectURL(event.target.files[0])); };
  const handleNameChange = (event) => { setName(event.target.value); };
  const handleAddressChange = (event) => { setAddress(event.target.value); };
  const handlePincodeChange = (event) => { setPincode(event.target.value); };
  return (
<>
    <div style={styles.container}>
      <div style={styles.profile}>
        {photo && <img src={photo} alt="Profile" style={styles.photo} />}
        <input type="file" accept="image/*" onChange={handlePhotoChange} style={styles.input} />
        <input type="text" placeholder="Name" value={name} onChange={handleNameChange} style={styles.input} />
        <input type="text" placeholder="Address" value={address} onChange={handleAddressChange} style={styles.input} />
        <input type="number" placeholder="Pincode" value={pincode} onChange={handlePincodeChange} style={styles.input} />
      </div>
    </div>
    
    <footer style={styles1.footer}>
       <div style={styles1.container}>
         <h2 style={styles1.logo}>Carry Bag</h2>
          <div style={styles1.links}> <a href="/about" style={styles1.link}>About Us</a> 
          <a href="/contact" style={styles1.link}>Contact Us</a> 
          <a href="/privacy" style={styles1.link}>Privacy Policy</a> 
          </div> <p style={styles1.copy}>&copy; 2024 Carry Bag. All rights reserved.</p>
           </div>
            </footer>
    
</>
  );
}
const styles = {
  container:
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    fontFamily: 'Arial, sans-serif',
  },
  profile: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  }, photo: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    marginBottom: '10px',
  },
  input: {
    display: 'block',
    margin: '10px auto',
    padding: '10px',
    width: '80%',
    border: '1px solid #ccc',
    borderRadius: '5px',
  }
};
const styles1 = { footer: { backgroundColor: '#333', color: '#fff', padding: '20px 0', textAlign: 'center', position: 'relative', width: '100%', bottom: '0px', }, container: { maxWidth: '1000px', margin: '0 auto', }, logo: { fontSize: '24px', marginBottom: '10px', }, links: { display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '10px', }, link: { color: '#fff', textDecoration: 'none', }, copy: { fontSize: '14px', }, };