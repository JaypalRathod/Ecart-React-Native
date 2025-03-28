import { combineReducers } from 'redux';
import homeReducer from '@modules/home/api/slice';
import categoriesSaga from '@modules/categories/api/saga';

const rootReducer = combineReducers({
    home: homeReducer,
    categories: categoriesSaga ,
});

export default rootReducer;
