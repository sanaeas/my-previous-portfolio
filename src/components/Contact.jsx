import React, { useState } from 'react'

function Contact() {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');

  return (
    <div>

    </div>
  )
}

export default Contact