import React from 'react';
import UserService from "./service";

export default class App extends React.Component{
    constructor(){
        super();
        this.userService = UserService.instance;
        this.findAllUsers = this.findAllUsers.bind(this);
        this.displayUsers = this.displayUsers.bind(this);
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
            });
    }

    displayUsers(){
        let users = this.state.users.map(
            (user, index) => {
                return <li key={index}>{user.username}</li>
            }
        );

        return users;
    }

   render(){
        return <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-6 col-md-6 col-lg-6'>
                    <h1>Group 1</h1>
                    <ul>{this.displayUsers()}</ul>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-6'>
                    <h1>Group 2</h1>
                    <ul>{this.displayUsers()}</ul>
                </div>
            </div>
        </div>
   }
}
