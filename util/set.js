export const ImmutableSetUtil = {
    add: (set, value) => {
        const nextSet = new Set(set)
        return nextSet.add(value)
    },
    clone: (set) => new Set(set)
}