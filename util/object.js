export const getObjectLength = obj => {
    let size = 0
    for (key in obj) {
        if (obj.hasOwnProperty(key))
            size++;
    }
    return size
}