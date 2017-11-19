import * as ACTIONS from './../actions/postAction';

const postState = {
    post: [
        {   
            postId: 1, 
            userId: 1, 
            postImage: '', 
            postDescription: '', 
            createdDate: '', 
            comments: [
                { commentId: 1, commentDescription: '', createdDate: '', userId: 1}
            ],
            likes: [
                { likeId: 1, userId: 1 },
            ],
        }
    ],
}

export default function reducer(state = postState, action) {
    const postList = state.post;
    const { data } = action;

    switch (action.type) {
        case ACTIONS.GET_POST:
            return state;
            break;
        case ACTIONS.ADD_POST: {
            const maxPostId = state.post.reduce((prev, current) => {
                return Number(prev.postId) > Number(current.postId) ? prev : current
            }).postId;
            const postData = {
                postId: maxPostId + 1,
                createdDate: Date(),
                userId: data.userId,
                postDescription: data.postDescription,
                comments: [],
                likes: [],
                ...data,
            }
            const post = state.post;
            post.push(postData);
            return Object.assign({}, state, {
                post,
            });
            break;
        }
        case ACTIONS.ADD_COMMENT: {

            const postIndex = state.post.findIndex( p => p.postId === data.postId);
            const currentPost = state.post[postIndex];
            const maxCommentId = currentPost.comments.length > 0 ?currentPost.comments.reduce((prev, current) => {
                return Number(prev.commentId) > Number(current.commentId) ? prev : current
            }).commentId : 0;
            const commentData = {
                commentId: maxCommentId + 1,
                createdDate: Date(),
                userId: data.userId,
                postId: data.postId,
                commentDescription: data.commentDescription,
            }
            currentPost.comments.push(commentData);
            postList[postIndex] = currentPost;
            return Object.assign({}, state, {
                post: postList,
            });
            break;
        }
        case ACTIONS.ADD_LIKE: {
            const postIndex = state.post.findIndex( p => p.postId === data.postId);
            const currentPost = state.post[postIndex];
            const targetIndex = currentPost.likes.findIndex(like => like.userId === data.userId);
            if (targetIndex === -1) {
                const likeData = {
                    likeId: currentPost.likes.length + 1,
                    userId: data.userId,
                }
                currentPost.likes.push(likeData);
            }
            postList[postIndex] = currentPost;
            return Object.assign({}, state, {
                post: postList,
            });
            break;
        }
        case ACTIONS.REMOVE_LIKE: {
            const postIndex = state.post.findIndex( p => p.postId === data.postId);
            const currentPost = state.post[postIndex];
            const targetIndex = currentPost.likes.findIndex(like => like.userId === data.userId);
            currentPost.likes.splice(targetIndex, 1);
            postList[postIndex] = currentPost;
            return Object.assign({}, state, {
                post: postList,
            });
            break;
        }
        default:
            return state;
            break;
    }
}