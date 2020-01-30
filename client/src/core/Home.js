import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { allMentor } from './Api';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            user: []
        }
    }

    componentDidMount() {
        allMentor().then(data => {
            if(data.error) {
                console.log(data.error)
            }else {
                this.setState({ user: data });
            }
        });
    }

    renderPost = users => (
        <div>
            {
                users.map((user, i) => (
                    <div key={i}>
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between">
                                {user.name}
                                <Link className="p-2 btn btn-raised bg-success" to={`/profile/${user._id}`}>View Profile</Link><br />
                            </li>
                        </ul>
                    </div>
            ))}
        </div>
    )

    render() {
        const { user } = this.state;
        return(
            <div className="container mt-5">
                <h1>All Mentor has been created</h1>
                {this.renderPost(user)}
            </div>
        );
    }
}

export default Home;