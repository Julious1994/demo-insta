export const SET_POST = 'SET_POST';
export const GET_POST = 'GET_POST';
export const ADD_POST = 'ADD_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_LIKE = 'ADD_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';


export const addPost = (data) => {
    const temp = { type: ADD_POST, data};
    return temp;
};

export const addComment = (data) => {
    const temp = { type: ADD_COMMENT, data};
    return temp;
}

export const addLike = (data) => {
    const temp = { type: ADD_LIKE, data};
    return temp;
}

export const removeLike = (data) => {
    const temp = { type: REMOVE_LIKE, data};
    return temp;
}