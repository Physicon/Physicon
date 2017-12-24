import request from 'superagent'

export const fetchCoursesList = () => {
    return new Promise((resolve, reject) => {
        request
            .get(`http://www.mocky.io/v2/5a3f94a92e0000f70c44fe7c`)
            .then(({body}) => {
                resolve(body)
            })
            .catch(({message}) => {
                reject(message)
            })
    })
}