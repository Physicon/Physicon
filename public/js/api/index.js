import request from 'superagent'

export const fetchCoursesList = () => {
    return new Promise((resolve, reject) => {
        request
            .post(`https://api.qa.imumk.ru/api/mobilev1/update`)
            .field('data', "")
            .then(({body}) => {
                resolve(body)
            })
            .catch(({message}) => {
                reject(message)
            })
    })
}