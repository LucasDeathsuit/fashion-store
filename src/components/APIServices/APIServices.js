
async function getStoriesData() {
    const data = await fetch('./RoupasStories.json');
    const roupasData = await data.json()
    return roupasData.roupas.sapatos;
}

async function getPromoData(category) {
    const data = await fetch('./RoupasStories.json');
    const roupasData = await data.json();
    return roupasData.roupas[category];
}

async function getCommentData(quantity) {
    const data = await fetch('./Comments.json')
    const commentsData = await data.json();
    return commentsData.comments.slice(0, quantity);
}


export { getStoriesData , getPromoData, getCommentData}