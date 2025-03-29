
function getImageURL(name) {
    return new URL(`../assets/albums/${name}`, import.meta.url).href
}

export {getImageURL};