import React from 'react';

function App() {
  return (
    <div className="container">
      {/* Background image */}
      <div className="background-image">
        <img src="background.jpg" alt="bg" />
        {/* You can replace 'background.jpg' with the path to your background image */}
      </div>

      {/* Logo */}
      <div className="logo">
        <img src="logo.png" alt="Logo" />
        {/* You can replace 'logo.png' with the path to your logo image */}
      </div>

      {/* Streamlit application embedded within an iframe */}
      <iframe
        title="Streamlit App"
        src="http://localhost:8501"  // Replace this URL with your Streamlit app URL
        width="100%"
        height="600px"
        frameBorder="0"
        style={{ border: "none" }}  // Optional: Remove iframe border
      />
    </div>
  );
}

export default App;
