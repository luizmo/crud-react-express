const axios = require('axios');
const baseURL = '' // url database

const list = async(key) => {
    const content = await axios.get(baseURL+key)
    if(content.data){
        const objects = Object.keys(content.data).map(key => {
            return {
                id: key,
                ...content.data[key]
            }
        })
        return objects
    }
    return []
}

const remove = async(key, id) => {
    await axios.delete(baseURL + key + '/'+ id)
    return true
}

const get = async(key, id) => {
    const content = await axios.get(baseURL+ key + '/' + id)
    return {
        id: id,
        ...content.data 
    }
}

const update = async(key, id, data) =>{
    await axios.put( baseURL + key + '/' + id , data )
    return true
}

const create = async(key, data) => {
    await axios.put( baseURL + key, data )
    return true
}

module.exports= { list, remove, get, update, create }
