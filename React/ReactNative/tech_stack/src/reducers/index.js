import {combineReducers} from 'redux';
import libraryReducer from './libraryReducer';
import selectionRducer from './selectionReducer';

export default combineReducers ({
    libraries: libraryReducer,
    selectedLibraryId: selectionRducer
});