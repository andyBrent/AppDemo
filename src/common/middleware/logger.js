export default (logger = store => next => action => {
  console.group(action.type);
  // console.info(`dispatching ${JSON.stringify(action)}`);
  let result = next(action);
  // console.log(`next state: ${JSON.stringify(store.getState())}`);
  console.groupEnd();
  return result;
});
