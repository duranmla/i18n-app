const initialState = 'es';

function language(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return action.language;
  }

  return state;
}

export default language;