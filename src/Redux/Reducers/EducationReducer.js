import * as actionTypes from "../actionTypes";
import { GET_EDU, REMOVE_EDU, ADD_EDUCATION ,  EDIT_EDUCATION} from "../actionTypes";

const initialState = [];

const EducationReducer = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case GET_EDU:
      //   newState = { ...state, initialState: action.payload };
      newState = action.payload;
      break;
    case ADD_EDUCATION:
      newState = [...state, action.payload];
      // console.log("component", newState);
      break;
    case REMOVE_EDU:
      newState = state.filter(edu => edu._id !== action.payload);
      break;
      case EDIT_EDUCATION:
        // newState = state.map(edu => edu.id === action.payload.id);
        newState = state.map(edu =>
          edu.id === action.payload ? action.payload : edu
        );
        console.log("action.payload",action.payload)

        break;

    default:
      break;
  }
  return newState;
  // }
};

export default EducationReducer;

// case actionTypes.ADD_EDUCATION:
//     const newEducation = {
//       id: Math.random(), // not really unique but good enough here!
//       university: action.eduData.university
//       //   age: action.personData.age
//     };
//     return {
//       ...state,
//       educations: state.educations.concat(newEducation)
//     };
// case actionTypes.REMOVE_PERSON:
//   return {
//     ...state,
//     persons: state.persons.filter(person => person.id !== action.personId)
//   };
