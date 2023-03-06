import {createStore} from 'redux';
import rootR from './rootReducer';
const StoreRedux = createStore(rootR);
export default StoreRedux;
