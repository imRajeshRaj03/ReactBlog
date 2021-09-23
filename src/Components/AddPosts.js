import React from 'react';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';

class AddPost extends React.Component {

    state = {
        name: "",
        email: "",
        content: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === "" || this.state.content === ""){
            toast.error('Please fill the forms!');
            return 
        }else{
            toast.success('Created Successfully!')
        }
        this.props.addPostHandler(this.state);
        this.setState({name: "", email: "", content: ""});
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="ui main container pt-5 mt-5">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  
                 <h4>Add Post</h4>
                 <Link to="/" className="btn btn-primary ml-3 lr-3 ">Back</Link>
                </div>
                <form className="ui form" onSubmit={this.handleSubmit} method="post">
                    <div className="field">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="text" 
                        placeholder="Name" 
                        value={this.state.name}
                        onChange={(e) => this.setState({name: e.target.value})}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input 
                        type="text" 
                        name="email" 
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(e) => this.setState({email: e.target.value})}
                        />
                    </div>
                    <div className="field">
                        <label>Content</label>
                        <textarea name="content" onChange={(e) => this.setState({content: e.target.value})} placeholder="Enter content">{this.state.content}</textarea>
                    </div>
                    <button className="btn btn-primary btn-md pl-4 pr-4">Add</button>
                </form>
            </div>
        )
    }
}

export default AddPost