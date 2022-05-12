// import { Context } from 'react';

import { ReactReduxContext } from 'react-redux';

function Provider({ store, children }) {
  return <ReactReduxContext.Provider value={store}>{children}</ReactReduxContext.Provider>;
}

export default Provider;
