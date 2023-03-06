import {combineReducers} from 'redux';
import incrementCounter from './IncReducer';
const rootR = combineReducers({incrementCounter});
export default rootR;
