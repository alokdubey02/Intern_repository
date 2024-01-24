import { createSlice } from "@reduxjs/toolkit";
// createSlice function gives us 3 big benefits
// 1) it will automatically create  action creators from our reducers
// 2) it makes writing these reducers a lot easier because we no longer need that the switch statements and also the default case statement is automatically handled
// 3) we can actually mutate now our state inside reducers

// slice is basically is a piece , just a part of the total state and here we take a slice of that state
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

// we call createSlice function which then accepts again an object of options and return a slice

const accountSlice = createSlice({
  name: "account",
  // since we have same name so instead of passing traditional way we directly pass as single name
  // initialState: initialState
  initialState,
  reducers: {
    // by default these action creators take only one arguments
    // to solve this, so we prepare the data before it reaches the reducer using prepare method

    deposit(state, action) {
      state.balance = state.balance + action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance = state.balance - action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },

      reducer(state, action) {
        if (state.loan > 0) return;

        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },

    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },

    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

console.log(accountSlice);

export const { payLoan, requestLoan, withdraw } = accountSlice.actions;

//to use thunk here we write code as same as v1 and do not export with the above actions make sure you have same function name  and type which is name of the slice and then name of the reducers (slice/reducers) eg. (account/deposit)
export function deposit(amount, currency) {
  if (currency === "INR") return { type: "account/deposit", payload: amount };

  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });
    // API call

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=INR`
    );

    const data = await res.json();
    const converted = data.rates.INR;
    // console.log(data);
    // console.log(converted);

    // return action
    dispatch({
      type: "account/deposit",
      payload: converted,
    });
  };
}

export default accountSlice.reducer;

// export default function accountReducer(state = initialState, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//         isLoading: false,
//       };

//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };

//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       // LATER
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };

//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };

//     case "account/convertingCurrency":
//       return {
//         ...state,
//         isLoading: true,
//       };
//     default:
//       return state;
//   }
// }

// export function deposit(amount, currency) {
//   if (currency === "USD") return { type: "account/deposit", payload: amount };

//   return async function (dispatch, getState) {
//     dispatch({ type: "account/convertingCurrency" });
//     // API call

//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     );

//     const data = await res.json();
//     const converted = data.rates.USD;
//     // console.log(data);
//     // console.log(converted);

//     // return action
//     dispatch({
//       type: "account/deposit",
//       payload: converted,
//     });
//   };
// }

// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }

// export function requestLoan(amount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: {
//       amount: amount,
//       purpose: purpose,
//     },
//   };
// }

// export function payLoan() {
//   return { type: "account/payLoan" };
// }
