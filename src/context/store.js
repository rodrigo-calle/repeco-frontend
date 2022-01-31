import { createContext, useContext, useReducer } from 'react';
import {
  LOGIN_USER,
  LOGOUT_USER,
  SET_LOADING,
  GET_USER_FROM_LOCALSTORAGE,
  SET_SEARCH_FIELDS,
  VERIFY_USER,
  CHANGE_VALUES,
} from './constants';

const AppStateContext = createContext();
const AppDispatchContext = createContext();

const initialState = {
  isLoading: false,
  user: null,
  searchFieldsForm: null,
};
function AppReducer(state, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case GET_USER_FROM_LOCALSTORAGE: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case SET_SEARCH_FIELDS: {
      return {
        ...state,
        searchFields: action.payload,
      };
    }
    case VERIFY_USER: {
      return {
        ...state,
        searchFields: action.payload,
      };
    }
    case CHANGE_VALUES: {
      return {
        ...state,
        changes: action.payload,
      };
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppProvider');
  }

  return context;
};

const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppProvider');
  }
  return context;
};

// eslint-disable-next-line object-curly-newline
export { AppProvider, useAppState, useAppDispatch };
