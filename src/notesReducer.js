import { ADD_NOTE, setNotes, SET_NOTES } from './actions';

const initialState = {
  notes: {
    typeStructure: '',
    valorConta: '',
    cep: '',
  },
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE: {
      return { notes: action.payload };
    }

    case SET_NOTES: {
      return { ...state, notes: action.payload };
    }

    default:
      return state;
  }
};

export const loadNotes = () => async (dispatch, getState) => {
  const notes = await fetch(
    `https://api.77sol.com.br/busca-cep?estrutura=${
      getState().notes.typeStructure
    }&valor_conta=${getState().notes.valorConta}&cep=${getState().notes.cep}`
  ).then((res) => res.json());
  dispatch(setNotes(notes));
  console.log(getState().notes);
};
