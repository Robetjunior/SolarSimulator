import React, { useState } from 'react';
import '../Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    margin: '100px auto',
    width: '1000px',
    boxShadow:
      '0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2)',
    position: 'relative',
    borderRadius: '10px',
    height: '700px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  closeBtn: {
    position: 'absolute',
    top: '2%',
    right: '3%',
  },
}));

const Form = () => {
  const classes = useStyles();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const notes = useSelector((state) => state.notes);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      {!isSubmitted ? (
        <div className={classes.formContainer}>
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
