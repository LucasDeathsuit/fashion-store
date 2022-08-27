import axios from 'axios'

const BASE_URL = "http://localhost:13233/ClothStore/rest"

async function createCloth(name, description, iconPath, price, type) {
    try {
        const url = BASE_URL + "/clothes"
        const data = await axios.post(url, {
            name: name,
            description: description,
            imageURL: iconPath,
            price: price,
            type: type
        });
    } catch (err) {
        console.log(err)
    }
}

async function createComment(name, picture, rate, title, comment) {
    try {
        const url = BASE_URL + "/comments"   
        const resp = await axios.post(url, {
            name: name,
            picture: picture,
            rate: rate,
            title: title,
            comment: comment
        })
    } catch (err) {
        console.log(err)
    }
}

async function getClothes() {
    try {
        const url = BASE_URL + "/clothes"
        const data = await axios.get(url)
        return data.data;
    } catch (err) {
        console.log(err)
    } 
}

async function getComments() {
    try {
        const url = BASE_URL + "/comments"
        const resp = await axios.get(url)
        return resp.data
    } catch (err) {
        console.log(err)
    }
}

async function getClothesByType(category) {
    try {
        const url = BASE_URL + "/clothes/type/" + category
        const data = await axios.get(url)
        return data.data;
    } catch (err) {
        console.log(err)
    } 
}

async function getStoriesData() {
    const data = await fetch('./RoupasStories.json');
    const roupasData = await data.json()

    const tempRoupas = []

    for (let key in roupasData.roupas) {
        if (key !== "tudo")
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


export {createCloth, getComments, createComment, getClothes, getClothesByType, getStoriesData, getCategoriesData, getPromoData, getCommentData }