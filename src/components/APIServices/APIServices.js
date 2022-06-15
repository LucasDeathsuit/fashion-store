
async function getStoriesData() {
    const data = await fetch('./RoupasStories.json');
    const roupasData = await data.json()

    console.log(roupasData.roupas)

    return roupasData.roupas.tudo
}

async function getPromoData(type) {
    const data = await fetch('./RoupasStories.json');
    const roupasData = await data.json();

    console.log(roupasData.roupas.blusas)
    console.log(type)
    return roupasData.roupas[type];
}

async function getCommentData(quantity) {
    const data = await fetch('./Comments.json')
    const commentsData = await data.json();
    return commentsData.comments.slice(0, quantity);
}


export { getStoriesData , getPromoData, getCommentData}