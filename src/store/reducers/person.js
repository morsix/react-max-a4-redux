import * as actionTypes from '../actions';
import faker from 'faker';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD:
            return {
                ...state,
                persons: state.persons.concat({
                    id: generateRandomString(),
                    name: faker.name.findName(),
                    age: Math.floor( Math.random() * 40)
                })
            }

        case actionTypes.REMOVE:
            const updatedArray = state.persons.filter(result => result.id !== action.personsElId);
            return{
                ...state,
                persons: updatedArray
            }
    }

    return state;
};

const generateRandomString = () =>{
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

export default reducer;