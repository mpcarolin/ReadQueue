import { useState, useEffect } from 'react'
/* Provides components with filter functionality. Returns an isHidden function, returning true if an element should be hidden in a component, and an updateFilter function, which updates the filter with a string search query 
 * elements is an array of non-null objects.
 * textSelector is a function that returns the string property of an element which is compared against the search query 
 */
export const useFilter = (elements, textSelector, initialSearchQuery=null)=> {
    if (!textSelector || typeof(textSelector) !== 'function') {
        throw new Error("textSelector must be defined and be a function that returns a string property of an element.")
    }

    const [invisibleElements, setInvisibleElements] = useState(new Set(elements))

    const isHidden = (id) => invisibleElements.has(id)

    const updateFilter = (searchText) => {
      checkSearchText(searchText)
      const nextSet = new Set()
      for (let element of elements) {
        if (!textMatches(element, searchText, textSelector)) {
          nextSet.add(element)
        }
      }
      setInvisibleElements(nextSet)
    }

    useEffect(() => {
        if (initialSearchQuery) {
            updateFilter(initialSearchQuery)
        }
    }, [])

    return [isHidden, updateFilter, invisibleElements]
}

const checkSearchText = (text) => {
    if (text === null || text === undefined) {
        throw new Error("Search text must be defined. Found: " + text)
    }
}


const textMatches = (element, text, textSelector) => {
    let elementText = textSelector(element)
    if (!elementText) {
        throw new Error("Element must have a text property that textSelector uses. Returned null.", element)
    }
    const match = elementText
        .toLowerCase()
        .includes(text.toLowerCase())
    return match
}