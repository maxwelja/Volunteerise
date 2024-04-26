// OrgProfilePage.js

import React from 'react';
//import Header from './Header';
//import ProfilePicture from './ProfilePicture';
import OrgBio from './OrgBio';
//import Donate from './Donate'; // Import the Donate component
import NavBar from '../components/NavBar';


function OrgProfilePage() {
  // Preset organization data
  const organization = 
  {
    name: 'Example Non-Profit',
    location: 'City, Country',
    email: 'example@example.com',
    phone: '123-456-7890',
    website: 'example.com',
    about: 'XXXX XX XXXXX XXXX XXX XXXXXX XXXXXX XX.'
    // Add more organization information as needed
  };

  // Styles
  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'column', // Stack items vertically
    //alignItems: 'center', // Center items horizontally
    //alignItems: 'flex-start', // Align items at the top
    borderRadius: '20px', // Apply border radius for curved edges
    border: '1px solid #ccc', // Add border for better visibility
    padding: '20px', // Add padding for spacing
    backgroundColor: '#f0f0f0', // Add background color
  };

  return (
    <div className="OrgProfilePage">
      <NavBar />
      {/* <Header logoUrl="/website-logo.jpg" titleUrl="/website-name.jpg" /> */}
      <div style={contentContainerStyle}>
        {/* <ProfilePicture imageUrl="/profile-pic.png" /> */}
        <OrgBio organization={organization} /> {/* Use OrgBio component */}
        {/* <Donate /> Include the Donate component */}
      </div>
      {/* Other content of your website */}
    </div>
  );
}



export default OrgProfilePage;
