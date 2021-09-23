import React from 'react';
import {Link} from 'react-router-dom';

const PostDetails = (props) => {
    const {name, email, id, content} = props.location.state.post
    return (
       <div className="main mt-5 pt-5 container" key={id}>
            <div className="card mb-3">
            <img src="https://via.placeholder.com/400x200" alt="" />    
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">email : {email}</p>
                <p>{content}</p>
            </div>
            </div>
            <Link to="/" className="btn btn-primary mt-3 pl-3 pr-3">Back to list</Link>
       </div> 
    )
}

export default PostDetails 