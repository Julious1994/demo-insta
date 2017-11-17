import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import instaApp from './store/reducers';
import * as ACTIONS from './store/actions/postAction';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    const result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return result;
};

export const store = createStore(instaApp, applyMiddleware(logger, thunk));

const post = {
    userId: 1,
    postDescription: 'My First Post',
}

const comment = {
    postId: 2,
    commentDescription: "Hello World",
    userId: 1,
}

const comment2 = {
    postId: 2,
    commentDescription: "Hello Insta",
    userId: 1,
}

store.dispatch(ACTIONS.addPost(post));
store.dispatch(ACTIONS.addComment(comment));
store.dispatch(ACTIONS.addComment(comment2));
store.dispatch(ACTIONS.addLike({ userId: 1, postId: 2}));
store.dispatch(ACTIONS.addLike({ userId: 1, postId: 2}));
store.dispatch(ACTIONS.addLike({ userId: 1, postId: 2}));

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
