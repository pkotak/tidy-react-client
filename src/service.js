let _singleton = Symbol();
const BASE_URL = 'localhost:5000';
export default class UserService{
    constructor(singletonToken){
        if(_singleton != singletonToken)
            throw new Error('Cannot instantiate')
    }

    static get instance(){
        if(!this[_singleton])
            this[_singleton] = new UserService(_singleton);
        return this[_singleton];
    }

    findAllUsers(){
        return fetch(BASE_URL + '/api/user')
            .then(response => {
                return response.json();
            })
    }

    findByUserName(username){
        return fetch(BASE_URL + '/api/user/' + username)
            .then(response => {
                return response.json();
            })
    }

    completeTask(user){
        return fetch('', {
            method : 'put',
            body: JSON.stringify(user),
            headers: {'Content-Type':'application/json'}
        })
    }
}