import { loginActions } from './loginSlice';
//import type { RootState } from '../../redux/configureStore';
import { useDispatch, useSelector } from "react-redux";


// const {
//     loggedInUserName
// } = useSelector((state : RootState) => state.login);
 
//{loggedInUserName}


export default function loginScreen(){
    
// const {
//     loggedInUserName
// } = useSelector((state) => state.login);

const dispatch = useDispatch();

const loginPayload = {
    "loggedInUserId": "1234",
    "loggedInUserName": "Pavan Kumar"
};


    return(
        <>
            <button onClick={() => dispatch(loginActions.setLoggedIn(loginPayload))}> Login </button>
            <button onClick={() => dispatch(loginActions.setLogout())}> Log out </button>
            {/* <h1>{ loggedInUserName }</h1> */}
            <h1>ASD</h1>
        </>
    )
}



// // ----------------------------------------------------------------
// Action Creator  :
// const addTodo = text => {
//     return {
//       type: 'todos/todoAdded',
//       payload: text
//     }
//   }

//  // ----------------------------------------------------------------
// Reducer : 
// const initialState = { value: 0 }

// function counterReducer(state = initialState, action) {
//   // Check to see if the reducer cares about this action
//   if (action.type === 'counter/increment') {
//     // If so, make a copy of `state`
//     return {
//       ...state,
//       // and update the copy with the new value
//       value: state.value + 1
//     }
//   }
//   // otherwise return the existing state unchanged
//   return state
// }

// // ----------------------------------------------------------------
// Store : 
// import { configureStore } from '@reduxjs/toolkit'

// const store = configureStore({ reducer: counterReducer })

// console.log(store.getState())
// // {value: 0}

// // ----------------------------------------------------------------
// Dispatch : 
// store.dispatch({ type: 'counter/increment' })

// console.log(store.getState())
// // {value: 1}

// call action creators to dispatch
// const increment = () => {
//     return {
//       type: 'counter/increment'
//     }
//   }
  
//   store.dispatch(increment())
  
//   console.log(store.getState())
//   // {value: 2}

// // ----------------------------------------------------------------
// Selectors :
// const selectCounterValue = state => state.value

// const currentValue = selectCounterValue(store.getState())
// console.log(currentValue)
// // 2

// // ----------------------------------------------------------------