import { toast } from 'react-toastify';
import { postActions as types } from '../actionTypes';
import api from '../../Api/posts';

export const fetchPost = () => async (dispatch) => {
  try {
    const retivedPostList = await api.get('/posts');
    dispatch({
      type: types.FETCH_POSTS,
      payload: {
        posts: retivedPostList.data,
      },
    });
  } catch (e) {
    console.log(e)
  }
};

export const addPost = (data) => async (dispatch, getState) => {
  try {
    const { posts } = getState().post;
    const response = await api.post('/posts', data);
    dispatch({
      type: types.UPDATE_POSTS,
      payload: {
        posts: [...posts, response.data],
      },
    });
  } catch (e) {
    console.log(e)
  }
};

export const updatePost = (post) => async (dispatch, getState) => {
  try {
    const { posts } = getState().post;
    const response = await api.put(`/posts/${post.id}`, post);
    const {id}= response.data;

    dispatch({
      type: types.UPDATE_POSTS,
      payload: {
        posts: posts.map((item)=> {
          return item.id === id ? {...response.data} : item
        }),
      },
    });
  } catch (e) {
    console.log(e)
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.delete(`/posts/${id}`);
    toast.success('Deleted Successfully!')
    dispatch(fetchPost());
  } catch (e) {
    console.log(e)
  }
};

