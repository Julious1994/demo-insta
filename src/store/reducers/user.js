import * as ACTIONS from './../actions/userAction';

const userState = {
    user: [
        { username: 'amit1994', email: 'amit.patel@gmail.com', },
    ],
}

export default function reducer(state = userState, action) {
    switch (action.type) {
        case ACTIONS.SET_USER:
            const username = action.username;
            return Object.assign({}, state);
            break;
        default:
            return state;
            break;
    }
}