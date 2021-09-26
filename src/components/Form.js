import React, { useState } from 'react';
import '../Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import { useSelector } from 'react-redux';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const notes = useSelector((state) => state.notes);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      {!isSubmitted ? (
        <div className="form-container">
          <span className="close-btn">×</span>
          <div className="form-content-left">
            <img
              className="form-img"
              src="img/solarEnergy.svg"
              alt="spaceship"
            />
          </div>
          <FormSignup submitForm={submitForm} />
        </div>
      ) : (
        <FormSuccess clientData={notes} />
      )}
    </>
  );
};

export default Form;
