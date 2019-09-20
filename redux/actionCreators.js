import { bindActionCreators } from "redux"
import { TYPES } from './actionTypes'

export const addArticle = article => ({
    type: TYPES.ADD_ARTICLE,
    payload: article,
})

export const removeArticle = id => ({
    type: TYPES.REMOVE_ARTICLE,
    payload: id,
})

export const setArticleVisible = (id, visible) => ({
    type: TYPES.SET_VISIBLE,
    payload: {
        id, 
        visible
    }
})

export const fetchArticlesPending = () => ({
    type: TYPES.FETCH_ARTICLES_PENDING,
    payload: {}
})

export const fetchArticlesSuccess = (articles) => ({
    type: TYPES.FETCH_ARTICLES_SUCCESS,
    payload: articles
})

export const fetchArticlesError = (error) => ({
    type: TYPES.FETCH_ARTICLES_ERROR,
    payload: error
})


// const loadData;
const initialArticles = [
    {
      title: "iPhone 12 Announced",
      content: "The iPhone 12 was announced today at the Steve Jobs theater, bringing apple fans teleportation capabilities for the first time.",
      date: "September 9, 2019",
      "id": "a",
      "visible": true
    },
    {
      title: "Man Eats Toupee, in Fit of Rage",
      content: "After an exhausting day, the man removed his wig and started eating it before a crowd of onlookers.",
      date: "September 8, 2019",
      "id": "b",
      "visible": true
    }
]
  
const fetchData = async (ms) => {
    return new Promise((res, rej) => {
        setTimeout(() => { res(initialArticles) }, ms)
    }).catch(x => console.log(x))
}

// thunk action. Returns a function, which signals thunk to call that returned function by passing in the redux dispatch function.
export const initArticles = () => {
    return async dispatch => {
        dispatch(fetchArticlesPending())
        try {
            const articles = await fetchData(700)
            dispatch(fetchArticlesSuccess(articles))
        }
        catch (e) {
            dispatch(fetchArticlesError(e))
        }
    }
}