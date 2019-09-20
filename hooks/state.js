import { useSelector } from 'react-redux'

export const useSharedState = (selector) => {
    const elements = useSelector(state => selector(state).elements)
    const pending = useSelector(state => selector(state).pending)
    const error = useSelector(state => selector(state).error)
    return [elements, pending, error]
}