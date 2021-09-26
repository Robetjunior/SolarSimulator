import { useState, useEffect } from 'react';
import { addNote } from './actions';
import { useDispatch } from 'react-redux';
import { loadNotes } from './notesReducer';

const useForm = (callback, validate) => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    typeStructure: '',
    valorConta: '',
    cep: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    dispatch(addNote(values));
    setIsSubmitting(true);
    dispatch(loadNotes());
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
