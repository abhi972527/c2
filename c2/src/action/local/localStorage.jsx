export const  Local = (key) => {
    let local = JSON.parse(localStorage.getItem(key))
    return local;
}

export const Data = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}