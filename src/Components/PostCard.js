import React from 'react';
import {Link} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

const PostCard = ({post, deleteHandler}) => {
    return (
        <div className="list-group-item" key={post.id}>
            <div className="d-flex align-items-center justify-content-between">
            <div className="content">
                  <Link style={{color : "inherit", textDecoration: 'none'}} to={{pathname: `/post/${post.id}`, state:{post: post}}}>
                    <div className="header">{post.name}</div>
                    <div>{post.email}</div>
                  </Link>
                </div>
                <div>
                <Link to={{pathname: `/edit`, state:{post: post}}}>
                <i role="button" data-tip="Edit" className="text-success edit ml-2 outline icon cursor-pointer"></i>
                </Link>
                <i role="button" data-tip="Delete" onClick={() => deleteHandler(post.id)} className="text-danger trash alternate outline icon cursor-pointer"></i>
                </div>
            </div>
            <ReactTooltip />
            </div>
    )
}

export default PostCard 