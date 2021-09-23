import React, {useRef} from 'react'
import PostCard from './PostCard'
import {Link} from 'react-router-dom';

const PostList = (props) => {

    const inputEl = useRef("");
    const renderPostList = props.postList.map((post) => {
        return(
            <PostCard key={post.id} post={post} deleteHandler={props.deleteHandler}/>
        );
    });

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
    }

    return (
        <div className="ui container">    
        <div className="mt-5 list-group pt-4">
            <div className="d-flex align-items-center justify-content-between mb-3">    
            <h5>Post List</h5>
            <Link to="/add" className="btn btn-primary btn-md pl-4 pr-4">Add</Link>
        </div>
        <div className="ui search">
            <div className="ui icon input w-100 mb-3">
            <input 
            ref={inputEl}
            name="search" 
            type="text" 
            placeholder="Search Posts" 
            value={props.term}
            onChange={getSearchTerm}
            />
            <i className="search icon"></i>
            </div>
        </div>
           {renderPostList.length > 0 ? renderPostList : "No Search Results Found!"}
        </div>
        </div>
    )
}

export default PostList
