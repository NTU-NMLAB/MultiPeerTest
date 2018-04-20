import multipeerMiddlewares from '../submodule/react-native-multipeer/middlewares/middlewares';
const thunkMiddleware = ({ dispatch, getState }) => (
  next => (
    (action) => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }
      return next(action);
    }
  )
);

// const loggerMiddleware = ({ getState }) => (
//   next => (
//     (action) => {
//       const prevState = getState();
//       const returnValue = next(action);
//       const nextState = getState();
//       console.log('%c prev state', 'color: #9E9E9E', prevState);
//       console.log('%c action', 'color: #03A9F4', action);
//       console.log('%c next state', 'color: #4CAF50', nextState);
//       return returnValue;
//     }
//   )
// );

const middlewares = [
  thunkMiddleware,
  // loggerMiddleware,
].concat(multipeerMiddlewares);

export default middlewares;
