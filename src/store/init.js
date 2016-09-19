import { createStore } from 'redux';
import reducer from '../reducers/';

module.exports = function initStore(state) {
    const store  = createStore(reducer, state);
    
    if (module.hot) {
      module.hot.accept('../reducers', () =>
        store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
      );
    }
    return store;
}