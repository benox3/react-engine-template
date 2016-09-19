import { combineReducers } from 'redux';
import env from './env'

const rootReducer = function(state) {
    return {
        env: env({
            publicPath: state.publicPath,
            title: state.title,
            versions: state.versions,
            isProduction: state.isProduction
        })
    }
};

export default rootReducer;
