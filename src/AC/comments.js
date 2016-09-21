import AppDispatcher from '../dispatcher'
import { ADD_COMMENT } from '../constants'

export function addComment(articleId, name, text) {
	const id = articleId + Date.now().toString();
	const action = {
        type: ADD_COMMENT,
        payload: { articleId, id, name, text }
    }
	AppDispatcher.dispatch(action)
}