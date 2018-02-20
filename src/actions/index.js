import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_SINGLE_POST = 'fetch_single_post';
export const ADD_POST = 'add_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY = 'SLAYER2468'

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}?key=${API_KEY}`);
    return{
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchPostById(id){
    const request = axios.get(`${ROOT_URL}/${id}?key=${API_KEY}`);
    return{
        type: FETCH_SINGLE_POST,
        payload: request
    };
}

export function addPost(values, callback){
    const request = axios.post(`${ROOT_URL}?key=${API_KEY}`,values)
                        .then(() => callback());
    return{
        type: ADD_POST,
        payload: request
    };
}

export function deletePost(postId, callback){
    const request = axios.delete(`${ROOT_URL}/${postId}?key=${API_KEY}`)
                        .then(() => callback());
    return{
        type: DELETE_POST,
        payload: postId
    };
}