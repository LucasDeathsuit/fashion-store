
async function getStoriesData() {
    const data = await fetch('./RoupasStories.json');
    const roupasData = await data.json()

    const tempRoupas = []

    for (let key in roupasData.roupas) {
        if(key !== "tudo")
        tempRoupas.push(roupasData.roupas[key][0])
    }

    return tempRoupas
}

async function getCategoriesData() {
    const data = await getStoriesData()
    const categoriesNames = data.map(data => data.name.toLowerCase());

    return categoriesNames
}

async function getPromoData(type) {
    const data = await fetch('./RoupasStories.json');
    const roupasData = await data.json();
    return roupasData.roupas[type];
}

async function getCommentData(quantity) {
    const data = await fetch('./Comments.json')
    const commentsData = await data.json();
    return commentsData.comments.slice(0, quantity);
}


export { getStoriesData, getCategoriesData, getPromoData, getCommentData }