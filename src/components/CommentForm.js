import React, { Component, PropTypes } from 'react'
import { addComment } from '../AC/comments'

class CommentForm extends Component {
	render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
					<label form="username">Username</label>
					<br/>
					<input type="text" name="name" ref="name" />
					<br/>
					<label form="username">Comment text</label>
					<br/>
					<textarea name="text" cols="30" rows="10" ref="text" />
					<br/>
					<button type="submit">Add comment</button>
                </form>
            </div>
        )
    }

	handleSubmit = (e) => {
		e.preventDefault();
		const name = this.refs.name.value;
		const text = this.refs.text.value;
		if (name && text) {
			this.refs.name.value = '';
			this.refs.text.value = '';
			addComment(this.props.articleId, name, text)
			this.props.showCommentsAfterAdd();
		} else {
			alert('Please fill all fields');
		}
	}
}

export default CommentForm