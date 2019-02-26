import React from 'react';
import UserService from "./service";

export default class App extends React.Component{
    constructor(){
        super();
        this.userService = UserService.instance;
        this.state = {users: []};
    }

    componentDidMount(){
        this.findAllUsers();
    }

    findAllUsers(){
        this.userService
            .findAllUsers()
            .then(users => {
                this.setState({users: users})
            })
    }

    renderUserRow
   render(){
        return <div className='container-fluid'>
            <div className='row'>

            </div>
        </div>
   }
}
