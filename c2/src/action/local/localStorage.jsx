export const  getLocal = (key) => {
    let local = JSON.parse(localStorage.getItem(key))
    return local;
}

export const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}