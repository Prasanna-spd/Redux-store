const redux = require("redux");
const combineReducers = redux.combineReducers;
const createStore = redux.createStore;

// console.log("helo redux");
const Buy_Cake = "Buy-Cake";
const Buy_Icecreams = "Buy-Icecreams";

// --- Action Creater -----//
function buyCake() {
  return {
    type: Buy_Cake,
    info: "First redux action",
  };
}
function buyIcecreams() {
  return {
    type: Buy_Icecreams,
    info: "Second redux action",
  };
}

// --- Action Creater -----//

// const initialState = {
//   numOfCakes: 10,
//   numOfIcecreams: 20,
// };

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case Buy_Cake:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case Buy_Icecreams:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case Buy_Cake:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case Buy_Icecreams:
//       return {
//         ...state,
//         numOfIcecreams: state.numOfIcecreams - 1,
//       };
//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);
console.log("Initial State", store.getState());

// ----Listener----//
const unsubscribe = store.subscribe(() => {
  console.log("updated State", store.getState());
});

// ----Listener----//

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecreams());
store.dispatch(buyIcecreams());
store.dispatch(buyIcecreams());

unsubscribe();
