import BasicStore from './BasicStore'
import AppDispatcher from '../dispatcher'
import { ADD_COMMENT } from '../constants'

export default class Comments extends BasicStore {
    constructor(...args) {
        super(...args)

		AppDispatcher.register((action) => {
            const { type, payload } = action
			const newComment = {
            	id: payload.id,
				name: payload.name,
				text: payload.text,
			}

            switch (type) {
                case ADD_COMMENT:
                	const articleStore = this.getStores().articles || false;
					this._add(newComment)
					if (articleStore) {
						articleStore.addComment(payload.articleId, payload.id)
					}
					this.emitChange()
                    break;
            }
        })
    }
}