import Article from './Article'
import Comments from './Comments'
import { normalizedArticles, normalizedComments } from '../fixtures'

const stores = {}

Object.assign(stores, {
    articles: new Article(stores, normalizedArticles),
    comments: new Comments(stores, normalizedComments)
})

export const commentStore = stores.comments
export const articleStore = stores.articles

window.stores = stores