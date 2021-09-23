import React, {useState, useEffect} from 'react'
import Header from '../Components/Header';
import AddPosts from './AddPosts';
import PostList from './PostList';
import PostDetails from '../Components/PostDetails';
import EditPost from '../Components/EditPosts';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import ReactTooltip from 'react-tooltip';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import '../Styles/App.css';
import { connect } from 'react-redux';
import * as actions from '../Redux/actions/action-post';

function App(
  {
    posts, fetchPost, addPost, deletePost, updatePost, ...props
  }){

  const [searchTerm, setSearchTerm] = useState("");
  const [serchResult, setSearchResult] = useState([]);

  const addPostHandler = async (post) => {
    const request = {
      ...post,
      id: Math.floor(1000 + Math.random() * 9000)
    }
    addPost(request);
  }

  const updatePostHandler = async (post) => {
    updatePost(post);
  }

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if(searchTerm !== ""){
      const newSearchResult = posts.filter((post) => {
        return Object.values(post).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
      })
      setSearchResult(newSearchResult);
    }else{
      setSearchResult(posts);
    }
  }

  useEffect(() => {
    fetchPost();
   }, [])

  const deleteHandler = (id) => {
    confirmAlert({
      title: 'Delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            deletePost(id);
          }
        },
        {
          label: 'No'
        }
      ]
    });
  }
 
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route 
         path="/" 
         exact 
         render={(props) => (
         <PostList 
         {...props} 
         postList={searchTerm.length < 1 ? posts : serchResult} 
         deleteHandler={deleteHandler} 
         term={searchTerm}
         searchKeyword={searchHandler}
         />
         )} />
        <Route 
        path="/add" 
        render={(props) => (
        <AddPosts 
        {...props} 
        addPostHandler={addPostHandler}
        />)} />
        <Route path="/post/:id" component={PostDetails} />
        <Route path="/edit" render={(props) => <EditPost {...props} updatePostHandler={updatePostHandler} />} />
        </Switch>
      </Router>
      <ToastContainer />
      <ReactTooltip />
    </div>
  );
}


const mapStateToProps = ({ post }) => ({
  posts: post.posts
});

const mapDispatchToProps = (dispatch) => ({
  fetchPost: async () => dispatch(actions.fetchPost()),
  addPost: async (data) => dispatch(actions.addPost(data)),
  deletePost: async (id) => dispatch(actions.deletePost(id)),
  updatePost: async (post) => dispatch(actions.updatePost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
