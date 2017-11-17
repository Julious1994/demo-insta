import { combineReducers } from 'redux';

import user from './user';
import post from './post';

const instaApp = combineReducers({
    user,
    post,
});

export default instaApp;