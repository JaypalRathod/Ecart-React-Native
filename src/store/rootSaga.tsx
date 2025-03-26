import homeSaga from '@modules/home/api/saga';
import { fork } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        fork(homeSaga),
    ]);
}
