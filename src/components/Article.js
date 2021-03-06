import React, { PropTypes, Component } from 'react'
import { findDOMNode } from 'react-dom'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen'
import { deleteArticle } from '../AC/articles'
import { commentStore } from '../stores'

class Article extends Component {
    constructor() {
        super()
        this.state = {
            some: ''
        }
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    componentDidUpdate() {
    }

    render() {
        const { article, isOpen, toggleOpen } = this.props
        if (!article) return <h3>No article</h3>

        const { title, text, comments, id } = article
        const textItem = isOpen ? <section>
            {text}
            <div><CommentList comments = {article.getRelation('comments')} ref="list" /></div>
			<CommentForm showCommentsAfterAdd={this.showCommentsAfterAdd} articleId={id} />
        </section> : null
        return (
            <div>
                <h3 onClick = {toggleOpen} ref="title">
                    {title}
                    <a href="#" onClick={this.handleDelete}>delete me</a>
                </h3>
                {textItem}
            </div>
        )
    }

    handleDelete = (ev) => {
        ev.preventDefault()
        deleteArticle(this.props.article.id)
    }

    showCommentsAfterAdd = () => {
		this.refs.list.setState({
			isOpen: true
		})
	}
}


Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        id: PropTypes.string.isRequired
    }),

    //From toggleOpen decorator
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
}

export default Article