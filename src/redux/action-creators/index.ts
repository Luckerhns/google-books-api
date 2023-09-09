import * as BookActionCreators from './book-creator'
import * as BooksActionCreators from './books-creator'

export default {
    ...BooksActionCreators,
    ...BookActionCreators
}